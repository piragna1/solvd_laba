class Stack {
  #stack; //private field!

  constructor(collection) {
    //constructor
    this.#stack = [].concat(Array.from(collection));
  }

  //method for adding new elements
  push(element) {
    this.#stack.push(element);
  }

  //method for removing and retrieving the element at the top of the stack
  pop() {
    if (this.#stack.length === 0) return undefined;
    let ret = this.#stack[this.#stack.length - 1]; //last element
    this.#stack.length = this.#stack.length - 1; //removing last element
    return ret; //returning removed last element
  }

  //method for retrieving the current element at the top without removing it.
  peek() {
    if (this.#stack.length === 0) return undefined;
    return this.#stack[this.#stack.length - 1]; //returning current last element
  }
}
class Queue {
    #queue;
    #first;
    #last;
    constructor(collection){
        this.#queue = new Array().concat(Array.from(collection));
        this.#first = this.#queue[0];
        this.#last=this.#queue[this.#queue.length-1];
    }
}
class BinaryTree {}
class Graph {}
class LinkedList {}

//---------------------------------------------
/* Some tests before testing the Stack class */

// // console.log(typeof []);//object
// // console.log( [] instanceof Array);//true

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// // console.log(fruits[Symbol.iterator])//[Function: entries]

// // for (const x of fruits) {
// //   // code block to be executed
// //   console.log(x)
// // }

// // console.log([][Symbol.iterator]); //[Function: values]
// // console.log({}[Symbol.iterator]); //undefined
//----------------------------------

//--------------------------------Using Stack class' implementation
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// const ownStack = new Stack(fruits);
// console.log(ownStack._stack)//not accessible
// console.log(ownStack);//not accessible
// console.log(ownStack.peek());//[ 'oranges', 200 ]
// ownStack._stack = [];//does not work
// console.log(ownStack.peek());//[ 'oranges', 200 ]
// console.log(ownStack.pop())//[ 'oranges', 200 ]
// console.log(ownStack.peek());//[ 'bananas', 300 ]
// console.log(ownStack.pop())//[ 'bananas', 300 ]
// console.log(ownStack.pop())//[ 'apples', 500 ]
// // console.log(ownStack.pop())//before: RangeError: Invalid array length
// //reimplementing pop method
// console.log(ownStack.pop())// after: undefined
//------------------------------------------------------

//---------------------------------------------Using Queue class' implementation
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
const ownQueue = new Queue();
// console.log(ownQueue);//TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
//fixing constructor...
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------
