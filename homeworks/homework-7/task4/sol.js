/**Your task is to implement a function called `promisify` that converts a callback-style function into a 
 * function that returns a promise.

**Instructions**

1. Implement a function called `promisify` that takes a callback-style function as an argument.
2. The `promisify` function should return a new function that returns a promise.
3. The new function should execute the original callback-style function and resolve the promise with its 
  result or reject the promise with any error encountered. */

function callbackStyleFunction(value, callback) {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
    } else {
      callback("Invalid value", null);
    }
  }, 1000);
}

const promisify = function(callback){
  return function (){ //this should return a promise
    callback()
    .then(result => Promise.resolve(result))
    .catch(error => Promise.reject(error))
  }
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
  .then(result => {
    console.log("Promised function result:", result); // Expected: 6
  })
  .catch(error => {
    console.error("Promised function error:", error);
  });