// task5/solution.js

export class ArrayUtils {
  /**
   * Finds the maximum number in the array.
   */
  static findMax(arr) {
    return Math.max(...arr);
  }

  /**
   * Finds the minimum number in the array.
   */
  static findMin(arr) {
    return Math.min(...arr);
  }

  /**
   * Calculates the sum of all elements in the array.
   */
  static sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  /**
   * Filters elements greater than a given threshold.
   */
  static filterGreaterThan(arr, threshold) {
    return arr.filter((n) => n > threshold);
  }
}
