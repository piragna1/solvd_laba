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

    Object.defineProperty(this.#root, "value", {
      writable: false,
    });

    return;
  }
  get root() {
    return this.#root;
  }
  add(element, root = this.#root) {
    //verifying if element is number
    let isNumber = typeof element === "number";
    if (!isNumber) {
      return;
    }
    //------

    //---checking if the main root exists
    if (!this.#root.value) {
      this.#root.value = element;
      Object.defineProperty(this.#root, "value", {
        writable: false,
      });
      return;
    }
    //------

    //for subsequents nodes:

    if (root.value === element) return; //value already exists
    //if root.value's value is smaller
    else if (root.value < element) {
      //if root.right does not exist
      if (!root.right) {
        //assign value to root right
        root.right = {
          value: element,
          left: undefined,
          right: undefined,
        };
        Object.defineProperty(root.right, "value", {
          writable: false,
        });
      } else {
        //rooght right already exists
        //recall function with root.right as 'root' argument.
        this.add(element, root.right);
      }
    }

    //if root's value is greater
    else if (root.value > element) {
      //if root.left does not exist, assign element to it.
      if (!root.left) {
        root.left = {
          value: element,
          left: undefined,
          right: undefined,
        };
        Object.defineProperty(root.left, "value", {
          writable: false,
        });
      } else {
        //else, recall add() passing root.left as the `root` arg.
        this.add(element, root.left);
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
      this.inOrder(root.left);
    }
    console.log(root.value);
    if (root.right) {
      this.inOrder(root.right);
    }
  }
  postOrder(root = this.#root) {
    if (!root) return;
    if (root.left) {
      this.postOrder(root.left);
    }
    if (root.right) {
      this.postOrder(root.right);
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
  get vertices() {
    return this.#vertices.slice();
  }
  get edges() {
    return this.#edges.slice();
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

    if (!collection) return;

    //iterable as input
    if (collection[Symbol.iterator]) {
      for (const element of collection) {
        this.insertNode(element);
      }
    }
    //non iterable as input
    else {
      this.#node["value"] = collection;
    }
  }
  getNode(){
    return this.#node;
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
const s = new Stack();
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
function isBST(root) {
  //default return values
  let right = true;
  let left = true;

  //empty Tree
  if (!root.value) {
    return false;
  }
  //not empty tree
  else {
    //no sub trees
    if (!root.right && !root.left) {
    }
    //
    else {
      //if there is right subtree
      if (root.right) {
        //set right to false if right value is smaller than root's value
        if (root.right.value < root.value) right = false;
        //else keep checking forward through right subtree
        else {
          right = isBST(root.right);
        }
      }
      //if there is right subtree
      if (root.left) {
        //set left to false if left value is bigger than root's value
        if (root.left.value > root.value) left = false;
        //else keep checking forward through left subtree
        else {
          left = isBST(root.left);
        }
      }
    }
  }
  return right && left;
}
const tree = new BinaryTree();
// tree.add(2);
// tree.add(1);
// tree.add(123);
// tree.add(12);
// tree.add(4);
// console.log(isBST(tree.root));

/*
3. **Graph Algorithms**: Implement algorithms to find the shortest path between two 
vertices in a graph using both Dijkstra's algorithm and Breadth-First Search (BFS).
*/
function isIsolated(graph, vertice) {
  if (!graph.edges[vertice].length) return true;
}
function isEmpty(graph) {
  return !graph.vertices.length;
}
function shortestPathWithBFS(graph, v1, v2) {
  //invalid input!
  if (typeof v1 !== "number" || typeof v2 !== "number") {
    throw Error("Please enter the number of each vertice!");
  }

  //empty graph!
  if (isEmpty(graph)) {
    throw Error("The graph is empty!");
  }

  //one of the nodes is isolated so there is no possible path!
  if (isIsolated(graph, v1) || isIsolated(graph, v2)) {
    throw Error("One of the nodes is isolated!");
  }

  //vertice's index does not exist
  if (graph.length < v1 || graph.length < v2) {
    throw Error("One of the nodes does not exist");
  }

  const table = new Map();
  const queue = [];
  const path = [];

  //first addition to the queue:
  queue.push({
    from: undefined,
    to: v1,
    cost: 0,
  });

  //main loop
  while (queue.length > 0) {
    //first node in the queue
    let first = queue.shift();

    //neighbours of the first node
    let neighbours = graph.edges[first["to"]]; //accessing first['to'] like the current node

    //adding neighbours in the queue
    neighbours.forEach((vertice) => {
      if (vertice !== first["to"]) {
        let currentNeighbour = {
          from: first["to"],
          to: vertice,
          cost: first["cost"] + 1,
        };

        //vertice was in the table
        if (table.get(vertice)) {
          let copy = table.get(vertice);

          if (copy["cost"] <= currentNeighbour["cost"]) {
            //unconvienent costs:
          } else {
            //convenient costs:
            //updating to table
            table.set(currentNeighbour["to"], {
              from: currentNeighbour["from"],
              cost: currentNeighbour["cost"],
            });
            //adding to queue
            queue.push(currentNeighbour);
          }
        }
        //vertice was not in table
        else {
          //adding to table
          table.set(currentNeighbour["to"], {
            from: currentNeighbour["from"],
            cost: currentNeighbour["cost"],
          });

          //adding to queue
          queue.push(currentNeighbour);
        }
      }
    });
  }
  //track backwards the path following table's information:
  let track = v2;
  while (track !== v1) {
    path.unshift(track);
    track = table.get(track)["from"];
  }
  path.unshift(track);
  return path;
}
function shortestPathDijkstra(graph, v1, v2) {
  //ERROR
  //empty graph
  if (isEmpty(graph)) {
    throw Error("The graph is empty!");
  }

  //ERROR
  //one of the vertices is aboslutely isolated so is no reachable
  if (isIsolated(graph, v1) || isIsolated(graph, v2)) {
    throw Error("One of the nodes is isolated!");
  }

  const visited = [];
  const unvisited = [];

  //fill `unvisited` with all nodes
  graph.vertices.forEach((vertice) => {
    unvisited.push(vertice["vertice"]);
  });

  //ERROR:v1 does not exist
  if (!unvisited.includes(v1)) {
    throw Error("v1 does not exist");
  }
  //ERROR:v2 does not exist
  if (!unvisited.includes(v2)) {
    throw Error("v2 does not exist");
  }

  //Table for paths tracking.
  const pathsTable = new Map();

  //default values
  unvisited.forEach((vertice) => {
    pathsTable.set(vertice, {
      vertice: vertice,
      steps: Infinity,
      previousNode: undefined,
    });
  });

  //start with `v1`
  visited.push(unvisited.splice(unvisited.indexOf(v1), 1)[0]);
  pathsTable.set(visited[0], {
    vertice: visited[0],
    steps: 0,
  });

  //main loop
  while (unvisited.length > 0) {
    //current vertice
    let curr = visited[visited.length - 1];
    curr = graph.vertices[curr];

    //neighbours
    let currentNeighbours = graph.edges[curr["vertice"]];
    //remove visited neighbours

    //update table
    currentNeighbours.forEach((vertice) => {
      if (!visited.includes(vertice)) {
        //neighbour:

        let currNodeSteps = pathsTable.get(curr["vertice"])["steps"];
        let currentNeighbourSteps = pathsTable.get(vertice)["steps"];

        //update neighbour steps if appropriate
        if (currentNeighbourSteps > currNodeSteps + 1) {
          let copy = pathsTable.get(vertice);

          copy["steps"] = currNodeSteps + 1;
          copy["previousNode"] = curr["vertice"];

          //update
          pathsTable.set(vertice, copy);
        }
      }
    });

    //now visit the neighbour with less steps:
    let lessStepsNeighbour = Infinity;

    for (const neighbour of currentNeighbours) {
      let neighbourSteps = pathsTable.get(neighbour)["steps"];
      if (lessStepsNeighbour > neighbourSteps && !visited.includes(neighbour)) {
        lessStepsNeighbour = neighbour;
      }
    }

    visited.push(unvisited.splice(unvisited.indexOf(lessStepsNeighbour), 1)[0]);
  }

  let path = [];
  let aux = pathsTable.get(v2);
  while (aux.previousNode !== undefined) {
    path.push(aux["vertice"]);

    if (aux.previousNode !== undefined) {
      aux = pathsTable.get(aux["previousNode"]);
    }
  }
  path.push(aux["vertice"]);
  return path.reverse();
}
const graph = new Graph();
//----------
// //case 1: isolated v2
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);

// graph.addEdge(1, 0);
// graph.addEdge(1, 2);
// graph.addEdge(1, 3);

// graph.addEdge(2, 0);
// graph.addEdge(2, 1);
// graph.addEdge(2, 4);

// graph.addEdge(3, 4);
// graph.addEdge(3, 1);

// graph.addEdge(4, 2);
// graph.addEdge(4, 3);
// console.log(shortestPathWithBFS(graph,0,5));
//----------

//----------
// //case 2:no path from v1 to v2
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);

// graph.addEdge(0, 1);

// graph.addEdge(2, 3);
// graph.addEdge(2, 4);

// graph.addEdge(3, 2);
// graph.addEdge(3, 4);
// graph.addEdge(3, 5);

// graph.addEdge(4, 2);
// graph.addEdge(4, 3);
// graph.addEdge(4, 5);

// graph.addEdge(5, 4);
// graph.addEdge(5, 3);
// console.log(shortestPathWithBFS(graph, 0, 5));
//----------

//----------
// //case 3: isolated v1
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);

