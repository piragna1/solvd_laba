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
  return products.map(product => ({
    ...product,
    price: product.price - (product.price * discountPercentage / 100)
  }));
}
/**
 * Calculates the total price of all products in the given array.
 *
 * @param {Array<{price: number}>} products - An array of product objects, each containing a price property.
 * @returns {number} The sum of all product prices.
 */
function calculateTotalPrice(products) {
  return products.reduce((total, product) => total + product.price,0);
}

/**### **Task 2: Function Composition and Point-Free Style**
    1. Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".
    2. Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.
    3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.
*/









if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = {};
}
