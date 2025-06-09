// compose.js

export function compose(...fns) {
  return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
}