//-------------------------------------------------------------------------PART 1
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
  get root(){
    return this.#root;
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
  #vertices;
  #edges;
  constructor() {
    this.#vertices = [];
    this.#edges = [];
  }
  addVertice(vValue) {
    const index = this.#vertices.length;
    if (vValue == null) vValue = index;
    this.#vertices[index] = {
      vertice: index,
      value: vValue,
    };
    this.#edges[index] = [];
  }
  addEdge(v1, v2) {
    //edges for the given nodes were not found
    if (!this.#edges[v1]) this.#edges[v1] = [];
    if (!this.#edges[v2]) this.#edges[v2] = [];

    //check if the edge between nodes exist for avoiding duplicates connections
    if (!this.#edges[v1].includes(v2)) this.#edges[v1].push(v2);
    if (!this.#edges[v2].includes(v1)) this.#edges[v2].push(v1);
  }
  dfs(value, visitedNodes = []) {
    //return value
    let ret = false;

    //empty graph
    if (!this.#vertices.length) {
      return ret;
    }

    //if visited nodes' stack is empty:
    if (!visitedNodes.length) {
      //put at the top of the stack the first node
      visitedNodes.push(this.#vertices[0]);

      ret = this.dfs(value, visitedNodes); //recall dfs()
    }
    //if not empty stack:
    else {
      //last node (at the top) of the stack
      let lastNode = visitedNodes[visitedNodes.length - 1];

      //value found
      if (this.#vertices[lastNode["vertice"]]["value"] === value) {
        ret = true;
        return ret;
      }
      //value not found
      else {
        //look at last node edges for neighbours
        //accessing to the edges of the graph through the lastNode id
        let lastNodeNeighbours = this.#edges[lastNode];

        //put neighbours of the last node at the top of the stack:
        //visiting every neighbour of the last node (if exist)
        if (lastNodeNeighbours) {
          let i = 0;
          while (i < lastNodeNeighbours.length) {
            //always checking that every node is not present in the `visited` stack

            //if it is not
            if (!visitedNodes.includes(lastNodeNeighbours[i])) {
              //update stack
              visitedNodes.push(lastNodeNeighbours[i]);

              //recall function
              ret = this.dfs(value, visitedNodes);
            } else {
              //if it is
              //do nothing
            }
            //increment `i` for accessing the next neighbour of the current last node

            i++;
          }
        } else {
          //node is isolated
          //do nothing!
        }
      }
    }

    //ALSO search for isolated vertices that were not checked

    //conditions:
    //all nodes were not visited
    //and
    //value was not found

    let i = 0;
    while (visitedNodes.length < this.#vertices.length && !ret) {
      if (!visitedNodes.includes(this.#vertices[i])) {
        visitedNodes.push(this.#vertices[i]); //updating stack
        if (this.#vertices[i]["value"] === value) {
          //value found
          ret = true;
        }
      } else {
      }
      i++;
    }

    return ret;
  }
  bfs(value, visitedNodes = [], pendingNodes = []) {
    //return value
    let ret = false;

    //empty graph
    if (!this.#vertices.length) {
      return ret;
    }

    //if visited nodes' stack is empty:
    if (!visitedNodes.length) {
      //update visited array
      visitedNodes.push(this.#vertices[0]);

      //update nodes queue
      pendingNodes.push(this.#vertices[0]);

      ret = this.bfs(value, visitedNodes, pendingNodes); //recall bfs()
    }
    //if not empty stack:
    else {
      //if queue is not empty
      if (!pendingNodes.length) {
        //first node (at the top) of the queue
        let firstNode = pendingNodes[0];

        //value found
        if (this.#vertices[firstNode["vertice"]]["value"] === value) {
          ret = true;
          return ret;
        }
        //value not found
        else {
          //add to the queue all the neighbours of the first node in the queue and remove it.

          //accessing to the edges of the graph related to the indicated node id

          let firstNodeNeighbours = this.#edges[firstNode["vertice"]];

          for (const id of firstNodeNeighbours) {
            const element = this.#vertices[id];
            if (!visitedNodes.includes(element)) {
              //add node to visited
              visitedNodes.push(element);
              //add node to queue
              pendingNodes.push(element);
            }
          }
          //remove first node
          pendingNodes.shift(firstNode);

          //recall bfs with updated collections
          ret = this.bfs(value, visitedNodes, pendingNodes);
        }
      } else {
        //ALSO search for isolated vertices that were not checked

        //conditions:
        //all nodes were not visited
        //and
        //value was not found
        let i = 0;
        while (visitedNodes.length < this.#vertices.length && !ret) {
          if (!visitedNodes.includes(this.#vertices[i])) {
            visitedNodes.push(this.#vertices[i]); //updating array
            if (this.#vertices[i]["value"] === value) {
              //value found
              ret = true;
              break;
            }
          } else {
          }
          i++;
        }
      }
    }

    return ret;
  }
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
//-------------------------------------------------------------------------PART 2
/*
1. **Min/Max Stack**:
Implement a class for a stack that supports finding the minimum and maximum elements 
in constant time (O(1)). Include methods for push, pop, getMin, and getMax. 
*/

Stack.prototype["getMin"] = function getMin() {
  if (this.peek() == null) return undefined;

  const aux = new Stack();

  let min = this.pop();
  aux.push(min);

  while (this.peek() != null) {
    const n = this.pop();
    aux.push(n);
    if (min > n) min = n;
  }

  while (aux.peek() != null) {
    const n = aux.pop();
    this.push(n);
  }

  return min;
};
Stack.prototype["getMax"] = function getMax() {
  if (this.peek() == null) return undefined;

  const aux = new Stack();

  let max = this.pop();
  aux.push(max);

  while (this.peek() != null) {
    const n = this.pop();
    aux.push(n);
    if (max < n) max = n;
  }

  while (aux.peek() != null) {
    const n = aux.pop();
    this.push(n);
  }

  return max;
};
// const s = new Stack();
// for (let index = 0; index < 50; index++) {
//   s.push(Math.random() * 100);
//   s.push(Math.random() * -100);
// }
// console.log(s.peek());
// console.log("min", s.getMin()); //
// console.log("Max", s.getMax()); //
// while (s.peek() != null) {
//   console.log(s.pop());
// }

/*
2. **Binary Search Tree**: Implement a function to determine if a binary tree is a 
binary search tree (BST). Provide an efficient algorithm that checks whether the tree 
satisfies the BST property.
*/
function isBST(root){
  //default return values
  let right = false;
  let left = false;

  //empty Tree
  if (!root) {}
  //not empty tree
  else{
    if (!root.right && !root.left){
      right=true;
      left=true;
    }
    else{
      if (root.right){
        if (root.right.value < root.value) right=false;
      }
      else{
        right = isBST(root.right);
      }
      if (root.left){
        if (root.left.value > root.value) left=false;
      }
      else{
        left = isBST(root.left);
      }
    }
  }
  return right && left;
}



/*
3. **Graph Algorithms**: Implement algorithms to find the shortest path between two 
vertices in a graph using both Dijkstra's algorithm and Breadth-First Search (BFS).
*/
/*
4. **Linked List Cycle**: Implement a function to detect if a linked list has a cycle. 
Use Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm) to solve this problem efficiently.
*/
