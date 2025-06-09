export function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}
