


//-------------------------------------------------------------------EVENT LOOP in js



//---------------------------
//Javascript is single-threaded
//It can only execute a single task at time.
//---------------------------



//--------------------------- Event loop
//Event loop is responsible of managing the execution of synchronous and asynchronous tasks.
//---------------------------




//--------------------------- Event loop
//It allows JavaScript to handle `non-blocking` operations.
//---------------------------





//--------------------------- Event loop COMPONENTS

//WEB APIS
//TASK QUEUE
    //Macrotask queue
    //Microtask queue
//CALL STACK

/**
 * 
 *  Call Stack: Keeps track of function calls. Functions are pushed onto the stack when invoked and popped off when they return.
    Web APIs: Browser-provided APIs (e.g., setTimeout, DOM events, HTTP requests) handle asynchronous tasks.
    Task Queue (Callback Queue): Stores callbacks from `asynchronous operations` (e.g., setTimeout, fetch) to be executed when the call stack is empty.
    Microtask Queue: A higher-priority queue for promises and MutationObserver callbacks.
 */

//---------------------------



//---------------------------

/* 
Process:
-Synchronous code is executed first, filling and emptying the call stack.
-When asynchronous tasks complete, their callbacks are added to the appropriate queue (microtask or task queue).
-The event loop checks if the call stack is empty. If it is, it processes tasks from the microtask queue first, then the task queue.
*/
//---------------------------



//--------------------------- EVENT LOOP in action visualization 1
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!"); //here

setTimeout(logSecond, 0);

Promise.resolve().then(logThird);

console.log("Fourth!");

//callstack: console.log('first');
//task queue:
//microtask queue:
//console:

/**
 * The first instruction which is the method log of console object go to the callstack, so soon there will be an output
 */

//---------------------------

//--------------------------- EVENT LOOP in action visualization 2
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!");

setTimeout(logSecond, 0); //here: logSecond() goes to the task queue

Promise.resolve().then(logThird);

console.log("Fourth!");

//callstack: 
//task queue: logSecond(); <- 
//microtask queue:
//console: first <- output

/**
 * -We have the output
 * -LogSecond was passed to the taskqueue due to that it was encapsulated in the setTimeout method
 */

//---------------------------

//--------------------------- EVENT LOOP in action visualization 3
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!");

setTimeout(logSecond, 0);

Promise.resolve().then(logThird); //here: logThird goes to the microtask queue

console.log("Fourth!");

//callstack: 
//task queue: logSecond(); <-
//microtask queue: logThird(); <- 
//console: first

/**
 * -logSecond still in taskqueue
 * -logThird() passed to the microTaskqueue since it is called from a Promise.
 */

//---------------------------


//--------------------------- EVENT LOOP in action visualization 4
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!");

setTimeout(logSecond, 0);

Promise.resolve().then(logThird);

console.log("Fourth!");// here: console.log("Fourth!") goes to the callstack!

//callstack:  console.log("Fourth!"); <----
//task queue: logSecond();
//microtask queue: logThird();
/* console
first
*/

/**
 * -Again, a new console log appears so it goes directly to the callstack
 * -logSecond still is in the task queue
 * -logThird still is in the microtaskqueue
 */

//---------------------------


//--------------------------- EVENT LOOP in action visualization 5
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!");

setTimeout(logSecond, 0);

Promise.resolve().then(logThird);

console.log("Fourth!");// here: console.log("Fourth!") goes to the callstack!

//callstack:  logThird(); <-
//task queue: logSecond(); <-
//microtask queue: 
/* console
first
Fourth! <-
*/

/**
 * -We have a new  output which corresponds to the logFourth
 * -logThird leaves the microtaskqueue and is sent to the callstack
 * -logSecond still is in the task queue
 */


//---------------------------


//--------------------------- EVENT LOOP in action visualization 6
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!");

setTimeout(logSecond, 0);

Promise.resolve().then(logThird);

console.log("Fourth!");// here: console.log("Fourth!") goes to the callstack!

//callstack:   logSecond();
//task queue:
//microtask queue: 
/* console
first
Fourth!
Third!
*/

/**
 * -We have a new output in the console which corresponds to logThird()
 * -finally logSecond is passed to the callstack for being executed soon
 */
//---------------------------


//--------------------------- EVENT LOOP in action visualization 7
function logSecond() {
    console.log("Second!");
}

function logThird() {
    console.log("Third!");
}

console.log("First!");

setTimeout(logSecond, 0);

Promise.resolve().then(logThird);

console.log("Fourth!");// here: console.log("Fourth!") goes to the callstack!

//callstack:
//task queue:
//microtask queue: 
/* console
first
Fourth!
Third!
Second!
*/

//All outputs were generated

//---------------------------
