export const printDescriptors = function (input, depth = 0) {
  if (input === null || typeof input !== "object") return;

  const indent = "  ".repeat(depth); // indent visual

  for (let key of Object.keys(input)) {
    const descriptor = Object.getOwnPropertyDescriptor(input, key);

    console.log(`${indent}${key}:`, {
      value: descriptor.value,
      writable: descriptor.writable,
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,
    });

    if (typeof descriptor.value === "object" && descriptor.value !== null) {
      printDescriptors(descriptor.value, depth + 1);
    }
  }
};
