/**### **Task 1: Implement `promiseAll` Function**

Your task is to implement a function called `promiseAll` that mimics the behavior of `Promise.all()`. The function should accept an array 
of promises and return a single promise that resolves to an array of resolved values or rejects with the reason of the first rejected 
promise.

**Instructions**

1. Implement a function called `promiseAll` that takes an array of promises as an argument.
2. The function should return a new promise that resolves when all promises in the input array have resolved, and rejects if any of the 
    promises reject.
3. If all promises resolve, the resolved value of the returned promise should be an array containing the resolved values of the input
    promises, in the same order.
4. If any promise rejects, the returned promise should reject with the reason of the first rejected promise. */

const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

promiseAll(promises)
  .then(results => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });