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
