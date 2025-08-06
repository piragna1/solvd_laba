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
  #root = {
    value: undefined,
    right: undefined,
    left: undefined,
  };

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
    //verifying if element is number
    let isNumber = typeof element === "number";
    if (!isNumber) {
      return;
    }
    //------

    //---checking if the main route exists
    if (!this.#root.value) {
      this.#root.value = element;
      return;
    }
    //------

    //for subsequents nodes:
    //ROOT has no value:
    if (!root.value) {
      root.value = element;
    }
    //ROOT has value:
    else {
      if (root.value === element) return; //equal values
      //if root.value's value is smaller
      else if (root.value < element) {
        if (!root.right) {
          //root.right does not exist
          //assign value
          root.right = {
            value: element,
            left: undefined,
            right: undefined,
          };
          /* 
          Uncaught TypeError TypeError: Cannot create property 'right' on number '1'
    at add (c:\Users\Gonzalo\Documents\GitHub\solvd_laba\homeworks\homework-9\part1\part1.js:154:22)
    at BinaryTree (c:\Users\Gonzalo\Documents\GitHub\solvd_laba\homeworks\homework-9\part1\part1.js:92:14)
    at <anonymous> (c:\Users\Gonzalo\Documents\GitHub\solvd_laba\homeworks\homework-9\part1\part1.js:333:18)
    at run (<node_internals>/internal/modules/esm/module_job:329:25)
    --- await ---
    at runEntryPointWithESMLoader (<node_internals>/internal/modules/run_main:139:19)
    at executeUserEntryPoint (<node_internals>/internal/modules/run_main:176:5)
    at <anonymous> (<node_internals>/internal/main/run_main_module:36:49)

          */
        } else {
          //rooght right already exists
          this.add(element, root.right);
        }
      }

      //if root's value is greater
      else if (root.value > element) {
        //if root.left does not exist, assign element to it.
        if (!root.left) {
          //assign value
          root.left = {
            value: element,
            left: undefined,
            right: undefined,
          };
        } else {
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
    } else if (root.value === element) {
      ret = true;
    } else if (!root.left && !root.right) {
      ret = false;
    } else if (root.value > element) {
      ret = this.search(element, root.left);
    } else if (root.value < element) {
      ret = this.search(element, root.right);
    }
    return ret;
  }
  preOrder(root = this.#root) {
    if (!root) return;

    console.log(root.value);

    if (root.left) {
      this.preOrder(root.left);
    }

    if (root.right) {
      this.preOrder(root.right);
    }
  }
  inOrder(root = this.#root) {
    if (!root) return;
    if (root.left) {
      this.preOrder(root.left);
    }
    console.log(root.value);
    if (root.right) {
      this.preOrder(root.right);
    }
  }
  postOrder(root = this.#root) {
    if (!root) return;
    if (root.left) {
      this.preOrder(root.left);
    }
    if (root.right) {
      this.preOrder(root.right);
    }
    console.log(root.value);
  }
}
class Graph {
  
}
class LinkedList {
  #node = {};
  constructor(collection) {
    console.log("collection;", collection);

    if (!collection) return;

    //iterable as input
    if (collection[Symbol.iterator]) {
      for (const element of collection) {
        this.insertNode(element);
      }
    }
    //non iterable as input
    else {
      console.log("non iterable input");
      this.#node["value"] = collection;
    }
  }

  insertNode(node) {
    //empty linkedList
    if (!this.#node["value"]) {
      this.#node["value"] = node;
    } else {
      let current = this.#node;

      //traversing to the end of the list
      while (current["next"]) {
        current = current["next"];
      }

      //adding a node to the one at the end
      current["next"] = {
        value: node,
      };
    }
  }

  deleteNode(node) {
    if (this.#node["value"] === undefined) return;

    if (node === this.#node["value"]) {
      let current = this.#node;
      this.#node = this.#node["next"];
      current = null;
      return;
    }

    let current = this.#node;
    let next = current["next"];

    while (next !== undefined && node !== next["value"]) {
      [current, next] = [next, next["next"]];
    }

    if (next !== undefined) {
      [current, next] = [next["next"], null];
    }
  }
  searchNode(node) {
    if (this.#node === undefined) return false;

    if (node === this.#node["value"]) return true;

    let current = this.#node;
    let next = current["next"];

    while (next !== undefined && node !== next["value"]) {
      [current, next] = [next, next["next"]];
    }

    if (next !== undefined) {
      return true;
    }

    return false;
  }
}

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

// console.log(Array.from([2])); //[2]
// console.log(Array.isArray(Array.from([2]))); //true
// let arr = ["banana"];
// console.log(arr == true); //false
// console.log("a" < 2); //false
// console.log({ number: 3 } > 2); //false
// console.log({ number: 3 } < 2); //false

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// // const numbers1 = [1, 0, 6, 8, 7, 3, 4, 5, 9, 2];

//-------------

// // const ownTree = new BinaryTree(fruits);
// const ownTree1 = new BinaryTree(numbers);
// const ownTree2 = new BinaryTree(numbers);

// ownTree1.preOrder();
// console.log('------------------------------')
// ownTree1.inOrder();
// console.log('------------------------------')
// ownTree1.postOrder();
// console.log('------------------------------')

// ownTree2.preOrder();
// console.log('------------------------------')
// ownTree2.inOrder();
// console.log('------------------------------')
// ownTree2.postOrder();
// console.log('------------------------------')

//-------------
// console.log(ownTree1.search(10));//false
// console.log(ownTree1.search(9));//true
// console.log(ownTree1.search(-1));//false
// console.log(ownTree1.search(20));//false
// console.log(ownTree1.search(-0));//true
// console.log(ownTree1.search(+2));//true

//-------------

//---------------------------------------------Using LinkedList class' implementation
// const ownLinkedList = new LinkedList(1);
// console.log(ownLinkedList); //
// console.log(ownLinkedList.searchNode(1)); //true
// console.log(ownLinkedList.searchNode(2)); //false
// ownLinkedList.insertNode(2);
// console.log(ownLinkedList.searchNode(2)); //true
// ownLinkedList.deleteNode(1);
// console.log(ownLinkedList.searchNode(1)); //false
// console.log(ownLinkedList.searchNode(2)); //true
// ownLinkedList.deleteNode(2);
// console.log(ownLinkedList.searchNode(2)); //false
//---------------------------------------------

//---------------------------------------------Using Graph class' implementation
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------

//---------------------------------------------
//---------------------------------------------