// graph.addEdge(1, 2);
// graph.addEdge(1, 3);

// graph.addEdge(2, 1);
// graph.addEdge(2, 3);
// graph.addEdge(2, 4);

// graph.addEdge(3, 1);
// graph.addEdge(3, 2);
// graph.addEdge(3, 4);

// graph.addEdge(4, 2);
// graph.addEdge(4, 3);
// graph.addEdge(4, 5);

// graph.addEdge(5,4);
// // console.log(shortestPathWithBFS(graph,0,5));
// // console.log(shortestPathDijkstra(graph,0,5));
//----------

//----------
// // case 4: existent path/s
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);
// graph.addVertice(1);

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(0, 4);

// graph.addEdge(1, 0);
// graph.addEdge(1, 2);
// graph.addEdge(1, 3);

// graph.addEdge(2, 0);
// graph.addEdge(2, 1);
// graph.addEdge(2, 4);

// graph.addEdge(3, 1);
// graph.addEdge(3, 4);
// graph.addEdge(3, 5);

// graph.addEdge(4, 0);
// graph.addEdge(4, 2);
// graph.addEdge(4, 3);
// graph.addEdge(4, 5);

// graph.addEdge(5, 3);
// graph.addEdge(5, 4);
// console.log(shortestPathWithBFS(graph, 0, 5));
// // console.log(shortestPathDijkstra(graph, 0, 5));
// ----------
/*
4. **Linked List Cycle**: Implement a function to detect if a linked list has a cycle. 
Use Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm) to solve this 
problem efficiently.
*/
function hasCycle(linkedList){
  let fast =linkedList.getNode();
  let slow =linkedList.getNode();
  while (fast != null && fast['next'] != null){
    fast = fast['next']['next'];
    slow = slow['next'];
    if (fast === slow) return true;
  }
  return false;
}
const linkedList= new LinkedList(2);
const linkedList1= new LinkedList(2);
linkedList1.getNode()['next']={value:3,next:{value:2}};
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);
linkedList.insertNode(2);
linkedList.insertNode(5);
linkedList.insertNode(6);
linkedList.insertNode(7);
linkedList.insertNode(8);
linkedList.insertNode(9);
linkedList.insertNode(11);
linkedList.insertNode(11);
linkedList.insertNode(12);
linkedList.insertNode(13);
linkedList.insertNode(14);

