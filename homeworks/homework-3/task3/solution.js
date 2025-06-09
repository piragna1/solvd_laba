// task3/solution.js

export class Task3 {
  static createCounter() {
    let count = 0;
    return function () {
      count += 1;
      return count;
    };
  }
  static repeatFunction(fn, times) {
    return function executor() {
      if (times >= 0) {
        // Collect results if fn returns something useful, or ignore
        for (let i = 0; i < times; i++) {
          fn();
        }
        // no stop function here
      } else {
        const id = setInterval(fn, 1000);
        // return a function that clears the interval
        return () => clearInterval(id);
      }
    };
  }
}
