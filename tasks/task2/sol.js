"use strict";
/**
 * # Homework 2
 *
 * ## Task
 *
 * Create a JavaScript library that provides advanced *data transformation* functions.
 * The library should include the following features:
 *
 * - **addValues**:
 *   Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments.
 *   The function should return the result of the addition. If the addition is not possible, it should throw an error.
 *
 * - **stringifyValue**:
 *   Accepts a single argument of any type and converts it to a string representation.
 *   For objects and arrays, use `JSON.stringify()` for serialization.
 *   For other types, use the appropriate built-in methods or operations to convert them to strings.
 *
 * - **invertBoolean**:
 *   Accepts a single boolean argument and returns its inverted value.
 *   If the argument is not a boolean, it should throw an error.
 *
 * - **convertToNumber**:
 *   Accepts a single argument of any type and attempts to convert it to a number.
 *   For strings, use `parseFloat()` or `parseInt()` for conversion.
 *   For other types, use appropriate operations or functions to perform the conversion.
 *   If the conversion is not possible, it should throw an error.
 *
 * - **coerceToType**:
 *   Accepts two arguments: value and type.
 *   It attempts to convert the value to the specified type using type coercion.
 *   The function should return the coerced value if successful.
 *   If the coercion is not possible, it should throw an error.
 *
 * Implement additional functions of your choice that demonstrate advanced type conversion scenarios
 * or cater to specific use cases related to primitive types.
 * You are encouraged to explore complex scenarios and push the limits of type conversion.
 */
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.addValues = addValues;

/**
 * Adds two values together based on their types.
 * @param {any} a - The first value to add.
 * @param {any} b - The second value to add.
 * @returns {any} - The result of the addition.
 * @throws {Error} - Throws an error if the addition is not possible due to incompatible types.
 *
 * This function handles various types including:
 * - Numbers: Adds two numbers or a number and a numeric string.
 * - Strings: Concatenates two strings or a string and a number.
 * - Booleans: Performs a logical AND operation between two booleans.
 * - Arrays: Concatenates two arrays or adds a single value to an array.
 * - Objects: Merges properties of two objects.
 * - Undefined or null: Returns the other value if one is undefined or null.
 *
 */
function addValues(a, b) {
  if (typeof a === "number") {
    return addToNumber(a, b);
  } else if (typeof a === "string") {
    return addToString(a, b);
  } else if (typeof a === "boolean") {
    return addToBoolean(a, b);
  } else if (Array.isArray(a)) {
    return addToArray(a, b);
  } else if (typeof a === "object" && a !== null) {
    return addToObject(a, b);
  } else if (typeof a === "undefined" || a === null) {
    return b;
  } else {
    throw new Error("Unsupported type");
  }
}

// Additional functions implemented:
/**
 * Adds a value to a given number, handling different types for the value.
 *
 * @param {number} a - The base number to add to.
 * @param {number|string|Number|null|undefined} value - The value to add. Can be a number, a numeric string, a Number object, null, or undefined.
 * @returns {number} The result of the addition.
 * @throws {Error} If value is a non-numeric string or an incompatible type.
 */
function addToNumber(a, value) {
  if (typeof value === "number") {
    return a + value;
  } else if (typeof value === "string") {
    if (isNaN(Number(value))) throw new Error("Cannot add number and string");
    return a + parseFloat(value);
  } else if (typeof value === "undefined" || value === null) {
    return a;
  } else if (value instanceof Number) {
    return a + value.valueOf();
  } else {
    throw new Error("Incompatible types for addition");
  }
}

/**
 * Adds a value to a string, handling numbers, strings, and String objects.
 * If the value is undefined or null, returns the original string.
 * Throws an error for incompatible types.
 *
 * @param {string} a - The base string to add to.
 * @param {string|number|String|null|undefined} value - The value to add to the string.
 * @returns {string} The result of the addition.
 * @throws {Error} If the value is of an incompatible type.
 */
function addToString(a, value) {
  if (typeof value === "number" || typeof value === "string") {
    return a + value;
  } else if (typeof value === "undefined" || value === null) {
    return a;
  } else if (value instanceof String) {
    return a + value.valueOf();
  } else {
    throw new Error("Incompatible types for addition");
  }
}

/**
 * Performs a logical AND operation between a boolean value `a` and another value.
 * - If `value` is a boolean or a Boolean object, returns the result of `a && value`.
 * - If `value` is `undefined` or `null`, returns `a`.
 * - Throws an error if `value` is of an incompatible type.
 *
 * @param {boolean} a - The base boolean value.
 * @param {*} value - The value to combine with `a`. Can be a boolean, Boolean object, undefined, or null.
 * @returns {boolean} The result of the logical AND operation or the original value of `a`.
 * @throws {Error} If `value` is of an incompatible type.
 */
function addToBoolean(a, value) {
  if (typeof value === "boolean") {
    return a && value;
  } else if (typeof value === "undefined" || value === null) {
    return a;
  } else if (value instanceof Boolean) {
    return a && value.valueOf();
  } else {
    throw new Error("Incompatible types for addition");
  }
}

