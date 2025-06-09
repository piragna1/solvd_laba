"use strict";

class Task {
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

  addToArray(a, value) {
    if (Array.isArray(value)) {
      return a.concat(value);
    } else if (typeof value !== "undefined" && value !== null) {
      return a.concat([value]);
    } else {
      return a;
    }
  }

  addToObject(a, value) {
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      return Object.assign({}, a, value);
    } else if (typeof value === "undefined" || value === null) {
      return a;
    } else {
      throw new Error("Incompatible types for addition");
    }
  }

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

  invertBoolean(value) {
    if (typeof value === "boolean") {
      return !value;
    } else {
      throw new Error("Argument must be a boolean");
    }
  }

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

  convertToObject(value) {
    return { value: value };
  }

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