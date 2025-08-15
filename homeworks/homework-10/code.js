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
function hash(string) {
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
  return Math.trunc((prime1 * sum) % prime3);
}
let arr = [
  "cześć",
  "witaj",
  "dzień dobry",
  "dobry wieczór",
  "dobranoc",
  "siema",
  "hejka",
  "elo",
  "czesc",
  "witam",
  "hola",
  "holb",
  "aloh",
  "bye",
  "bio",
  "bios",
  "ciao",
  "nv",
  "adeu",
  "hi",
  "chau",
  "nos vemos",
  "adios",
  "adios!",
  "hello",
  "hella",
  "holla",
  "hey",
  "heya",
  "heyo",
  "greetings",
  "greetz",
  "salut",
  "saludo",
  "saludos",
  "aloha",
  "alohaa",
  "alohaa!",
  "alo",
  "alo!",
  "yo",
  "sup",
  "wassup",
  "whatsup",
  "howdy",
  "hiya",
  "oi",
  "oy",
  "oy!",
  "bonjour",
  "bonsoir",
  "buenos dias",
  "buenas",
  "buenas tardes",
  "buenas noches",
  "shalom",
  "namaste",
  "namaskar",
  "namaskaram",
  "namastey",
  "ciao!",
  "tschuss",
  "tschüss",
  "hallo",
  "hallo!",
  "ola",
  "olá",
  "olaa",
  "olaaa",
  "olá!",
  "later",
  "laters!",
  "peace",
  "peace out",
  "take care",
  "take it easy",
  "catch you",
  "catch ya",
  "catch ya later",
  "olá bom dia",
  "boa tarde",
  "boa noite",
  "até logo",
  "até amanhã",
  "até breve",
  "até já",
  "adeusinho",
  "tchau",
  "xau",
  "cumprimentos",
  "saudações",
  "bem-vindo",
  "bem-vinda",
  "bem-vindos",
  "bem-vindas",
  "abraço",
  "beijinhos",
  "fique bem",
  "vá com Deus",
  "`holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaealsdjaspodk0329i0293849",
];
/*
2. **Collision Handling**: Implement a collision resolution strategy. You can choose from methods like 
  separate chaining (using linked lists), open addressing (linear probing, quadratic probing), or any other 
  technique you prefer.
*/
const table = [].fill(null);
arr.forEach((str) => {
  let key = hash(str);
  if (table[key] !== null) {
    const obj = {
      value: str,
      head: table[key],
    };
    table[key] = obj;
  } else {
    table[value] = {
      value: str,
      head: undefined,
    };
  }
});

// table.forEach(el => console.log(el));
// console.log(table);
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
  constructor() {
    this.#table = new Array(15).fill(null);
    this.size = 0;
  }
  #hash(string) {
    if (typeof string !== "string") {
      throw Error("Invalid input key");
    }
    const prime1 = 2;
    const prime3 = 137;

    let sum = 0;

    for (let index = 0; index < string.length; index++)
      sum += string.charCodeAt(index);

    return Math.trunc((prime1 * prime3 * sum) % this.#table.length);
  }
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
        head = head["next"];
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
ht.insert("alamaula", "gonzalextrix");
ht.insert("alamaulaeee", "gonzalextrix");
ht.insert("alamaulaq", "gonzalextrix");
ht.insert("alamaulaw", "gonzalextrix");
ht.insert("alamaulae", "EEEEEEEEEEEEEEEEEgonzalextrixasdasdasdasdasdESAAAAAAAAAAAAAAaa");
ht.insert("alamaular", "gonzalextrix");
ht.insert("alamaulat", "gonzalextrix");
ht.insert("alamaulay", "gonzalextrix");
ht.insert("alamaulau", "gonzalextrix");
ht.insert("alamaulai", "gonzalextrix");
ht.insert("alamaulao", "gonzalextrix");
ht.insert("alamaulap", "gonzalextrix");
console.log(ht.size); //12
console.log(ht.retrieve("alamaulat")); 
/*{
  key: 'alamaulat',
  value: 'gonzalextrix',
  head: {
    key: 'alamaulae',
    value: 'EEEEEEEEEEEEEEEEEgonzalextrixasdasdasdasdasdESAAAAAAAAAAAAAAaa'
  }
}*/
console.log(ht.remove('alamaulat'));//true
console.log(ht.remove('alamaulat'));//false
console.log(ht.remove('alamaulat'));//false
console.log(ht.retrieve("alamaulat")); //undefined
ht.display();
console.log(ht.remove('alamaulae'));//true
ht.display();
