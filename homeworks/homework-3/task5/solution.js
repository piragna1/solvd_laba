// task5/solution.js

export class Task5 {
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
