/*
### --------------------------------------------**Part 1: Understanding Hash Functions**

1. **Research**: Begin by researching and understanding what hash functions are, how they work, and their 
  applications in computer science and data storage.
*/
/*
### --------------------------------------------**Part 2: Implementing a Custom Hash Function**

1. **Custom Hash Function**: Implement a custom hash function in JavaScript. Your hash function should take a 
  string as input and produce a hash code (an integer) as output. Be creative, but ensure that your function 
  distributes values uniformly.
*/
function hash(string, length) {
  if (typeof string !== "string") {
    throw Error("Invalid input key");
  }
  const prime1 = 2;
  const prime3 = 137;

  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    let charcode = string.charCodeAt(index);
    sum += Math.trunc(charcode);
  }
  return Math.trunc((prime1 * prime3 * sum) % length);
}

/*
2. **Collision Handling**: Implement a collision resolution strategy. You can choose from methods like 
  separate chaining (using linked lists), open addressing (linear probing, quadratic probing), or any other 
  technique you prefer.
*/
 / Separate chaining will be used for collision handling. /
/*
### **Part 3: Building a Hash Table**

1. **Hash Table Class**: Create a JavaScript class for a hash table that uses your custom hash function. 
  Include methods for inserting key-value pairs, retrieving values by key, and deleting key-value pairs.

2. **Testing**: Create test cases to ensure that your hash table and custom hash function work correctly. 
  Test scenarios should include inserting, retrieving, and deleting values, as well as handling collisions 
  gracefully.
*/


class HashTable {
  #table;
  size;

  
  /**
   * Creates an instance of this custom Hash Table class accepting a number representing the initial
   * capacity of the inner collection. If there is no input or it is invalid, then a default value is
   * used for the storing capacity.
   * @param {number} capacity 
   */
  constructor(capacity) {
    if (!capacity || typeof capacity !== 'number') capacity = 25;
    this.#table = new Array(capacity).fill(null);
    this.size = 0;
  }
  /**
   * 
   * @param {string} string 
   * @returns a number to which the input is converted
   * @throws Error if an invalid input is receipt
   */
  #hash(string) {
    return hash(string,this.#table.length);
  }
  /**
   * 
   * @param {string} key 
   * @param {any} value 
   */
  insert(key, value) {
    if (typeof key !== "string") {
      throw new Error("please provide a key in string format");
    }
    const hash = this.#hash(key);
    //empty slot
    if (this.#table[hash] == null) {
      this.#table[hash] = {
        key: key,
        value: value,
      };
    }
    //not empty slot -> handling collision
    else {
      const obj = {
        key: key,
        value: value,
        head: this.#table[hash],
      };
      this.#table[hash] = obj;
    }
    this.size++;
  }
  retrieve(key) {
    let hash = this.#hash(key);
    if (this.#table[hash]) {
      let head = this.#table[hash];
      while (head != null) {
        if (head["key"] === key) {
          return head;
        }
        head = head["head"];
      }
    }
    return undefined;
  }
  display() {
    console.log(this.#table);
  }
  remove(key) {
    let hash = this.#hash(key);
    //hash found
    if (this.#table[hash]) {
      //there is no chain
      if (this.#table[hash]['head'] == null && this.#table[hash]['key'] === key) {
        //make null and return;
        this.#table[hash] = null;
        return true;
      }
      //there is an existing chain due to collisions
      else {
        //check first node
        if (this.#table[hash]["key"] === key) {
          let curr = this.#table[hash]; //current head
          let next = curr['head'];
          this.#table[hash]=next;
          curr=null;
          return true;
        } else {
          //serach the corresponding node
          let head = this.#table[hash];
          let next = head["head"];
          while (next != null && next["key"] !== key) {
            head = next;
            next = next["head"];
          }
          if (next != null && next["key"] === key) {
            head["head"] = next["head"];
            next = null;
            return true;
          }
        }
      }
    }
    return false;
  }
  search(key){
    let hash = this.#hash(key);
    if (this.#table[hash]) {
      let head = this.#table[hash];
      while (head != null) {
        if (head["key"] === key) {
          return true;
        }
        head = head["next"];
      }
    }
    return false;
  }
}

const ht = new HashTable();

console.log("Inserting keys: 'apple', 'banana', 'grape', 'apricot', 'berry', 'melon', 'lemon'");
ht.insert("apple", "🍎");
ht.insert("banana", "🍌");
ht.insert("grape", "🍇");
ht.insert("apricot", "🍑");
ht.insert("berry", "🫐");
ht.insert("melon", "🍈");
ht.insert("lemon", "🍋");

console.log("\nHash table after insertions:");
ht.display();

console.log("\nRetrieving 'banana':", ht.retrieve("banana"));
console.log("Retrieving 'melon':", ht.retrieve("melon"));
console.log("Retrieving 'apple':", ht.retrieve("apple"));

console.log("\nRemoving 'banana'...");
ht.remove("banana");
console.log("Hash table after removing 'banana':");
ht.display();

console.log("\nRemoving 'apple'...");
ht.remove("apple");
console.log("Hash table after removing 'apple':");
ht.display();

console.log("\nSearching for 'grape':", ht.search("grape")); // true
console.log("Searching for 'banana':", ht.search("banana")); // false

console.log("\nRetrieving 'apricot':", ht.retrieve("apricot"));
console.log("Removing 'apricot'...");
ht.remove("apricot");
console.log("Hash table after removing 'apricot':");
ht.display();
/*
### **Part 4: Documentation and Analysis**

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain how your 
  custom hash function and hash table class work.

2. **Analysis**: Write a brief analysis of the performance of your custom hash function and hash table. 
  Discuss the time complexity of key operations (insertion, retrieval, deletion) and any trade-offs you 
  made in your implementation.

 */
/*
---------------------------------------
    Custom Hash Function & Hash Table
-------------------------------------

1. Custom Hash Function :

- The `hash` function takes a string as input and returns an integer hash code.
- It works by summing the character codes of each character in the string, multiplying by two prime, 
numbers taking the modulus with the table size.
- This approach helps distribute hash values more uniformly and reduces clustering, but collisions are 
still possible.

2. Collision Handling:

- The hash table uses **separate chaining** for collision resolution.
- If two different keys produce the same hash, their entries are stored as a linked list (chain) at that table 
index.
- Each node in the chain contains the key, value, and a reference (`head`) to the next node.

3. HashTable Class:

- The `HashTable` class encapsulates the hash table logic.
- It uses a private array (`#table`) to store entries and a private hash function (`#hash`) for key hashing.
- **insert(key, value)**: Adds a key-value pair. If a collision occurs, the new entry is added to the front of 
the chain.
- **retrieve(key)**: Searches for a key in the chain at the hashed index and returns the corresponding entry 
if found.
- **remove(key)**: Removes a key-value pair from the table, handling both single entries and chains.
- **search(key)**: Returns `true` if the key exists in the table, otherwise `false`.
- **display()**: Prints the current state of the hash table.

4. Usage:

- The hash table supports insertion, retrieval, deletion, and search operations for string keys.
- Collisions are handled gracefully using chaining, so multiple values can exist at the same index.

5. Error Handling:

- The hash function and insert method throw errors if the key is not a string, ensuring type safety.

-----------------------------------------------
*/