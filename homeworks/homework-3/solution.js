/**
 * # Homework 3
### **Task 2: Function Composition and Point-Free Style**

1. Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".
2. Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.
3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.

### **Task 3: Closures and Higher-Order Functions**

1. Create a function called `createCounter` that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.
2. Implement a higher-order function called `repeatFunction` that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.

### **Task 4: Recursion and Tail Call Optimization**

1. Implement a recursive function called `calculateFactorial` that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.
2. Create a recursive function called `power` that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

### **Task 5: Lazy Evaluation and Generators (do not use yield)**

1. Implement a lazy evaluation function called `lazyMap` that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.
2. Create a lazy generator function called `fibonacciGenerator` that generates Fibonacci numbers one at a time using lazy evaluation. 
*/

// ### **Task 1: Immutability and Pure Functions**
/**
 * Calculates the discounted price for each product in the given array.
 *
 * @param {Array<{ price: number, [key: string]: any }>} products - Array of product objects, each containing a price property.
 * @param {number} discountPercentage - The discount percentage to apply to each product's price.
 * @returns {Array<{ price: number, [key: string]: any }>} A new array of products with updated prices after applying the discount.
 */
function calculateDiscountedPrice(products, discountPercentage) {
  return products.map((product) => ({
    ...product,
    price: product.price - (product.price * discountPercentage) / 100,
  }));
}
/**
 * Calculates the total price of all products in the given array.
 *
 * @param {Array<{price: number}>} products - An array of product objects, each containing a price property.
 * @returns {number} The sum of all product prices.
 */
function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

/**### **Task 2: Function Composition and Point-Free Style**
    1. Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".
    2. Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.
    3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.
*/
//1.
/**
 * Returns the full name of a person by concatenating their first and last names.
 *
 * @param {Object} person - The person object.
 * @param {string} person.firstName - The first name of the person.
 * @param {string} person.lastName - The last name of the person.
 * @returns {string} The full name of the person.
 */
function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}
//2.
/**
 * A sample text string containing multiple sentences, used for demonstration or testing purposes.
 * The string consists of several sentences with various words and punctuation.
 * @type {string}
 */
let inputString =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.";
/**
 * Returns an array of unique words from the given text.
 * A word is considered unique if it appears exactly once in the text (case-insensitive).
 *
 * @param {string} text - The input text to extract unique words from.
 * @returns {string[]} An array containing words that appear only once in the text.
 */
let getUniqueWords = (text) => {
  let words = text.toLowerCase().match(/\b\w+\b/g) || [];
  return words.filter(
    (word, _, arr) => arr.indexOf(word) === arr.lastIndexOf(word)
  );
};
/**
 * Sorts an array of words in ascending alphabetical order.
 *
 * @param {string[]} words - The array of words to sort.
 * @returns {string[]} The sorted array of words.
 */
let sortWords = (words) => words.sort((a, b) => a.localeCompare(b));
/**
 * Composes two functions into a single function.
 *
 * @template A, B, C
 * @param {(b: B) => C} f - The outer function to apply.
 * @param {(a: A) => B} g - The inner function to apply.
 * @returns {(a: A) => C} A function that applies `g` to its argument, then applies `f` to the result.
 */
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

/**
 * Composes the functions `getUniqueWords` and `sortWords` to filter unique words from an input
 * and return them sorted.
 *
 * @function
 * @param {string[]} words - An array of words to process.
 * @returns {string[]} An array of unique words, sorted.
 */
let filterUniqueWords = compose(sortWords, getUniqueWords);

filterUniqueWords(inputString); // ['aenean', 'adipiscing', 'amet', 'consectetur', 'convallis', 'cursus', 'duis', 'ex', 'faucibus', 'id', 'in', 'leo', 'lorem', 'mi', 'pellentesque', 'placerat', 'pretium', 'quisque', 'sapien', 'sem', 'sit', 'tempus', 'tellus']`

/**3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.*/


/**Practice purposes:
 * 
 * 
 * 
 * 
 * const test = {
  fn: function () {
    console.log(this);
  },
};
// test.fn(); // { fn: [Function: fn] }

// const something = (function(){return 'something'})()
// const anotherThing = (function(){console.log('another thing')})()
// console.log(something); // 'something'

const myFunction = function () {};
const myFunction1 = () => {
  "return something";
};
const myFunction2 = () => "return something else";
const myFunction3 = (a) =>
  "no need for parentheses around the argument when receiving 1 argument"; // works without parentheses around the argument
const myFunction4 = (a) => (a % 2 === 0 ? "even" : "odd"); // also works without parentheses around the arrow function body
// const myFunction4 = a => {return a%2 === 0 ? 'even' : 'odd'} // also works without parentheses around the arrow function body and arguments
const myFunction5 = (a, b) => a + b;
// const myFunction6 = (a,b) => a + b
const myFunction7 = (a, b) => {
  a - b;
}; // this will not return anything, because there is no return statement
const myFunction8 = (a, b) => {
  return a - b;
};

console.log(myFunction);
console.log(myFunction1);
console.log(myFunction1());
console.log(myFunction2());
console.log(myFunction3);
console.log(myFunction3());
console.log(myFunction4(2));
console.log(myFunction5(2, 2));
console.log(myFunction7(2, 2));
console.log(myFunction8(2, -2));

const counter = (function () {
  let initValue = 0; // Closure variable
  return function () {
    initValue += 1; // Increment the initValue
    return initValue; // Return the updated initValue
  };
})();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
 */

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {};
}
