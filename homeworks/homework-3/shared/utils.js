//util
/**
 * Composes multiple functions into a single function.
 * The composed function executes from right to left.
 *
 * @param {...Function} fns - Functions to compose.
 * @returns {Function} A function obtained by composing the argument functions from right to left.
 * The result of each function is passed as the argument to the next.
 *
 * @example
 * const add = x => x + 1;
 * const multiply = x => x * 2;
 * const composed = compose(add, multiply);
 * composed(5); // Returns 11 (multiply(5) -> 10, add(10) -> 11)
 */
export function compose(...fns) {
  return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
}


/**
 * Repeatedly calls a function until the result is no longer a function, effectively flattening recursive calls.
 * Useful for optimizing recursive algorithms by avoiding stack overflows (tail call optimization).
 *
 * @param {Function} fn - The initial function to execute. Each call should return either another function or a final result.
 * @returns {*} The final non-function result returned by the chain of function calls.
 */
export function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}
