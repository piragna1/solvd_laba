import { isDeepStrictEqual } from "node:util";
import hashObj from "object-hash";

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
    //arguments type check
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("Both arguments must be arrays.");
    }

    if (array1.length === 0 || array2.length === 0) {
      //checking emptiness of arguments
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
          if (isDeepStrictEqual(item, set.get(hash))) {
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

  getArrayUnion(array1, array2) {
    // Check if both inputs are arrays
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("Both arguments must be arrays.");
    }

    // Map to store hashes of complex objects
    const seenHashes = new Map(); // Stores [hash, object]
    // Set to track unique primitive values
    const seenPrimitives = new Set();
    // Array to hold the final result
    const result = [];

    // Function to add an item to the result
    const addItem = (item) => {
      // Ignore special values: null, undefined, and NaN
      if (item === null || item === undefined || Number.isNaN(item)) {
        return; // Skip these values
      }

      // Check if the item is a complex type (object or array)
      if (this.isComplexType(item)) {
        const hash = hashObj(item); // Generate a hash for the object

        // Check if the hash already exists in the map
        if (seenHashes.has(hash)) {
          const existingItem = seenHashes.get(hash); // Get the existing item
          // Compare the existing item with the new item
          if (!isDeepStrictEqual(existingItem, item)) {
            // COLLISION: Same hash but different objects
            // Create a unique collision hash
            const collisionHash = `collision-${hash}-${result.length}`;
            seenHashes.set(collisionHash, item); // Store the new item with the collision hash
            result.push(item); // Add the new item to the result
          }
          // If they are equal, do nothing (the item already exists)
        } else {
          // If the hash is new, store it and add the item to the result
          seenHashes.set(hash, item);
          result.push(item);
        }
      } else {
        // For primitive values, check if it has already been added
        if (!seenPrimitives.has(item)) {
          seenPrimitives.add(item); // Mark the primitive as seen
          result.push(item); // Add the primitive to the result
        }
      }
    };

    // Process each item in both input arrays
    array1.forEach(addItem);
    array2.forEach(addItem);

    // Return the final array containing unique values
    return result;
  }

  isComplexType(value) {
    return (
      value !== null && (typeof value === "object" || Array.isArray(value))
    );
  }

  generateHash(value) {
    return hashObj(value);
  }
}