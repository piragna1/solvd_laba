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


// Function to add two values with type checking
export function addValues(a: any, b: any): any {
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
            if (isNaN(Number(b))) throw new Error('Cannot add number and string');
            return a + parseFloat(b);
        }
        else if (typeof b === 'boolean') {
            throw new Error('Cannot add number and boolean');
        }
        else if (Array.isArray(b)) {
            throw new Error('Cannot add number and array');
        }
        else if (typeof b === 'object') {
            if (b === null) {
                return a;
            }
            else if (b instanceof Number) {
                return a + b.valueOf();
            }
            else {
                throw new Error('Incompatible types for addition');
            }
        }
        else if (typeof b === 'undefined') {
            return a;
        }
        else if (typeof b === 'function') {
            throw new Error('Cannot add number and function');
        }
        else if (b === null) {
            return a;
        }
    }
    else if (typeof a === 'string') {

        if (typeof b === 'number') {
            return a + b;
        }
        else if (typeof b === 'string') {
            return a + b;
        }
        else if (typeof b === 'boolean') {
            throw new Error('Cannot add string and boolean');
        }
        else if (Array.isArray(b)) {
            throw new Error('Cannot add string and array');
        }
        else if (typeof b === 'object') {
            if (b === null) {
                return a;
            }
            else if (b instanceof String) {
                return a + b.valueOf();
            }
            else {
                throw new Error('Incompatible types for addition');
            }
        }
        else if (typeof b === 'undefined') {
            return a;
        }
        else if (typeof b === 'function') {
            throw new Error('Cannot add string and function');
        }
        else if (b === null) {
            return a;
        }
    }
    else if (typeof a === 'boolean') {

        if (typeof b === 'number') {
            throw new Error('Cannot add boolean and number');
        }
        else if (typeof b === 'string') {
            throw new Error('Cannot add boolean and string');
        }
        else if (typeof b === 'boolean') {
            return a && b; // Logical AND for booleans
        }
        else if (Array.isArray(b)) {
            throw new Error('Cannot add boolean and array');
        }
        else if (typeof b === 'object') {
            if (b === null) {
                return a;
            }
            else if (b instanceof Boolean) {
                return a && b.valueOf(); // Logical AND for booleans
            }
            else {
                throw new Error('Incompatible types for addition');
            }
        }
        else if (typeof b === 'undefined') {
            return a;
        }
        else if (typeof b === 'function') {
            throw new Error('Cannot add boolean and function');
        }
        else if (b === null) {
            return a;

        }
    }
    else if (Array.isArray(a)) {

        if (typeof b === 'number') {
            throw new Error('Cannot add array and number');
        }
        else if (typeof b === 'string') {
            throw new Error('Cannot add array and string');
        }
        else if (typeof b === 'boolean') {
            throw new Error('Cannot add array and boolean');
        }
        else if (Array.isArray(b)) {
            return [...a, ...b]; // Concatenate arrays
        }
        else if (typeof b === 'object') {
            if (b === null) {
                return a;
            }
            else if (b instanceof Array) {
                return [...a, ...b]; // Concatenate arrays
            }
            else {
                throw new Error('Incompatible types for addition');
            }
        }
        else if (typeof b === 'undefined') {
            return a;
        }
        else if (typeof b === 'function') {
            throw new Error('Cannot add array and function');
        }
        else if (b === null) {
            return a;
        }
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
        if (typeof b === 'number') {
            return b; // If a is undefined, return b
        }
        else if (typeof b === 'string') {
            return b; // If a is undefined, return b
        }
        else if (typeof b === 'boolean') {
            return b; // If a is undefined, return b
        }
        else if (Array.isArray(b)) {
            return b; // If a is undefined, return b
        }
        else if (typeof b === 'object') {
            return b; // If a is undefined, return b
        }
        else if (typeof b === 'undefined') {
            return undefined; // If both are undefined, return undefined
        }
        else if (typeof b === 'function') {
            return b; // If a is undefined, return b
        }
        else if (b === null) {
            return null; // If a is undefined, return b
        }
    }
    else if (typeof a === 'function') {

        if (typeof b === 'number') {
            return a.call(b); // Call function a with b as argument
        }
        else if (typeof b === 'string') {
            return a.call(b); // Call function a with b as argument
        }
        else if (typeof b === 'boolean') {
            return a.call(b); // Call function a with b as argument
        }
        else if (Array.isArray(b)) {
            return a.apply(null, b); // Call function a with array b as arguments
        }
        else if (typeof b === 'object') {
            return a.call(b); // Call function a with b as context
        }
        else if (typeof b === 'undefined') {
            return a(); // Call function a with no arguments
        }
        else if (typeof b === 'function') {
            return a.call(b); // Call function a with b as context
        }
        else if (b === null) {
            return a.call(null); // Call function a with null as context
        }
    }
    else if (a === null) {

        if (typeof b === 'number') {
            return b; // If a is null, return b
        }
    }
    else if (typeof b === 'string') {
        return b; // If a is null, return b
    }
    else if (typeof b === 'boolean') {
        return b; // If a is null, return b
    }
    else if (Array.isArray(b)) {
        return b; // If a is null, return b
    }
    else if (typeof b === 'object') {
        return b; // If a is null, return b
    }
    else if (typeof b === 'undefined') {
        return null; // If a is null, return null
    }
    else if (typeof b === 'function') {
        return b.call(null); // Call function b with null as context
    }
    else if (b === null) {
        return null; // If both are null, return null
    }
}


console.log(1 + (true ? 1 : 0)); // 2