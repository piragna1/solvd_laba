
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
 * The first instruction which is the methodlog of console
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
//task queue: logSecond();
//microtask queue:
//console: first


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
//task queue: logSecond();
//microtask queue: logThird(); <- here
//console: first


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

//callstack:  console.log("Fourth!");
//task queue: logSecond();
//microtask queue: logThird();
/* console
first
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

//callstack:  logThird();
//task queue: logSecond();
//microtask queue: 
/* console
first
Fourth!
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
//---------------------------
