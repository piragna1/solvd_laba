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
// Function to add two values with type checking
function addValues(a, b) {
  if (typeof a === "number") {
    return addToNumber(a, b);
  } else if (typeof a === "string") {
    if (typeof b === "number" || typeof b === "string") {
      return a + b;
    } else if (typeof b === "undefined" || b === null) {
      return a;
    } else if (b instanceof String) {
      return a + b.valueOf();
    } else {
      throw new Error("Incompatible types for addition");
    }
  } else if (typeof a === "boolean") {
    if (typeof b === "boolean") {
      return a && b;
    } else if (typeof b === "undefined" || b === null) {
      return a;
    } else if (b instanceof Boolean) {
      return a && b.valueOf();
    } else {
      throw new Error("Incompatible types for addition");
    }
  } else if (Array.isArray(a)) {
    if (Array.isArray(b)) {
      return a.concat(b);
    } else if (typeof b !== "undefined" && b !== null) {
      return a.concat([b]);
    } else {
      return a;
    }
  } else if (typeof a === "object" && a !== null) {
    if (typeof b === "object" && b !== null && !Array.isArray(b)) {
      return Object.assign({}, a, b);
    } else if (typeof b === "undefined" || b === null) {
      return a;
    } else {
      throw new Error("Incompatible types for addition");
    }
  } else if (typeof a === "undefined" || a === null) {
    return b;
  } else {
    throw new Error("Unsupported type");
  }
}
// Additional functions can be implemented here as needed
function addToNumber(a,value) {
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

// Export for Node.js/CommonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { addValues };
}
