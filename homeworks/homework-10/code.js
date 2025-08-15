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
/ Separate chaining will be used for collision handling. /;
/*
### **Part 3: Building a Hash Table**

1. **Hash Table Class**: Create a JavaScript class for a hash table that uses your custom hash function. 
  Include methods for inserting key-value pairs, retrieving values by key, and deleting key-value pairs.

2. **Testing**: Create test cases to ensure that your hash table and custom hash function work correctly. 
  Test scenarios should include inserting, retrieving, and deleting values, as well as handling collisions 
  gracefully.
*/

/**
 * A custom Hash Table implementation using separate chaining for collision handling.
 *
 * @class
 * @classdesc
 * Stores key-value pairs with string keys, supporting insertion, retrieval, removal, and search operations.
 * Uses a private array as the underlying storage and handles collisions via linked objects (separate chaining).
 *
 * @property {number} size - The current number of elements in the hash table.
 *
 * @example
 * const table = new HashTable(10);
 * table.insert('foo', 123);
 * table.insert('bar', 456);
 * const item = table.retrieve('foo'); // { key: 'foo', value: 123 }
 * table.remove('bar'); // true
 * table.display(); // Shows internal table state
 */
class HashTable {
  /**Inner collection of the class */
  #table;
  /**This number represents the current elements that were added to the collection */
  size;

