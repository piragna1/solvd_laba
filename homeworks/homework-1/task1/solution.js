"use strict";

class Task1 {
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

module.exports = Task1;
