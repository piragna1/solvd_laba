// task4/solution.js


/**
 * Task4 provides utility methods for performing mathematical computations
 * using recursion with trampolining to avoid stack overflows.
 *
 * @class
 */
export class Task4 {

  /**
   * Calculates the factorial of a given number using recursion and an accumulator.
   * Returns a thunk (function) for each recursive step, enabling trampolining to avoid stack overflows.
   *
   * @param {number} n - The number to calculate the factorial of.
   * @param {number} [acc=1] - The accumulator for the factorial calculation (used internally).
   * @returns {number|Function} The factorial result if base case is reached, otherwise a thunk for the next recursive step.
   */
  static calculateFactorial(n, acc = 1) {
    if (n <= 1) {
      return acc;
    }
    return () => Task4.calculateFactorial(n - 1, acc * n);
  }

  /**
   * Computes the power of a base raised to an exponent using recursion and trampolining.
   *
   * @param {number} base - The base number to be raised to a power.
   * @param {number} exponent - The exponent to raise the base to (should be a non-negative integer).
   * @param {number} [acc=1] - The accumulator used for tail recursion (default is 1).
   * @returns {Function|number} Returns a thunk (function) for the next recursive step, or the final result as a number when exponent is 0.
   */
  static power(base, exponent, acc = 1) {
    if (exponent === 0) {
      return acc;
    }

    if (exponent % 2 === 0) {
      return () => Task4.power(base * base, exponent / 2, acc);
    } else {
      return () => Task4.power(base, exponent - 1, acc * base);
    }
  }
}
