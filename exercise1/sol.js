"use strict";
/**Task: Perform arithmetic operations on strings without relying on bigint or arithmetic libraries.
 * The operations should function as string functions, considering only positive integers
 * (you can avoid negative numbers, all numbers will be positive and integer).
 * `String.plus(string) => string`
 * `String.minus(string) => string`
 * `String.divide(string) => string`
 * `String.multiply(string) => string`
 * */
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.plus = function (str) {
    var ret = "";
    var a = Number(this.toString());
    var b = Number(str);
    if (isNaN(a))
        ret += ("Invalid number/s: " + this.toString());
    if (isNaN(b)) {
        if (ret.length == 0) {
            ret += "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    }
    return (ret.length > 0) ? ret : (a + b).toString();
};
String.prototype.minus = function (str) {
    var ret = "";
    var a = Number(this.toString());
    var b = Number(str);
    if (isNaN(a))
        ret += ("Invalid number/s: " + this.toString());
    if (isNaN(b)) {
        if (ret.length == 0) {
            ret += "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    }
    return (ret.length > 0) ? ret : (a - b).toString();
};
String.prototype.divide = function (str) {
    var ret = "";
    var a = Number(this.toString());
    var b = Number(str);
    if (b === 0) {
        ret += "Division by zero is not allowed.";
        return ret;
    }
    if (isNaN(a))
        ret += ("Invalid number/s: " + this.toString());
    if (isNaN(b)) {
        if (ret.length == 0) {
            ret += "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    }
    return (ret.length > 0) ? ret : (a / b).toString();
};
String.prototype.multiply = function (str) {
    var ret = "";
    var a = Number(this.toString());
    var b = Number(str);
    if (isNaN(a))
        ret += "Invalid number/s: " + this.toString();
    if (isNaN(b)) {
        if (ret.length == 0) {
            ret += "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    }
    return (ret.length > 0) ? ret : (a * b).toString();
};
console.log("1".plus("2")); // "3"
console.log("10".minus("2")); // "8"
console.log("10".divide("2")); // "5"
console.log("10".multiply("2")); // "20"
console.log("10".plus("abc")); // "Invalid number: 10" and "NaN"
console.log("1213l1231".multiply("abc")); // "Invalid number: 10" and "NaN"
console.log("abc".minus("2")); // "Invalid number: NaN" and "NaN"
console.log("1231231qa".divide("2")); // "Invalid number: NaN" and "NaN"
console.log("1231231".multiply("2")); // "2462462"
