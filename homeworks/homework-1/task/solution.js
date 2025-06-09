"use strict";

class Task {
  /**
   * Adds the value `b` to the value `a` based on the type of `a`.
   * Delegates to specific methods depending on whether `a` is a number, string, boolean, array, or object.
   * If `a` is undefined or null, returns `b`.
   * Throws an error for unsupported types.
   *
   * @param {*} a - The base value to which `b` will be added. Can be a number, string, boolean, array, object, undefined, or null.
   * @param {*} b - The value to add to `a`.
   * @returns {*} The result of adding `b` to `a` according to the type of `a`.
   * @throws {Error} If the type of `a` is unsupported.
   */
  addValues(a, b) {
    if (typeof a === "number") {
      return this.addToNumber(a, b);
    } else if (typeof a === "string") {
      return this.addToString(a, b);
    } else if (typeof a === "boolean") {
      return this.addToBoolean(a, b);
    } else if (Array.isArray(a)) {
      return this.addToArray(a, b);
    } else if (typeof a === "object" && a !== null) {
      return this.addToObject(a, b);
    } else if (typeof a === "undefined" || a === null) {
      return b;
    } else {
      throw new Error("Unsupported type");
    }
  }

  /**
   * Adds a value to a number, handling different types for the value parameter.
   *
   * @param {number} a - The base number to add to.
   * @param {number|string|Number|null|undefined} value - The value to add. Can be a number, a numeric string, a Number object, null, or undefined.
   * @returns {number} The result of adding the value to the base number.
   * @throws {Error} If value is a non-numeric string or an incompatible type.
   */
  addToNumber(a, value) {
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
   *
   * @param {string} a - The base string to which the value will be added.
   * @param {number|string|String|null|undefined} value - The value to add. Can be a number, string, String object, null, or undefined.
   * @returns {string} The concatenated string if value is a number, string, or String object; otherwise returns the original string.
   * @throws {Error} If the value is of an incompatible type for addition.
   */
  addToString(a, value) {
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
   * Combines a boolean value `a` with another value `value` using logical AND, 
   * handling various types safely.
   *
   * @param {boolean} a - The base boolean value.
   * @param {*} value - The value to combine with `a`. Can be a boolean, Boolean object, undefined, or null.
   * @returns {boolean} The result of logical AND between `a` and `value`, or `a` if `value` is undefined or null.
   * @throws {Error} If `value` is not a boolean, Boolean object, undefined, or null.
   */
  addToBoolean(a, value) {
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
   * Adds a value or an array of values to the end of the given array.
   *
   * @param {Array} a - The original array to which the value(s) will be added.
   * @param {*} value - The value or array of values to add. If an array, its elements are concatenated. If undefined or null, the original array is returned.
   * @returns {Array} A new array with the value(s) added, or the original array if value is undefined or null.
   */
  addToArray(a, value) {
    if (Array.isArray(value)) {
      return a.concat(value);
    } else if (typeof value !== "undefined" && value !== null) {
      return a.concat([value]);
    } else {
      return a;
    }
  }

  /**
   * Adds properties from the `value` object to the object `a` and returns a new object.
   * If `value` is not a non-null object or is an array, throws an error.
   * If `value` is `undefined` or `null`, returns the original object `a`.
   *
   * @param {Object} a - The target object to which properties will be added.
   * @param {*} value - The value to add to the object. Must be a non-null object (not an array) or `undefined`/`null`.
   * @returns {Object} A new object with properties from both `a` and `value`, or the original object if `value` is `undefined` or `null`.
   * @throws {Error} If `value` is not a non-null object or is an array.
   */
  addToObject(a, value) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return Object.assign({}, a, value);
    } else if (typeof value === "undefined" || value === null) {
      return a;
    } else {
      throw new Error("Incompatible types for addition");
    }
  }

  /**
   * Converts a given value to its string representation.
   *
   * - If the value is a string, returns it as is.
   * - If the value is a number, boolean, null, or undefined, returns its string representation.
   * - If the value is an array or object, returns its JSON string representation.
   * - Throws an error for unsupported types.
   *
   * @param {*} value - The value to stringify.
   * @returns {string} The stringified representation of the value.
   * @throws {Error} If the value type is unsupported for stringification.
   */
  stringifyValue(value) {
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

  /**
   * Inverts a boolean value.
   *
   * @param {boolean} value - The boolean value to invert.
   * @returns {boolean} The inverted boolean value.
   * @throws {Error} Throws an error if the argument is not a boolean.
   */
  invertBoolean(value) {
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
  convertToNumber(value) {
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

  /**
   * Coerces the given value to the specified type.
   *
   * @param {*} value - The value to be coerced.
   * @param {"string"|"number"|"boolean"|"object"|"array"} type - The target type to coerce the value to.
   * @returns {*} The value coerced to the specified type.
   * @throws {Error} If the specified type is unsupported.
   */
  coerceToType(value, type) {
    if (type === "string") {
      return this.stringifyValue(value);
    } else if (type === "number") {
      return this.convertToNumber(value);
    } else if (type === "boolean") {
      return this.convertToBoolean(value);
    } else if (type === "object") {
      return this.convertToObject(value);
    } else if (type === "array") {
      return this.convertToArray(value);
    } else {
      throw new Error("Unsupported type for coercion");
    }
  }

  /**
   * Converts a given value to a boolean based on its type and content.
   *
   * - If the value is already a boolean, returns it as is.
   * - If the value is `undefined` or `null`, returns `false`.
   * - If the value is a string, returns `true` for "true" or "1" (case-insensitive), `false` for "false" or "0", otherwise throws an error.
   * - If the value is a number, returns `true` for 1, `false` for 0, otherwise throws an error.
   * - If the value is an object, returns `false` if `null`, otherwise `true`.
   * - If the value is a function, calls the function and returns its boolean result if it is strictly `true` or `false`, otherwise throws an error.
   * - Throws an error for unsupported types or values that cannot be coerced to boolean.
   *
   * @param {*} value - The value to convert to boolean.
   * @returns {boolean} The boolean representation of the input value.
   * @throws {Error} If the value cannot be coerced to a boolean.
   */
  convertToBoolean(value) {
    if (value === true || value === false) {
      return value;
    } else if (typeof value === undefined || value === null) {
      return false;
    } else if (typeof value === "string") {
      if (value.toLowerCase() === "true" || value === "1") {
        return true;
      } else if (value.toLowerCase() === "false" || value === "0") {
        return false;
      } else {
        throw new Error("Cannot coerce string to boolean");
      }
    } else if (typeof value === "number") {
      if (value === 0) {
        return false;
      } else if (value === 1) {
        return true;
      } else {
        throw new Error("Cannot coerce number to boolean");
      }
    } else if (typeof value === "object") {
      if (value === null) {
        return false;
      } else {
        return true;
      }
    } else if (typeof value === "function") {
      if (value.call() === true) {
        return true;
      } else if (value.call() === false) {
        return false;
      } else {
        throw new Error("Cannot coerce function to boolean");
      }
    } else {
      throw new Error("Unsupported type for coercion to boolean");
    }
  }

  /**
   * Converts the given value into an object with a single property 'value'.
   *
   * @param {*} value - The value to be wrapped in an object.
   * @returns {{ value: * }} An object containing the provided value.
   */
  convertToObject(value) {
    return { value: value };
  }

  /**
   * Converts the given value to an array.
   * - If the value is already an array, it is returned as-is.
   * - If the value is `undefined` or `null`, an empty array is returned.
   * - Otherwise, the value is wrapped in a new array.
   *
   * @param {*} value - The value to convert to an array.
   * @returns {Array} The resulting array.
   */
  convertToArray(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (typeof value === "undefined" || value === null) {
      return [];
    } else {
      return [value];
    }
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Task;
}