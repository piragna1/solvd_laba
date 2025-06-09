/**
 * Executes a recursive function using the trampoline technique to avoid stack overflows.
 * The function `fn` should return either another function (to continue recursion)
 * or a non-function value (to terminate recursion).
 *
 * @param {Function} fn - The initial function to execute. It should return either another function or a final result.
 * @returns {*} The final result after all recursive calls have been executed.
 */
export function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}
