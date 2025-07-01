/**### **Task 1: Advanced Array Filtering***/
export class Task1 {
  /**1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments.
   *  The `customFilterUnique` function should filter the array using the callback function to determine
   * uniqueness. The resulting array should contain only unique elements based on the callback's logic.*/
  customFilterUnique(array, callback) {
    const seen = new Set(); // Used to keep track of seen values based on the callback
    const ret = [];
    for (let i = 0; i < array.length ; i++){
      const key = callback(array[i]);
      if (key !== undefined && !seen.has(key)){
        seen.add(key);
        ret.push(array[i]);
      }
    }
    return ret;
  }

  /**2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return
   * only unique objects.*/
  usingCustomFilterUnique(array, callback) {
    return this.customFilterUnique(array, callback);
  }
}
