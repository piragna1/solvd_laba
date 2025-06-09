//util
export function compose(...fns) {
  return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
}


export function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}
