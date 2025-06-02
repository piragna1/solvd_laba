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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addValues = addValues;
// Function to add two values with type checking
function addValues(a, b) {
    // if (typeof a === 'number' && typeof b === 'number') {
    //     return a + b;
    // } else if (typeof a === 'string' && typeof b === 'string') {
    //     return a + b;
    // } else if (typeof a === 'boolean' && typeof b === 'boolean') {
    //     return a || b; // Logical OR for booleans
    // } else if (Array.isArray(a) && Array.isArray(b)) {
    //     return [...a, ...b]; // Concatenate arrays
    // } else if (typeof a === 'object' && typeof b === 'object') {
    //     return { ...a, ...b }; // Merge objects
    // } else {
    //     throw new Error('Incompatible types for addition');
    // }
    if (typeof a === 'number') {
        if (typeof b === 'number') {
            return a + b;
        }
        else if (typeof b === 'string') {
            return a + parseFloat(b);
        }
        else if (typeof b === 'boolean') {
            return a + (b ? 1 : 0);
        }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (typeof a === 'string') {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (typeof a === 'boolean') {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (Array.isArray(a)) {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (typeof a === 'object') {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (typeof a === 'undefined') {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (typeof a === 'function') {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
    else if (a === null) {
        if (typeof b === 'number') { }
        else if (typeof b === 'string') { }
        else if (typeof b === 'boolean') { }
        else if (Array.isArray(b)) { }
        else if (typeof b === 'object') { }
        else if (typeof b === 'undefined') { }
        else if (typeof b === 'function') { }
        else if (b === null) { }
    }
}
console.log(1 + (true ? 1 : 0)); // 2
