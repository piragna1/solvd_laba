// task4/solution.js

import { trampoline } from "../shared/trampoline";

export class Task4 {
  
  static calculateFactorial(n, acc = 1) {
    if (n <= 1) {
      return acc;
    }
    return () => calculateFactorial(n - 1, acc * n);
  }

  static power(base, exponent, acc = 1) {
    if (exponent === 0) {
      return acc;
    }

    if (exponent % 2 === 0) {
      return () => power(base * base, exponent / 2, acc);
    } else {
      return () => power(base, exponent - 1, acc * base);
    }
  }
}
