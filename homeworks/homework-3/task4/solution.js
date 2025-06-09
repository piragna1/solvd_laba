// task4/solution.js

export class Task4 {
  /**
   * Squares each number in the array.
   */
  static squareNumbers(numbers) {
    return numbers.map((n) => n ** 2);
  }

  /**
   * Filters out even numbers from the array.
   */
  static filterOddNumbers(numbers) {
    return numbers.filter((n) => n % 2 !== 0);
  }

  /**
   * Calculates the factorial of a given number.
   */
  static factorial(n) {
    if (n < 0) return undefined;
    return n === 0 ? 1 : n * this.factorial(n - 1);
  }

  /**
   * Calculates base^exponent.
   */
  static power(base, exponent) {
    return base ** exponent;
  }
}
