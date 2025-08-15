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
    sum += charcode;
  }
  return (prime1 * prime3 * sum) % length;
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

    const hash = this.#hash(key);

    const obj = {
      key:key,
      value:value
    }

    //empty table slot
    if (this.#table[hash] == null) {
      //just assign the object to that location
      this.#table[hash] = obj;
    }
    //not empty slot -> handle collision
    else {
      //update pointers
      obj['head']=this.#table[hash]
      this.#table[hash] = obj;
    }
    this.size++; //increment size by one

    //check load factor
    if (this.#checkLoadFactor()) {
      this.#resizing();
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
  #rehashing(table) {
    //copy
    const copy = this.#table.slice();

    //reassign table
    table = new Array(this.#table.length).fill(null);
    this.size=0;

    //traverse copy
    for (const element of copy) {

      if (element == null)continue;

      //existing chain
      if (element["head"] != null) {


        let curr = element;
        let next = curr["head"];

        curr["head"] = undefined;
        curr = null; //freeing curr

        //free and re insert nodes into the new table
        while (next != null) {

          curr = next;
          next = next["head"];
          curr["head"] = undefined;
          this.insert(curr["key"], curr["value"]);
        }

      }
      else{
        //if there is no chain in slot:
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
    Custom hash function: Receives as arugments the string that represents the key of the pair and a number that
      represents the current length of the collection that is storing the pairs.
    For generating a hash, it:
      - Takes a string and calculates the total of summing every character's charcode based on Unicode.
      - After calculating the sum, another calculation is executed, in which: 
        + the total sum is multiplicated by 2 different constant prime numbers,
        + the modulus of the collection's length is obtained from the previous multiplication calculation.
    Hash Table: It has an array that represents the table in which all pairs will be stored while tracking the size
    (amount of elements held) and it implements various methods for handling the different process that are commonly
    executed in the process of interacting with hash tables, such as:
      - inserting key-value pairs,
      - retrieving values,
      - search if some value exists,
      - remove pairs,
      - hashing the keys receipt,
      - checking and handling the load factor of the table,
      - handling collision utilizing the separate-chaining technique with linked lists
  
  2. Analysis
    Performance analysis:
      Method:
        + constructor
          Time complexity: O(n) being n the capacity indicated.
          Space complexity: O(n) being n the capacity of the table.
          Tradeoffs:
            - There is an argument accepted for assigning an initial capacity, which can lead to have unused slots.
            - There is no argument for setting the accepted load factor before resize and rehashing table and elements.
            This will reduce flexibility because it is hardcoded for resizing (and rehashing) when load factor reaches
            the value of 0.75.
        +hash: Utilizes  a custom function for generating a hash given an input string and the length of the table.
          Time complexity: O(n) being n the length of the key.
          Space complexity: O(1) since the amount of space used keeps constant independenlty of the length of the input.
          Tradeoffs: It is simple to read an understand the mechanism for generating a new hash for a given key but 
          it is relatively easy to reach the threshold of the load factor due to the lack of uniformity when inserting 
          new values also, because of the use of the modulus based on the current length of the table.
        + insert: Inserts a new key-value pair into the hash table mapping it with the calculated hash utilizing separate-
        chaining tecnhnique for avoiding collisions and using resize and rehashing techniques for maintaining a non-clustered
        informational structure.
        Time complexity: 
           - Average case: O(1) since it is straightforward the process of inserting a new value even if there are collisions.
           - Worst case: O(n) being `n` the amount of existing pairs in the table. This happens when load factor triggers
           the resize and rehashing functions and every existing element (n elements) should be rehashed and inserted into a 
           new collection.
        Space complexity: 
          -Average case: O(n) In this case an insertion directly to the current table will be executed. So, n being the amount
          of exiting elements, the algorithm  need the computer to store n elements in table. Hence O(n) is the space complexity.
          -Worst case: O(n) In the worst case, rehashing would be executed. In such situation, the algorithm stil needs a
          constant amount of collections (a copy, the new and the old table) proportional to the amount of elements,
          `current table`O(n)+`copyOfTable`O(n)+`newTabe`O(2n) = O(3n) -> dropping constants: O(n)
        Tradeoffs:
          - Some of the disadvantages emerge due to the fact ot using the separate-chaining collision handling technique. Commonly,
          it will use some extra space and lead to unused slots inside the table. In addition, performance of cache type operations
          will be reduced because the slots of the collection can be not singly valued.
        + retrieve: This methods returns the object in the table associated with the key or false otherwise.
        Time complexity: O(n) being n the total amount of key-value pairs stored and assuming that the one it looks for is the last
        readed.
        Space complexity: O(1) since no matter how it goes with the process of searching an element, the same amount of space will be
        required.
        Tradeoffs:
          - Due to the possibility of the existence of a separate chain, the time complexity of this approach will be increased from O(1)
          to O(n).
        + display: Displays the current state of the table
        Time complexity: O(n) being n the amount of elements stored in the table.
        Space complexity: O(1) since there is no need for extra space
        Tradeoffs:
          - It shows data inside every separate chain, but not all
          - It does not display the information individually per every element
        +remove: removes an element from the table.
        Time complexity: O(n) considering the worst case, in which the element is 
        found last or does not exist, being necessary to traverse the whole structure.
        Space complexity: O(1) since the amount of extra space required does not increment depending of the input size.
        Tradeoffs:
          - Similar to search method, and considering that separate-chaining technique is being implemented for collision handling,
          the time complexity increments from O(1) to O(n) compared to other collision handling techniques which can lead to bigger 
          execution times.
        +search: This method return a boolean indicating if there exists an object in the table that matches the given key. When it does,
        it returns true and false otherwise.
        Time complexity: O(n) in the worst case, being needed to travel and read all the elements.
        Space complexity: O(1) because the amount of space required to store temporal values is always the same.
        Tradeoffs:
          - Due to the reason that sometimes there could exist some key-value pairs that produces the same hash value, a linked
          list might be created in order to avoid the collision of those elements, and for that reason the time complexity increments
          from O(1) to O(n) being n the size of the chain that have to be traversed.
        +#rehashing:  Creates a new table, re make the hash value for every exiting element in the old table and insert all of them into
        the new one, discarding the old table.
        Time complexity: O(n) The more element the previous table has, the more time will be needed to reconvert the hashing for every of
        them. So it depends directly of the amount of key-value pairs existing.
        Space complexity: O(n) At one exact time, there are 2 variables referring to a collections, which are `copy`, `table`(the new table)
        which has the double of length than te old table. This amount of collections is constant and the space they require depends directly
        on the amount of elements and the length of the old table, which is n.
        Tradeoffs:
          - It requires some extra memory in a certain period when making copies of the current table in order to regenerate hashes and pass
          all elements from one to another collection.
        +#checkLoadFactor(
        Time complexity:
        Space complexity:
        Tradeoffs:
        +#resizing(
        Time complexity:
        Space complexity:
        Tradeoffs:
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

// Insert elements one by one and display after each insert to observe resizing and rehashing
rehashTable.insert("one", 1);
console.log("After inserting 'one':");
rehashTable.display();

rehashTable.insert("two", 2);
console.log("After inserting 'two':");

console.log("Table BEFORE triggering rehashing (next insert should trigger resize):");
rehashTable.display();

// This insert should trigger resizing and rehashing
rehashTable.insert("three", 3);
console.log("After inserting 'three':");
rehashTable.display();

rehashTable.insert("four", 4);



rehashTable.insert("twoqwkuirhqowiejo1i2u3192381923810293", 'hola que tal');
rehashTable.display();

// Verify all elements are still accessible after rehashing
console.log("Retrieve 'one':", rehashTable.retrieve("one"));
console.log("Retrieve 'two':", rehashTable.retrieve("two"));
console.log("Retrieve 'three':", rehashTable.retrieve("three"));
console.log("Retrieve 'four':", rehashTable.retrieve("four"));
