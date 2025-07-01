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
    for (let i = 0; i < array2.length; i++) {
      if (this.isComplexType(array2[i])) {
        // is object (object literal or array)
        let hash = hashObj(array2[i]); //generate hash
        set.set(hash, array2[i]); //add object to the intersection set
      } else {
        set.set(array2[i], array2[i]); //add primitive data
      }
    }

    //iterate over array1
    for (let i = 0; i < array1.length; i++) {
      if (this.isComplexType(array1[i])) {
        //check if object element
        const hash = hashObj(array1[i]);
        if (set.has(hash)) {
          // Verify if hash exists in map
          // Verify colision
          if (isDeepStrictEqual(array1[i], set.get(hash))) {
            // Common objects found
            ret.add(array1[i]); // Add result
          }
        }
      } else {
        //checks for primitive values
        if (set.has(array1[i])) {
          ret.add(array1[i]); //add primitive value to the result
        }
      }
    }

    return Array.from(ret);
  }
  /**2. Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array
   * containing all unique elements from both arrays, without any duplicates. */

  getArrayUnion(array1, array2) {
    // Manual check if input is an array
    function isArray(arr) {
      // Using Object.prototype.toString to detect arrays
      return Object.prototype.toString.call(arr) === "[object Array]";
    }

    if (!isArray(array1) || !isArray(array2)) {
      throw new Error("Both arguments must be arrays.");
    }

    // Helper function to check if a value is a complex type (object or array)
    function isComplexType(value) {
      return typeof value === "object" && value !== null;
    }

    // Manual function to generate a consistent hash string for an object
    // This will help identify duplicates of complex objects
    function hashObj(obj) {
      // Collect all own enumerable keys of the object
      let keys = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      // Manually sort keys alphabetically
      for (let i = 0; i < keys.length - 1; i++) {
        for (let j = i + 1; j < keys.length; j++) {
          if (keys[i] > keys[j]) {
            let temp = keys[i];
            keys[i] = keys[j];
            keys[j] = temp;
          }
        }
      }

      // Build a string representation of the object
      let str = "{";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let val = obj[key];

        // Recursively hash nested objects
        if (isComplexType(val)) {
          val = hashObj(val);
        } else if (typeof val === "string") {
          // Wrap strings in quotes for clarity
          val = `"${val}"`;
        } else {
          // Convert other primitive types to string
          val = String(val);
        }

        // Append key-value pair
        str += key + ":" + val;

        // Add comma between pairs except after the last one
        if (i < keys.length - 1) {
          str += ",";
        }
      }
      str += "}";
      return str;
    }

    // Deep strict equality check for two values (primitives or objects)
    function isDeepStrictEqual(a, b) {
      if (a === b) return true;

      // If both are complex objects, compare keys and values recursively
      if (isComplexType(a) && isComplexType(b)) {
        let aKeys = [];
        let bKeys = [];

        // Collect keys for both objects
        for (let k in a) {
          if (a.hasOwnProperty(k)) aKeys.push(k);
        }
        for (let k in b) {
          if (b.hasOwnProperty(k)) bKeys.push(k);
        }

        // If different number of keys, objects are different
        if (aKeys.length !== bKeys.length) return false;

        // Manually sort both key arrays
        for (let i = 0; i < aKeys.length - 1; i++) {
          for (let j = i + 1; j < aKeys.length; j++) {
            if (aKeys[i] > aKeys[j]) {
              let temp = aKeys[i];
              aKeys[i] = aKeys[j];
              aKeys[j] = temp;
            }
            if (bKeys[i] > bKeys[j]) {
              let temp = bKeys[i];
              bKeys[i] = bKeys[j];
              bKeys[j] = temp;
            }
          }
        }

        // If keys do not match exactly, objects differ
        for (let i = 0; i < aKeys.length; i++) {
          if (aKeys[i] !== bKeys[i]) return false;
        }

        // Recursively compare values for all keys
        for (let i = 0; i < aKeys.length; i++) {
          if (!isDeepStrictEqual(a[aKeys[i]], b[bKeys[i]])) return false;
        }

        return true;
      }

      // Values differ if none of the above conditions met
      return false;
    }

    // We can't use Map or Set, so simulate them with parallel arrays for hashes/objects and primitives
    let seenHashes = []; // store hashes of complex objects
    let seenObjects = []; // store actual complex objects corresponding to hashes
    let seenPrimitives = []; // store primitive values we've already added

    // Result array and manual index to simulate push
    let result = [];
    let resultIndex = 0;

    // Check if primitive value has already been seen
    function primitiveHas(value) {
      for (let i = 0; i < seenPrimitives.length; i++) {
        if (value === seenPrimitives[i]) {
          // Special case for NaN because NaN !== NaN
          if (
            typeof value === "number" &&
            value !== value &&
            seenPrimitives[i] !== seenPrimitives[i]
          ) {
            return true;
          }
          return true;
        }
      }
      return false;
    }

    // Check if hash already exists in seenHashes with a deeply equal object
    function hashHas(hash, obj) {
      for (let i = 0; i < seenHashes.length; i++) {
        if (seenHashes[i] === hash) {
          // Compare the stored object with the new one to avoid collision issues
          if (isDeepStrictEqual(seenObjects[i], obj)) {
            return true; // Exact object already exists
          } else {
            return false; // Collision: same hash but different object
          }
        }
      }
      return false; // Hash not found
    }

    // Add a new hash and object to tracking arrays
    function addHash(hash, obj) {
      seenHashes[seenHashes.length] = hash;
      seenObjects[seenObjects.length] = obj;
    }

    // Add a primitive to tracking array
    function addPrimitive(value) {
      seenPrimitives[seenPrimitives.length] = value;
    }

    // Add an item to the final result
    function addResult(value) {
      result[resultIndex++] = value;
    }

    // Manual check if value is NaN (since Number.isNaN is built-in)
    function isNaNManual(val) {
      return typeof val === "number" && val !== val;
    }

    // Add an item if unique according to the above rules
    function addItem(item) {
      // Ignore null, undefined, and NaN values
      if (item === null || item === undefined || isNaNManual(item)) {
        return;
      }

      if (isComplexType(item)) {
        // For objects or arrays, use hash and deep equality to check uniqueness
        let hash = hashObj(item);
        if (hashHas(hash, item)) {
          // Already present, skip
          return;
        } else {
          // New unique complex item found — add it
          addHash(hash, item);
          addResult(item);
        }
      } else {
        // For primitive values, check if already added
        if (!primitiveHas(item)) {
          addPrimitive(item);
          addResult(item);
        }
      }
    }

    // Manually iterate over array1 and array2 and add unique items
    for (let i = 0; i < array1.length; i++) {
      addItem(array1[i]);
    }
    for (let j = 0; j < array2.length; j++) {
      addItem(array2[j]);
    }

    // Return the new array containing unique elements from both inputs
    return result;
  }
}
