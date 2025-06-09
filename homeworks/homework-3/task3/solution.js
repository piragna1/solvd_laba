// task3/solution.js

/**
 * Task3 provides utility static methods for creating counter functions and repeating function executions.
 *
 * @class
 */
export class Task3 {
  /**
   * Creates a counter function that increments and returns the count each time it is called.
   *
   * @returns {function(): number} A function that, when called, increments and returns the current count.
   */
  static createCounter() {
    let count = 0;
    return function () {
      count += 1;
      return count;
    };
  }
  /**
   * Returns a function that executes the provided function a specified number of times synchronously,
   * or repeatedly at 1-second intervals if a negative number is provided.
   *
   * @param {Function} fn - The function to be executed.
   * @param {number} times - The number of times to execute the function. If negative, executes indefinitely every second.
   * @returns {Function} An executor function. If `times` is non-negative, executes `fn` the specified number of times when called.
   *                     If `times` is negative, starts an interval and returns a function to clear the interval.
   */
  static repeatFunction(fn, times) {
  return function executor() {
    if (times >= 0) {
      for (let i = 0; i < times; i++) {
        fn();
      }
      return; // nada más que hacer
    } else {
      const id = setInterval(fn, 1000);
      // Retornamos una función para parar la repetición
      return () => clearInterval(id);
    }
  };
}

}
