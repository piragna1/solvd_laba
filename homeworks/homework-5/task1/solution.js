/**### **Task 1: Advanced Array Filtering***/
export class Task1 {
  /**1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments.
   *  The `customFilterUnique` function should filter the array using the callback function to determine
   * uniqueness. The resulting array should contain only unique elements based on the callback's logic.*/
  customFilterUnique(array, callback) {
    const seen = new Set(); // Used to keep track of seen values based on the callback

    return array.reduce((uniqueElements, currentElement) => {
      const key = callback(currentElement); // Extract the key to check uniqueness

      if (key !== undefined && !seen.has(key)) {
        // If the key is defined and hasn't been seen yet
        seen.add(key); // Mark the key as seen
        uniqueElements.push(currentElement); // Add the element to the result array
      }

      return uniqueElements; // Accumulate the result
    }, []);
  }

  /**2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return
   * only unique objects.*/
  usingCustomFilterUnique(array, callback) {
    return this.customFilterUnique(array, callback);
  }
}