/**
 * Adds a value or an array of values to an existing array.
 *
 * @param {Array} a - The original array to which the value(s) will be added.
 * @param {*} value - The value or array of values to add. If an array, its elements are concatenated. If a single value (not undefined or null), it is added as an element.
 * @returns {Array} A new array with the value(s) added, or the original array if value is undefined or null.
 */
function addToArray(a, value) {
  if (Array.isArray(value)) {
    return a.concat(value);
  } else if (typeof value !== "undefined" && value !== null) {
    return a.concat([value]);
  } else {
    return a;
  }
}

/**
 * Merges the properties of the given object `value` into object `a` and returns a new object.
 * If `value` is not a non-null object (excluding arrays), throws an error unless it is `undefined` or `null`,
 * in which case it returns the original object `a`.
 *
 * @param {Object} a - The target object to which properties will be added.
 * @param {Object|null|undefined} value - The object whose properties are to be added, or `null`/`undefined`.
 * @returns {Object} A new object containing properties from both `a` and `value`.
 * @throws {Error} If `value` is not an object, `null`, or `undefined`.
 */
function addToObject(a, value) {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return Object.assign({}, a, value);
  } else if (typeof value === "undefined" || value === null) {
    return a;
  } else {
    throw new Error("Incompatible types for addition");
  }
}
/**
 * Converts a value to its string representation.
 * - For objects and arrays, uses JSON.stringify().
 * - For other types, uses the appropriate built-in methods or operations.
 *
 * @param {*} value - The value to convert to a string.
 * @returns {string} The string representation of the value.
 */
function stringifyValue(value) {
  if (typeof value === "string") {
    return value;
  } else if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null ||
    typeof value === "undefined"
  ) {
    return String(value);
  } else if (Array.isArray(value) || typeof value === "object") {
    return JSON.stringify(value);
  } else {
    throw new Error("Unsupported type for stringification");
  }
}

// **invertBoolean**:
//  *   Accepts a single boolean argument and returns its inverted value.
//  *   If the argument is not a boolean, it should throw an error.
//  *
function invertBoolean(value) {
  if (typeof value === "boolean") {
    return !value;
  } else {
    throw new Error("Argument must be a boolean");
  }
}

/**
 * Converts the given value to a number.
 *
 * @param {number|string|boolean} value - The value to convert to a number.
 * @returns {number} The numeric representation of the input value.
 * @throws {Error} If the value is a string that cannot be converted to a number, or if the type is unsupported.
 */
function convertToNumber(value) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    const num = parseFloat(value);
    if (isNaN(num)) throw new Error("Cannot convert string to number");
    return num;
  } else if (typeof value === "boolean") {
    return value ? 1 : 0;
  } else {
    throw new Error("Unsupported type for conversion to number");
  }
}

//  * - **coerceToType**:
//  *   Accepts two arguments: value and type.
//  *   It attempts to convert the value to the specified type using type coercion.
//  *   The function should return the coerced value if successful.
//  *   If the coercion is not possible, it should throw an error.
function coerceToType(value, type) {
  if (tpye === "string") {
    return stringifyValue(value);
  } else if (type === "number") {
    return convertToNumber(value);
  }
  //Convert to boolean
  else if (type === "boolean") {
    return convertToBoolean(value);
  } else if (type === "object") {

  } else if (type === "array") {
  } else {
    throw new Error("Unsupported type for coercion");
  }
}

// Aditional function for convert to boolean
/**
 * Converts a given value to a boolean, handling various types explicitly.
 *
 * @param {*} value - The value to convert to boolean. Supported types: boolean, string, number, object, function, null, and undefined.
 * @returns {boolean} The boolean representation of the input value.
 * @throws {Error} If the value cannot be coerced to a boolean or is of an unsupported type.
 *
 * @example
 * convertToBoolean(true); // returns true
 * convertToBoolean("false"); // returns false
 * convertToBoolean(1); // returns true
 * convertToBoolean({}); // returns true
 * convertToBoolean(() => true); // returns true
 */
function convertToBoolean(value) {
  // boolean case
  if (value === true || value === false) {
    return value;
  }
  // null/undefined case
  else if (typeof value === undefined || value === null) {
    return false;
  }
  // string case
  else if (typeof value === "string") {
    if (value.toLowerCase() === "true" || value === "1") {
      return true;
    } else if (value.toLowerCase() === "false" || value === "0") {
      return false;
    } else {
      throw new Error("Cannot coerce string to boolean");
    }
  }
    // number case
    else if (typeof value === "number") {
        if (value === 0) {
        return false;
        } else if (value === 1) {
        return true;
        } else {
        throw new Error("Cannot coerce number to boolean");
        }
    }
    // object case
    else if (typeof value === "object") {
        if (value === null) {
        return false;
        } else {
        return true; // Non-null objects are truthy
        }
    }
    // function case
    else if (typeof value === "function") {
        if (value.call() === true) {
        return true;
        }
        else if (value.call() === false) {
        return false;
        }
        else {
        throw new Error("Cannot coerce function to boolean");
        }
    }
    // other types (e.g., symbol, bigint)
    else {
        throw new Error("Unsupported type for coercion to boolean");
    }
}

function convertToObject(value){
    
}

// Export for Node.js/CommonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { addValues };
}
