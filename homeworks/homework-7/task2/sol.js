/**Your task is to implement a function called `promiseAllSettled` that mimics the behavior of `Promise.allSettled()`. The function 
 * should accept an array of promises and return a promise that resolves to an array of objects representing the settlement of each 
 * promise.

**Instructions**

1. Implement a function called `promiseAllSettled` that takes an array of promises as an argument.
2. The function should return a new promise that resolves with an array of objects representing the settlement of each promise in the 
    input array.
3. Each object in the resolved array should have properties `status` and `value` or `reason`. The `status` can be either `'fulfilled'`
    or `'rejected'`, and `value` should hold the resolved value (if fulfilled) or `reason` should hold the rejection reason (if rejected).
*/

const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3)
];

promiseAllSettled(promises)
  .then(results => {
    console.log("All promises settled:", results);
    // Expected: [{ status: 'fulfilled', value: 1 },
    //            { status: 'rejected', reason: 'Error occurred' },
    //            { status: 'fulfilled', value: 3 }]
  });