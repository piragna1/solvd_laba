import { array } from "../shared/data";

const isEqual = require("lodash.isEqual");
const hashObj = require("object-hash");
/**### **Task 4: Array Intersection and Union***/
export class Task4 {
  constructor() {}
  /**1. Create a function called `getArrayIntersection` that takes two arrays as arguments and returns a new
   *  array containing the common elements between the two arrays. */


  /**
   * Returns the intersection of two arrays, supporting both primitive values and complex types (objects, arrays).
   * Handles duplicate values by returning unique intersection elements only.
   * For complex types, uses hashing and deep equality to determine intersection.
   *
   * Edge Cases:
   * - If either array is empty, returns an empty array.
   * - Handles arrays containing only primitive values, nested objects, and arrays.
   *
   * @param {Array} array1 - The first array to intersect.
   * @param {Array} array2 - The second array to intersect.
   * @returns {Array} An array containing the unique intersection elements from both arrays.
   * @throws {Error} If either argument is not an array.
   *
   * @example
   * const array1 = [{ id: 1 }, [1, 2], { id: 2 }];
   * const array2 = [{ id: 1 }, [1, 2], { id: 3 }, 1, 2];
   * const result = getArrayIntersection(array1, array2);
   * console.log(result); // Output: [{ id: 1 }, [1, 2], 1, 2]
   *
   * @example
   * const emptyArray = [];
   * const resultWithEmpty = getArrayIntersection(array1, emptyArray);
   * console.log(resultWithEmpty); // Output: []
   */

  getArrayIntersection(array1, array2) {
    /**Edge Cases:
        Arrays containing only primitive values (check this)
        Arrays containing nested objects or arrays (using object-hash and lodash libraries to lookup after this)
        Arrays with duplicate values  (using set for store non repeated intersections)
    */

    //arguments type check
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("Both arguments must be arrays.");
    }

    if (array1.length === 0 || array2.length === 0) { //checking emptiness of arguments
      return [];
    }

    let ret = new Set(); //intersection collection (output).
    let set = new Map(); //fast accessing collection for checking common objects.

    if (array1.length > array2.length) {
      //assuring array.length < array2.length
      [array1, array2] = [array2, array1];
    }

    //iterate over array2, generate hashes of objects and store them in the collection (map)
    array2.forEach((item) => {
      if (this.isComplexType(item)) {
        // is object (object literal or array)
        const hash = hashObj(item);
        set.set(hash, item);
      } else {
        set.set(item, item);
      }
    });

    //iterate over array1
    array1.forEach((item) => {
      if (this.isComplexType(item)) {
        //check if object element
        const hash = hashObj(item);
        if (set.has(hash)) {
          // Verify if hash exists in map
          // Verify colision
          if (isEqual(item, set.get(hash))) {
            // Common objects found
            ret.add(item); // Add result
          }
        }
      } else {
        //checks for primitive values
        if (set.has(item)) {
          ret.add(item); //add primitive value to the result
        }
      }
    });

    return Array.from(ret);
  }
  /**2. Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array
   * containing all unique elements from both arrays, without any duplicates. */
  getArrayUnion(array1, array2) {}

  isComplexType(value) {
    return (
      value !== null && (typeof value === "object" || Array.isArray(value))
    );
  }

  generateHash(value) {
    return hashObj(value);
  }
}



const task4 = new Task4();

// Test case 1: Basic intersection
const array1 = [{ id: 1 }, [1, 2], { id: 2 }];
const array2 = [{ id: 1 }, [1, 2], { id: 3 }, 1, 2];
console.log(task4.getArrayIntersection(array1, array2)); // Expected: [{ id: 1 }, [1, 2], 1, 2]

// Test case 2: One empty array
const emptyArray = [];
console.log(task4.getArrayIntersection(array1, emptyArray)); // Expected: []

// Test case 3: Only primitive values
const array3 = [1, 2, 3];
const array4 = [2, 3, 4];
console.log(task4.getArrayIntersection(array3, array4)); // Expected: [2, 3]

// Test case 4: Nested objects
const array5 = [{ a: { b: 1 } }, { a: 2 }];
const array6 = [{ a: { b: 1 } }, { a: 3 }];
console.log(task4.getArrayIntersection(array5, array6)); // Expected: [{ a: { b: 1 } }]

// Test case 5: Duplicates
const array7 = [1, 2, 2, 3];
const array8 = [2, 2, 3, 4];
console.log(task4.getArrayIntersection(array7, array8)); // Expected: [2, 3]