  /**
   * Creates an instance of this custom Hash Table class accepting a number representing the initial
   * capacity of the inner collection. If there is no input or it is invalid, then a default value is
   * used for the storing capacity.
   * @param {number} capacity
   */
  constructor(capacity) {
    if (!capacity || typeof capacity !== "number") capacity = 25;
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
    return hash(string, this.#table.length);
  }
  /**
   * Inserts a key-value pair into the Hash Table after applying the hashing to the key provided and
   * incrementing the size if the table.
   * If there is a collision, separate chaining will be used as a collision handling technique.
   * @param {string} key
   * @param {any} value
   * @throws { "Error: Please provide a key in string format" } If the given key is not a string formatted key.
   */
  insert(key, value) {
    if (typeof key !== "string") {
      throw new Error("Error: Please provide a key in string format");
    }

    console.log('Trying to insert:','[' ,key, value,']')

    const hash = this.#hash(key);

    //empty slot
    if (this.#table[hash] == null) {
      this.#table[hash] = {
        key: key,
        value: value,
      };
    }
    //not empty slot -> handle collision
    else {
      const obj = {
        key: key,
        value: value,
        head: this.#table[hash],
      };
      this.#table[hash] = obj;
    }
    this.size++;
    if (this.#checkLoadFactor()) {
      console.log('load faactor exceeded load faactor exceeded load faactor exceeded load faactor exceeded')
      this.#resizing();
      console.log('new size:', this.#table.length)
      this.#rehashing();
    }
  }
  /**
   * It returns the object that matches with the key that the user provides or undefined otherwise.
   * @param {string} key
   * @returns The object that matches with the key provided or undefined if such object does not exist in the
   * table.
   */
  retrieve(key) {
    let hash = this.#hash(key);
    if (this.#table[hash]) {
      let head = this.#table[hash];
      while (head != null) {
        if (head["key"] === key) {
          let copy = {
            key:head['key'],
            value:head['value']
          }
          console.log('DEBUG PURPOSES:',head['head']);
          return copy;
        }
        head = head["head"];
      }
    }
    return undefined;
  }
  /**
   * Shows the current state of the table.
   */
  display() {
    console.log(this.#table)
  }
  /**
   * It removes an object based on the input given and returns true in the successful case.
   * @param {string} key
   * @returns true if an object was removed and false otherwise.
   */
  remove(key) {
    let hash = this.#hash(key);
    //hash found
    if (this.#table[hash]) {
      //there is no chain
      if (
        this.#table[hash]["head"] == null &&
        this.#table[hash]["key"] === key
      ) {
        //make null and return;
        this.#table[hash] = null;
        return true;
      }
      //there is an existing chain due to collisions
      else {
        //check first node
        if (this.#table[hash]["key"] === key) {
          let curr = this.#table[hash]; //current head
          let next = curr["head"];
          this.#table[hash] = next;
          curr = null;
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
  /**
   * Searches based on the given key if there is an object that matches with it.
   * @param {string} key
   * @returns true if there already exists an object matching with the given key or false otherwise.
   */
  search(key) {
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
  #rehashing(table) {//todo: finish implementation
    //copy
    console.log('initializing rehashing')
    const copy = this.#table.slice();
    console.log('copy:',copy)

    //new table
    table = new Array(this.#table.length).fill(null);
    this.size=0;


    //traverse copy
    for (const element of copy) {

      if (element == null)continue;

      console.log('REHASHING TO:', element)
      //existing chain
      if (element["head"] != null) {

        console.log('EXISTING CHAIN')

        let curr = element;
        let next = curr["head"];

        curr["head"] = undefined;
        console.log('recalling insert() with isolated node curr:',curr)
        this.insert(curr["key"], curr["value"]);
        curr = null;

        //free and re insert nodes into the new table
        while (next != null) {
          console.log('traversing chain')
          curr = next;
          next = next["head"];
          curr["head"] = undefined;
          console.log('recalling insert() inside chain with curr being:', curr)
          this.insert(curr["key"], curr["value"]);
        }

      }
      else{
        //if there is no chain in slot:
        console.log('NON EXISTING CHAIN')
        this.insert(element['key'], element['value']);
      }
    }
  }

  #checkLoadFactor() {
    return this.size / this.#table.length >= 0.75;
  }

  #resizing() {
    this.#table.length=this.#table.length*2;
  }
}

const ht = new HashTable();

console.log(
  "Inserting keys: 'apple', 'banana', 'grape', 'apricot', 'berry', 'melon', 'lemon'"
);
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

1. Documentation

Custom Hash Function:
- The `hash` function takes a string and the table length as input and returns an integer hash code.
- It works by summing the character codes of each character in the string, multiplying by two prime numbers, and taking the modulus with the table size.
- This helps distribute hash values more uniformly and reduces clustering, but collisions are still possible.

HashTable Class:
- The `HashTable` class encapsulates the hash table logic.
- It uses a private array (`#table`) to store entries and a private hash function (`#hash`) for key hashing.
- **insert(key, value)**: Adds a key-value pair. If a collision occurs, the new entry is added to the front of the chain (separate chaining).
- **retrieve(key)**: Searches for a key in the chain at the hashed index and returns the corresponding entry if found.
- **remove(key)**: Removes a key-value pair from the table, handling both single entries and chains.
- **search(key)**: Returns `true` if the key exists in the table, otherwise `false`.
- **display()**: Prints the current state of the hash table.
- Error handling: The hash function and insert method throw errors if the key is not a string, ensuring type safety.

Collision Handling:
- The hash table uses **separate chaining** for collision resolution.
- If two different keys produce the same hash, their entries are stored as a linked list (chain) at that table index.
- Each node in the chain contains the key, value, and a reference (`head`) to the next node.

Usage:
- The hash table supports insertion, retrieval, deletion, and search operations for string keys.
- Collisions are handled gracefully using chaining, so multiple values can exist at the same index.

2. Analysis

Performance:
- **Insertion**: Average case O(1), worst case O(n) if all keys hash to the same index (rare with a good hash function and reasonable load factor).
- **Retrieval**: Average case O(1), worst case O(n) for the same reason.
- **Deletion**: Average case O(1), worst case O(n) if traversing a long chain.
- **Display**: O(table size), as it prints the entire internal array.

Trade-offs:
- **Separate Chaining**: Simple and effective, but increases memory usage due to extra objects for chains. Lookup time can degrade if many collisions occur.
- **Fixed Table Size**: The hash table uses a fixed-size array. If the number of entries grows much larger than the table size, collisions will increase, making operations slower. Dynamic resizing (rehashing) would improve scalability.
- **Simple Hash Function**: Easy to implement, but may not distribute keys as uniformly as more advanced hash functions, especially for similar input strings. This can lead to clustering and more collisions.
- **String Keys Only**: The implementation only supports string keys. Supporting other types would require additional logic.
- **No Load Factor Management**: There is no mechanism to monitor or adjust the load factor (ratio of entries to table size), which is important for maintaining performance in real-world hash tables.

Summary:
This approach is great for learning and small datasets, but for production or large-scale use, consider dynamic resizing, a more robust hash function, and possibly alternative collision strategies.
*/

/**TODO: 
 * 
 * ### **Bonus Challenge**

For an extra challenge, consider implementing additional features for your hash table, such as resizing the 
  table dynamically to maintain an efficient load factor, or implementing a method to iterate through all 
  key-value pairs in the hash table.


 */

// Test case for rehashing functionality

console.log("\n--- Rehashing Test Case ---");
const rehashTable = new HashTable(4); // small initial capacity to trigger rehashing quickly

// Insert enough elements to exceed the load factor threshold (0.75)
rehashTable.insert("one", 1);
rehashTable.display();

rehashTable.insert("two", 2);
rehashTable.display();

rehashTable.insert("three", 3);
rehashTable.display();

// This insert should trigger resizing and rehashing
rehashTable.insert("four", 4);

console.log("Table BEFORE!! triggering rehashing (should have resized):");
rehashTable.display();
console.log("Table after triggering rehashing (should have resized):");
rehashTable.display();

// Verify all elements are still accessible after rehashing
console.log("Retrieve 'one':", rehashTable.retrieve("one"));
console.log("Retrieve 'two':", rehashTable.retrieve("two"));
console.log("Retrieve 'three':", rehashTable.retrieve("three"));
console.log("Retrieve 'four':", rehashTable.retrieve("four"));
