import { Task1 } from "../task1/solution.js";
import { Task2 } from "../task2/solution.js";
import { Task4 } from "../task4/solution.mjs";

// input data
import {
  person,
  array,
  intersectionTestCases,
  unionTestCases,
} from "../shared/data.js";

/**### **Task 5: Array Performance Analysis***/
export class Task5 {
  /**1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments.
   *  The `measureArrayPerformance` function should execute the provided function with the given array as input
   *  and measure the execution time.*/
  measureArrayPerformance(fn, array, label = "⏱ Execution time") {
    let start;
    let end;
    start = performance.now();
    fn(array);
    end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(3)} ms`);
  }
  /**2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods
   *  (`map`, `filter`,`reduce`, etc.) against your custom array manipulation functions. */

  //Comparing methods for filtering for unique elements given a property (`id` in this case)
  comparingFilteringUniqueMethods() {
    let t1 = new Task1();
    const customFn = (arr) => t1.customFilterUnique(arr, (p) => p.id);
    const customFn1 = (arr) =>
      this.customFilterUniqueWithReduce(arr, (p) => p.id);
    console.log("==================== COMPARING: Filtering unique methods\n");
    this.measureArrayPerformance(customFn, person, "🔧 Vanilla method");
    this.measureArrayPerformance(customFn1, person, "🧰 Built-in method");
    console.log("\n");
  }
  customFilterUniqueWithReduce(array, callback) {
    //built in method constructed for comparison
    const seen = new Set();
    return array.reduce((acc, curr) => {
      const key = callback(curr);
      if (key !== undefined && !seen.has(key)) {
        seen.add(key);
        acc.push(curr);
      }
      return acc;
    }, []);
  }
  //---------------------

  //Comparing methods for chunking arrays into smaller pieces
  comparingArrayChunkingMethods() {
    let t2 = new Task2();
    const customFn = (arr) => t2.chunkArrayv2(arr, 4);
    const customFn1 = (arr) => this.chunkArrayReduce(arr, 4);
    console.log("==================== COMPARING: Chunking array methods\n");
    this.measureArrayPerformance(customFn, array, "🔧 Vanilla method");
    this.measureArrayPerformance(customFn1, array, "🧰 Built-in method");
    console.log("\n");
  }

  chunkArrayReduce(array, size) {
    //method with builtin methods for comparison
    if (size <= 0 || size === undefined)
      throw new Error("Please indicate a chunk size larger than 0");

    return array.reduce((acc, curr, index) => {
      if (index % size === 0) acc.push([]);
      acc[acc.length - 1].push(curr);
      return acc;
    }, []);
  }

  //---------------------

  //Comparing methods for getting the intersection between two given arrays
  comparingIntersectionMethods() {
    let t4 = new Task4();
    console.log("==================== COMPARING: Intersection array methods\n");
    //Iterating over the test cases object
    for (const { label, arrays } of intersectionTestCases) {
      //generating custom functions that fit `measureArrayPerformance`
      const customFn = (inputs) =>
        t4.getArrayIntersection(inputs[0], inputs[1]);
      const builtInFn = (inputs) =>
        this.getArrayIntersectionBuiltIn(inputs[0], inputs[1]);

      console.log(label); //label of the test case
      this.measureArrayPerformance(customFn, arrays, "🔧 Vanilla method");
      this.measureArrayPerformance(builtInFn, arrays, "🧰 Built-in method");
      console.log("\n");
    }
  }
  getArrayIntersectionBuiltIn(array1, array2) {
    // Inner helpers functions
    const isComplexType = (value) =>
      typeof value === "object" && value !== null;

    const hashObj = (obj) => {
      // Uses JSON.stringify to generate a basic "hash"
      // Not appropriate for circular references...
      return JSON.stringify(obj, Object.keys(obj).sort());
    };

    const isDeepStrictEqual = (a, b) => {
      // Deep object comparing
      if (a === b) return true;

      if (isComplexType(a) && isComplexType(b)) {
        const aKeys = Object.keys(a).sort();
        const bKeys = Object.keys(b).sort();
        if (aKeys.length !== bKeys.length) return false;
        if (!aKeys.every((key, i) => key === bKeys[i])) return false;

        return aKeys.every((key) => isDeepStrictEqual(a[key], b[key]));
      }

      return false;
    };

    // Validations
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("Both arguments must be arrays.");
    }

    if (array1.length === 0 || array2.length === 0) {
      return [];
    }

    // step1: Hash array2 using reduce() method
    const hashMap = array2.reduce((map, item) => {
      const key = isComplexType(item) ? hashObj(item) : item;
      map.set(key, item);
      return map;
    }, new Map());

    // step2:  Filter array1
    const result = array1.filter((item) => {
      const key = isComplexType(item) ? hashObj(item) : item;
      if (!hashMap.has(key)) return false;

      const candidate = hashMap.get(key);
      return isComplexType(item)
        ? isDeepStrictEqual(item, candidate)
        : item === candidate;
    });

    // step3: Delete duplicates
    const seen = new Set();
    return result.filter((item) => {
      const key = isComplexType(item) ? JSON.stringify(item) : item;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  //---------------------
  //Compare methods for getting the union between two given arrays
  comparingArrayUnionMethods() {
    let t4 = new Task4();
    console.log("==================== COMPARING: Union array methods\n");
    //Iterating over the test cases object
    for (const { label, arrays } of unionTestCases) {
      //generating custom functions that fit `measureArrayPerformance`
      const customFn = (inputs) => t4.getArrayUnion(inputs[0], inputs[1]);
      const builtInFn = (inputs) =>
        this.getArrayUnionBuiltIn(inputs[0], inputs[1]);

      console.log(label); //label of the test case
      this.measureArrayPerformance(customFn, arrays, "🔧 Vanilla method");
      this.measureArrayPerformance(builtInFn, arrays, "🧰 Built-in method");
      console.log("\n");
    }
  }
  // Function to compute the union of two arrays, removing duplicates using built-in methods
  getArrayUnionBuiltIn(array1, array2) {
    // Validate that both inputs are arrays
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
      throw new Error("Both arguments must be arrays.");
    }

    // Map to track hashes of complex (non-primitive) objects
    const seenHashes = new Map();

    // Set to track seen primitive values (number, string, boolean, etc.)
    const seenPrimitives = new Set();

    // Array that will store the final union of unique values
    const result = [];

    // Helper: Returns true if the value is an object or array (but not null)
    function isComplexType(value) {
      return value !== null && typeof value === "object";
    }

    // Helper: Generates a consistent "hash" string from any object or array
    function hashObj(obj) {
      // If it's an array, recursively hash each element
      if (Array.isArray(obj)) {
        return JSON.stringify(
          obj.map((item) => (isComplexType(item) ? hashObj(item) : item))
        );
      }

      // For objects, sort keys to ensure consistent serialization
      const sortedKeys = Object.keys(obj).sort();
      const sortedObj = {};

      // Build a new object with sorted keys and recursively hash values
      for (const key of sortedKeys) {
        const val = obj[key];
        sortedObj[key] = isComplexType(val) ? hashObj(val) : val;
      }

      // Convert object to a JSON string (acts as a hash)
      return JSON.stringify(sortedObj);
    }

    // Helper: Deep strict equality check between any two values
    function isDeepStrictEqual(a, b) {
      // Fast path: identical primitives
      if (a === b) return true;

      // If not both objects/arrays, they differ
      if (!isComplexType(a) || !isComplexType(b)) return false;

      // Get and sort keys from both objects
      const aKeys = Object.keys(a).sort();
      const bKeys = Object.keys(b).sort();

      // If number of keys differs, they are not equal
      if (aKeys.length !== bKeys.length) return false;

      // If keys differ in order or content, not equal
      if (!aKeys.every((key, i) => key === bKeys[i])) return false;

      // Recursively check all key-value pairs
      return aKeys.every((key) => isDeepStrictEqual(a[key], b[key]));
    }

    // Helper: Adds an item to result array if it's unique
    function addItem(item) {
      // Skip null, undefined, or NaN (manually checked)
      if (
        item === null ||
        item === undefined ||
        (typeof item === "number" && Number.isNaN(item))
      ) {
        return;
      }

      if (isComplexType(item)) {
        // For objects or arrays, generate a hash string
        const hash = hashObj(item);

        if (seenHashes.has(hash)) {
          // Potential hash collision — compare deeply
          if (!isDeepStrictEqual(seenHashes.get(hash), item)) {
            const collisionHash = `collision-${hash}-${result.length}`;
            seenHashes.set(collisionHash, item);
            result.push(item);
          }
          // If deeply equal, skip (duplicate)
        } else {
          // New unique object — store and add to result
          seenHashes.set(hash, item);
          result.push(item);
        }
      } else {
        // Primitive value — check against Set
        if (!seenPrimitives.has(item)) {
          seenPrimitives.add(item);
          result.push(item);
        }
      }
    }

    // Process all elements from the first array
    array1.forEach(addItem);

    // Then from the second array
    array2.forEach(addItem);

    // Return the resulting array containing the unique union
    return result;
  }

  //---------------------
}
