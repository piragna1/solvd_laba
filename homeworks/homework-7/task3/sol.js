/**Your task is to implement a function called `chainPromises` that facilitates chaining of promises. 
 * The function should accept an array of functions that return promises and execute them sequentially.

**Instructions**

1. Implement a function called `chainPromises` that takes an array of functions as an argument.
2. Each function in the array should return a promise.
3. The `chainPromises` function should execute the functions sequentially, chaining the promises together.
4. The returned promise should resolve with the value of the last resolved promise or reject with the reason 
  of the first rejected promise. */

function asyncFunction1() {
  return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " - Result from asyncFunction3");
}
function asyncFunction4(data) {
  return Promise.resolve(data + " - Result from asyncFunction4");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3, asyncFunction4];

function chainPromises(functionsArray) {
  // Start reducing the functions array, chaining promises sequentially
  // The initial value is a resolved Promise
  return functionsArray.reduce((promiseChain, currentFunction, index) => {
    // For each function, chain it after the previous promise resolves
    return promiseChain.then(result => {
      // If it's the first function, call it without arguments
      if (index === 0) {
        return currentFunction();
      } else {
        // For subsequent functions, pass the result from the previous promise
        return currentFunction(result);
      }
    });
  }, Promise.resolve()); // Initial promise resolved
}

chainPromises(functionsArray)
  .then(finalResult => {
    console.log("Chained promise result:", finalResult);
  })
  .catch(error => {
    console.error("Chained promise error:", error);
  });

