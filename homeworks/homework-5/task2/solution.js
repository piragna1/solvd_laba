/**### **Task 2: Array Chunking***/
export class Task2 {
  /**1. Create a function called `chunkArray` that takes an array and a chunk size as arguments.
   * The `chunkArray` function should divide the array into smaller arrays, each containing elements of
   * the specified chunk size. The function should return an array of arrays.
   *
   */
  chunkArray(array, size) {
    if (size <= 0 || size === undefined)
      throw new Error("Please indicate a chunk size larger than 0");
    let ret = []; //output
    while (array.length > 0) {
      ret.push(array.splice(0, size));
    }
    return ret;
  }
  /**
   * 2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.
   */
  chunkArrayv2(array,size) {
    size = Math.trunc(size)
    if (size <= 0 || size === undefined)
      throw new Error("Please indicate a chunk size larger than 0");
    const ret = []; // output
    for (let i = 0; i < array.length; i += size) {
      // Usa slice para obtener un nuevo array sin modificar el original
      ret.push(array.slice(i, i + size));
    }
    return ret;
  }
}
