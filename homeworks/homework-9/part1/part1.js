class Stack {
  #stack; //private field!

  constructor(collection) {
    //constructor
    this.#stack = [];
    if (collection && collection[Symbol.iterator])
      this.#stack = this.#stack.concat(Array.from(collection));
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
  constructor(collection) {
    this.#queue = new Array();
    if (collection && collection[Symbol.iterator])
      this.#queue = this.#queue.concat(Array.from(collection));
    this.#first = this.#queue[0];
  }
  get first() {
    return this.#first;
  }
  //adding elements (at the rear)
  enqueue(element) {
    this.#queue.push(element); //add new elemennt
  }
  //removing elements (at the front)
  dequeue() {
    let ret = this.#queue[0];
    this.#queue = this.#queue.slice(1); //remove first element
    this.#first = this.#queue[0]; //uppdate pointer to the new first element
    return ret;
  }
  //getting peek element (from the front)
  peek() {
    return this.#first;
  }
}
//binary tree for number type elements
class BinaryTree {
  #root;

  constructor(collection) {
    if (!collection) return;

    let isNumber = typeof collection === "number";

    let isIterable = collection[Symbol.iterator] !== undefined;

    if (isNumber) {
      this.#root = collection;
    } else if (isIterable) {
      for (const element of collection) {
        this.add(element);
      }
    }

    return;
  }
  add(element, root = this.#root) {
    //ROOT has no value:
    if (!root) {
      root = element;
    }
    //ROOT has value:
    else {
      //if root's value is smaller
      if (root < element) {
        //if root.right does not exist, assign element to it.
        if (!root.right) root.right = element;
        //else, recall add() passing root.right as the new `root` arg.
        else {
          this.add(element, root.right);
        }
      }
      //if root's value is greater
      else if (root > element) {
        //if root.left does not exist, assign element to it.
        if (root.left) root.left = element;
        else {
          //else, recall add() passing root.left as the new `root` arg.
          this.add(element, root.left);
        }
      }
    }
    return;
  }
  search(element, root = this.#root) {
    let ret = false;
    if (!root) { 
      return ret;
    } else if (root === element) {
      ret = true;
    } else if (root > element) ret = this.search(element, root.left);
    else if (root < element) ret = this.search(element, root.right);
    return ret;
  }
  preOrder(root = this.#root) {
    if (root.left) {
      this.preOrder(root.left);
    }
    console.log(root);
    if (root.right) {
      this.preOrder(root.right);
    }
  }
  inOrder(root = this.#root) {
    console.log(root);
    if (root.left) {
      this.preOrder(root.left);
    }
    if (root.right) {
      this.preOrder(root.right);
    }
  }
  postOrder(root = this.#root) {
    if (root.left) {
      this.preOrder(root.left);
    }
    if (root.right) {
      this.preOrder(root.right);
    }
    console.log(root);
  }
}
class Graph {}
class LinkedList {}

//---------------------------------------------
/* Some tests before trying the Stack class */

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
//-------------
// const ownStack = new Stack(fruits);
//-------------
// console.log(ownStack._stack)//not accessible
// console.log(ownStack);//not accessible
// ownStack._stack = [];//does not work
//-------------
// console.log(ownStack.peek());//[ 'oranges', 200 ]
// console.log(ownStack.pop())//[ 'oranges', 200 ]
// console.log(ownStack.peek());//[ 'bananas', 300 ]
// console.log(ownStack.pop())//[ 'bananas', 300 ]
// console.log(ownStack.pop())//[ 'apples', 500 ]
// console.log(ownStack.peek());//undefined
// console.log(ownStack.pop())// after: undefined
//-------------
// console.log(ownStack.pop())//before: RangeError: Invalid array length
//-------------
//reimplementing pop method
//-------------
//checking if Stack class' constructor works without arguments...
// const ownStack1 = new Stack();//TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
//-------------
//fixing constructor
//-------------
// const ownStack1 = new Stack();
// console.log(ownStack1.peek());//undefined
//------------------------------------------------------

//---------------------------------------------Using Queue class' implementation
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);
//-------------
// const ownQueue = new Queue();
// console.log(ownQueue);//TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
//-------------
//fixing constructor... and also reviewing if Stack class has also errors in constructor...
//-------------
// const ownQueue = new Queue(); //apparenlty working
// console.log(ownQueue.first);//undefined
// console.log(ownQueue.last);//undefined
//-------------
// const ownQueue = new Queue(fruits);
// console.log(ownQueue);//Queue {}
// ownQueue.enqueue(['strawberry', 550]); //adding element
// console.log(ownQueue.peek());//[ 'apples', 500 ]
// console.log(ownQueue.dequeue());//[ 'apples', 500 ]
// console.log(ownQueue.dequeue());//[ 'bananas', 300 ]
// console.log(ownQueue.dequeue());//[ 'oranges', 200 ]
// console.log(ownQueue.dequeue());//[ 'strawberry', 550 ]
// console.log(ownQueue.dequeue());//undefined
// console.log(ownQueue.peek());//undefined
//-------------
//---------------------------------------------

//---------------------------------------------Using Binary Tree class' implementation
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

console.log(Array.from([2])); //[2]
console.log(Array.isArray(Array.from([2]))); //true
let arr = ["banana"];
console.log(arr == true); //false
console.log("a" < 2); //false
console.log({ number: 3 } > 2); //false
console.log({ number: 3 } < 2); //false
