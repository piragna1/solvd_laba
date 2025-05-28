/**Task: Perform arithmetic operations on strings without relying on bigint or arithmetic libraries. 
 * The operations should function as string functions, considering only positive integers 
 * (you can avoid negative numbers, all numbers will be positive and integer).
 * `String.plus(string) => string`
 * `String.minus(string) => string`
 * `String.divide(string) => string`
 * `String.multiply(string) => string`
 * */

export{};

// Extend the String prototype to include arithmetic methods

declare global {
  interface String {
    plus: (string: string) => string;
    minus: (string: string) => string;
    divide: (string: string) => string;
    multiply: (string: string) => string;
  }
}

// Implement the arithmetic methods for the String prototype
// Note: The methods will return a string representation of the result or an error message if the input is invalid.
/**
 * The metodology consists of:
 * 1. Converting the string to a number,
 * 2. Checking if the conversion is valid (not NaN, division by zero),
 * 3. Performing the arithmetic operation,
 * 4. Returning the result as a string or an error message.
 */

// Addition
String.prototype.plus = function (str: string): string {
    let ret = "";
    let a = Number(this.toString());
    let b = Number(str);
    if ( isNaN(a)) ret+=("Invalid number/s: " + this.toString());
    if (isNaN(b)){
        if (ret.length == 0) {
            ret+= "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    } 
    return (ret.length>0)? ret : (a + b).toString();
}

// Subtraction
String.prototype.minus = function (str: string): string {
    let ret = ""; 
    let a = Number(this.toString());
    let b = Number(str);
    if ( isNaN(a)) ret+=("Invalid number/s: " + this.toString());
    if (isNaN(b)){
        if (ret.length==0) {
            ret+= "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    } 
    return (ret.length > 0) ? ret : (a - b).toString();
}
 
// Division
String.prototype.divide = function (str: string): string {
    let ret = "";
    let a = Number(this.toString());
    let b = Number(str);
    if (b === 0) {
        ret += "Division by zero is not allowed.";
        return ret;
    }
    if ( isNaN(a)) ret+=("Invalid number/s: " + this.toString());
    if (isNaN(b)){
        if (ret.length==0) {
            ret+= "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    } 
    return (ret.length > 0) ? ret : (a / b).toString();
}

// Multiplication
String.prototype.multiply = function (str: string): string {
    let ret = "";
    let a = Number(this.toString());
    let b = Number(str);
    if ( isNaN(a)) ret += "Invalid number/s: " + this.toString();
    if (isNaN(b)){
        if (ret.length==0) {
            ret+= "Invalid number/s: " + str;
        }
        else {
            ret += ", " + str;
        }
        return ret;
    } 
    return (ret.length> 0) ? ret : (a * b).toString();
}

console . log ("1".plus("2")); // "3"
console . log ("10".minus("2")); // "8"
console . log ("10".divide("2")); // "5"
console . log ("10".multiply("2")); // "20"
console . log ("10".plus("abc")); // "Invalid number: 10" and "NaN"
console . log ("1213l1231".multiply("abc")); // "Invalid number: 10" and "NaN"
console . log ("abc".minus("2")); // "Invalid number: NaN" and "NaN"
console . log ("1231231qa".divide("2")); // "Invalid number: NaN" and "NaN"
console . log ("1231231".multiply("2")); // "2462462"