let aux = linkedList.getNode();
while(aux['next'] != null){
  aux=aux['next'];
  console.log(aux);
}
aux['next']=linkedList.getNode();//creating circular reference (cycle)

console.log(hasCycle(linkedList));//true
console.log(hasCycle(linkedList1));//false

//----------------------------- PART 3: Demonstration -----------------------------

console.log("\n--- Stack Demonstration ---");
const demoStack = new Stack([1, 2, 3]);
console.log("Initial stack (top):", demoStack.peek());
demoStack.push(4);
console.log("Top after push(4):", demoStack.peek());
console.log("Pop:", demoStack.pop());
console.log("Peek after pop:", demoStack.peek());
console.log("Min in stack:", demoStack.getMin());
console.log("Max in stack:", demoStack.getMax());

console.log("\n--- Queue Demonstration ---");
const demoQueue = new Queue([10, 20, 30]);
console.log("First in queue:", demoQueue.peek());
demoQueue.enqueue(40);
console.log("After enqueue(40):", demoQueue.peek());
console.log("Dequeue:", demoQueue.dequeue());
console.log("Peek after dequeue:", demoQueue.peek());

console.log("\n--- BinaryTree Demonstration ---");
const demoTree = new BinaryTree([5, 3, 7, 2, 4, 6, 8]);
console.log("Pre-order traversal:");
demoTree.preOrder();
console.log("In-order traversal:");
demoTree.inOrder();
console.log("Post-order traversal:");
demoTree.postOrder();
console.log("Search 6:", demoTree.search(6));
console.log("Search 10:", demoTree.search(10));
console.log("Is BST:", isBST(demoTree.root));

console.log("\n--- Graph Demonstration ---");
const demoGraph = new Graph();
for (let i = 0; i < 6; i++) demoGraph.addVertice(i);
demoGraph.addEdge(0, 1);
demoGraph.addEdge(0, 2);
demoGraph.addEdge(1, 3);
demoGraph.addEdge(2, 4);
demoGraph.addEdge(3, 5);
demoGraph.addEdge(4, 5);
console.log("Vertices:", demoGraph.vertices.map(v => v.value));
console.log("Edges:", demoGraph.edges);
console.log("Shortest path (BFS) from 0 to 5:", shortestPathWithBFS(demoGraph, 0, 5));
console.log("Shortest path (Dijkstra) from 0 to 5:", shortestPathDijkstra(demoGraph, 0, 5));

console.log("\n--- LinkedList Demonstration ---");
const demoList = new LinkedList([1, 2, 3, 4, 5]);
console.log("Search 3:", demoList.searchNode(3));
console.log("Search 10:", demoList.searchNode(10));
demoList.insertNode(6);
console.log("After insertNode(6), search 6:", demoList.searchNode(6));
demoList.deleteNode(3);
console.log("After deleteNode(3), search 3:", demoList.searchNode(3));

// Cycle detection
let cycleList = new LinkedList([1, 2, 3]);
let node = cycleList.getNode();
while (node.next) node = node.next;
node.next = cycleList.getNode(); // create cycle
console.log("Has cycle (should be true):", hasCycle(cycleList));

let noCycleList = new LinkedList([1, 2, 3]);
console.log("Has cycle (should be false):", hasCycle(noCycleList));