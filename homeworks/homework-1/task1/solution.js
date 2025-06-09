"use strict";
/**
 * Task: Perform arithmetic operations on strings without relying on bigint or arithmetic libraries.
 * The operations should function as string functions, considering only positive integers.
 * Implemented as a class with methods: plus, minus, divide, multiply.
 */
Object.defineProperty(exports, "__esModule", { value: true });

class StringArithmetic {
    constructor(str) {
        this.value = str;
    }

    plus(str) {
        const a = Number(this.value);
        const b = Number(str);
        if (isNaN(a) || isNaN(b)) {
            return `Invalid number/s: ${isNaN(a) ? this.value : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
        }
        return (a + b).toString();
    }

    minus(str) {
        const a = Number(this.value);
        const b = Number(str);
        if (isNaN(a) || isNaN(b)) {
            return `Invalid number/s: ${isNaN(a) ? this.value : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
        }
        return (a - b).toString();
    }

    divide(str) {
        const a = Number(this.value);
        const b = Number(str);
        if (b === 0) {
            return "Division by zero is not allowed.";
        }
        if (isNaN(a) || isNaN(b)) {
            return `Invalid number/s: ${isNaN(a) ? this.value : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
        }
        return (a / b).toString();
    }

    multiply(str) {
        const a = Number(this.value);
        const b = Number(str);
        if (isNaN(a) || isNaN(b)) {
            return `Invalid number/s: ${isNaN(a) ? this.value : ''}${isNaN(a) && isNaN(b) ? ', ' : ''}${isNaN(b) ? str : ''}`;
        }
        return (a * b).toString();
    }
}

// Example usage:
const sa1 = new StringArithmetic("1");
console.log(sa1.plus("2")); // "3"

const sa2 = new StringArithmetic("10");
console.log(sa2.minus("2")); // "8"
console.log(sa2.divide("2")); // "5"
console.log(sa2.multiply("2")); // "20"

const sa3 = new StringArithmetic("10");
console.log(sa3.plus("abc")); // "Invalid number/s: abc"

const sa4 = new StringArithmetic("1213l1231");
console.log(sa4.multiply("abc")); // "Invalid number/s: 1213l1231, abc"

const sa5 = new StringArithmetic("abc");
console.log(sa5.minus("2")); // "Invalid number/s: abc"

const sa6 = new StringArithmetic("1231231qa");
console.log(sa6.divide("2")); // "Invalid number/s: 1231231qa"

const sa7 = new StringArithmetic("1231231");
console.log(sa7.multiply("2")); // "2462462"