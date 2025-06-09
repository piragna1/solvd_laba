// task4/solution.js


export class Task4 {

  static calculateFactorial(n, acc = 1) {
    if (n <= 1) {
      return acc;
    }
    return () => Task4.calculateFactorial(n - 1, acc * n);
  }

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
