/**Your task is to implement a function called `promisify` that converts a callback-style function into a 
 * function that returns a promise.

**Instructions**

1. Implement a function called `promisify` that takes a callback-style function as an argument.
2. The `promisify` function should return a new function that returns a promise.
3. The new function should execute the original callback-style function and resolve the promise with its 
  result or reject the promise with any error encountered. */

function promisify(callbackfn){//receives callbackStyleFunction
  return function(...args){ //receives the input from promisedFunction
    return new Promise((resolve,reject)=>{
      callbackfn(...args,(err,result)=>{//callbackStyleFunction called with (3, callback) args
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

function callbackStyleFunction(value, callback) {
  /**callback received
   * 
   * (err,result)=>{
   * if (err) reject(err);
      else resolve(result);
   * }
   */
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
      /*
      executes (null(as err),6 (as result)){
        if (err) //false
        else resolve(result) executed
      }
      */
    } else {
      callback("Invalid value", null);
    }
  }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);
promisedFunction(3)
  .then(result => console.log(result))
  .catch(error => console.error(error));