"use strict";

/**
 * The Task class extends the String prototype with arithmetic methods: plus, minus, divide, and multiply.
 * These methods allow performing arithmetic operations directly on string instances, treating them as numbers.
 *
 * Methods added to String.prototype:
 * - plus(str): Returns the sum of the string and the argument as strings representing numbers.
 * - minus(str): Returns the difference.
 * - divide(str): Returns the integer division result (floored).
 * - multiply(str): Returns the product.
 *
 * If either operand is not a valid number, an error message is returned.
 * Division by zero returns a specific error message.
 */
class Task {
    constructor() {
        this.extendStringPrototype();
    }

    extendStringPrototype() {
        this.addPlusMethod();
        this.addMinusMethod();
        this.addDivideMethod();
        this.addMultiplyMethod();
    }

    addPlusMethod() {
        String.prototype.plus = function (str) {
            const a = Number(this);
            const b = Number(str);
            if (isNaN(a) || isNaN(b)) {
                return `Invalid number/s: ${isNaN(a) ? this : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
            }
            return (a + b).toString();
        };
    }

    addMinusMethod() {
        String.prototype.minus = function (str) {
            const a = Number(this);
            const b = Number(str);
            if (isNaN(a) || isNaN(b)) {
                return `Invalid number/s: ${isNaN(a) ? this : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
            }
            return (a - b).toString();
        };
    }

    addDivideMethod() {
        String.prototype.divide = function (str) {
            const a = Number(this);
            const b = Number(str);
            if (b === 0) {
                return "Division by zero is not allowed.";
            }
            if (isNaN(a) || isNaN(b)) {
                return `Invalid number/s: ${isNaN(a) ? this : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
            }
            return Math.floor(a / b).toString(); // Redondear hacia abajo para mantener números enteros
        };
    }

    addMultiplyMethod() {
        String.prototype.multiply = function (str) {
            const a = Number(this);
            const b = Number(str);
            if (isNaN(a) || isNaN(b)) {
                return `Invalid number/s: ${isNaN(a) ? this : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
            }
            return (a * b).toString();
        };
    }
}

module.exports = Task;
