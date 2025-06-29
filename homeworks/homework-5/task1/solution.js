/**### **Task 1: Advanced Array Filtering***/
export class Task1 {
  /**1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments.
   *  The `customFilterUnique` function should filter the array using the callback function to determine
   * uniqueness. The resulting array should contain only unique elements based on the callback's logic.*/
  customFilterUnique(array, callback) {
    let storedValues = []; // helper array for checking duplications
    const ret = []; //new array to be returned

    //filtering array (1st argument)
    array.filter((element) => {
      /**Check:
       * 1 - the element has the property
       * 2 - there is not an existent object with the property value
       */
      if (callback(element) !== undefined) {
        //has property?
        if (!storedValues.includes(callback(element))) {
          //there is not existent object with the prop and prop value
          //update arrays
          ret.push(element);
          storedValues.push(callback(element));
        }
      }
    });
    return ret; //return the new filtered array
  }

  /**2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return
   * only unique objects.*/
  usingCustomFilterUnique(array, callback) {
    return this.customFilterUnique(array, callback);
  }
}
