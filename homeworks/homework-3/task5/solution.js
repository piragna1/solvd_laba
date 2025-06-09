// task5/solution.js

/**
 * Task5 provides utility methods for lazy mapping over arrays and generating Fibonacci numbers.
 *
 * @class
 */
export class Task5 {
  /**
   * Lazily applies a mapping function to each element of the given array, returning an iterator-like object.
   *
   * @param {Array} array - The array to be mapped over.
   * @param {Function} mapFn - The function to apply to each element of the array.
   * @returns {{ next: function(): { value: any, done: boolean } }} An object with a `next` method that returns the next mapped value and a done flag.
   */
  static lazyMap(array, mapFn) {
    let index = 0;
    return {
      next: function () {
        if (index < array.length) {
          const value = mapFn(array[index]);
          index++;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
  /**
   * Generates an object that produces Fibonacci numbers sequentially.
   * Each call to the `next` method returns the next number in the Fibonacci sequence.
   *
   * @returns {{ next: function(): { value: number } }} An object with a `next` method that returns the next Fibonacci number.
   */
  static fibonacciGenerator() {
    let a = 0,
      b = 1;
    return {
      next: function () {
        const value = a;
        [a, b] = [b, a + b];
        return { value };
      },
    };
  }
}
