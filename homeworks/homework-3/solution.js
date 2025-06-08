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

/**
 * Flattens a one-level nested array into a single array.
 *
 * @param {Array} arr - The array to flatten, which may contain nested arrays at one level.
 * @returns {Array} A new array with the sub-array elements concatenated into it.
 */
const flat = (arr) => arr.reduce((a, b) => a.concat(b), []);

/**
 * Composes two functions into a single function.
 *
 * @template A, B, C
 * @param {(b: B) => C} f - The outer function to apply.
 * @param {(a: A) => B} g - The inner function to apply.
 * @returns {(a: A) => C} A function that applies `g` to its argument, then applies `f` to the result.
 */
const compose1 = (f, g) => (x) => f(g(x));

/**
 * Extracts all score values from a list of students, flattening nested arrays.
 *
 * @param {Array<Object>} students - Array of student objects, each containing a 'grades' array.
 * @returns {Array<*>} A flattened array containing all score values from all subjects of all students.
 */
const getAllScores = (students) =>
  flat(
    flat(
      students.map((student) => student.grades.map((subject) => subject.scores))
    )
  );

/**
 * Calculates the average of an array of numbers and returns the result as a string with two decimal places.
 *
 * @param {number[]} arr - The array of numbers to average.
 * @returns {string} The average of the numbers in the array, formatted to two decimal places.
 */
const average = (arr) =>
  (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);

/**
 * Calculates the overall average grade by composing the functions `getAllScores` and `average`.
 *
 * @function
 * @param {...any} args - Arguments to be passed to `getAllScores`.
 * @returns {number} The overall average grade computed from all scores.
 */
const overallAverageGrade = compose1(average, getAllScores);

/**
 * Creates a counter function with a private count variable.
 * Each call to the returned function increments and returns the count.
 *
 * @returns {function(): number} A function that, when called, increments and returns the current count.
 */
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

/**
 * Returns a function that executes the provided function a specified number of times,
 * or indefinitely at 1-second intervals if times is negative.
 *
 * @param {Function} fn - The function to be executed.
 * @param {number} times - The number of times to execute the function. If negative, executes indefinitely every second.
 * @returns {Function} If times is non-negative, returns a function that executes `fn` the specified number of times.
 *                     If times is negative, returns a function that starts an interval and returns a function to clear it.
 */
function repeatFunction(fn, times) {
  return function executor() {
    if (times >= 0) {
      for (let i = 0; i < times; i++) {
        fn();
      }
    } else {
      const id = setInterval(fn, 1000);
      return () => clearInterval(id);
    }
  };
}

/**
 * Logs 'Hello!' to the console.
 *
 * @function
 * @returns {void}
 */
function sayHello() {
  console.log("Hello!");
}

/**
 * Calculates the factorial of a given number using recursion and an accumulator.
 * Returns a thunk (function) for each recursive step, enabling manual or trampolined evaluation.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @param {number} [acc=1] - The accumulator for the factorial calculation (used internally).
 * @returns {number|function} The factorial result if base case is reached, otherwise a thunk for the next recursive step.
 */
function calculateFactorial(n, acc = 1) {
  if (n <= 1) {
    return acc;
  }
  return () => calculateFactorial(n - 1, acc * n);
}

/**
 * Executes a recursive function using the trampoline technique to avoid stack overflows.
 * The function `fn` should return either another function (to continue recursion)
 * or a final value (to terminate recursion).
 *
 * @param {Function} fn - The initial function to execute. Should return either another function or a value.
 * @returns {*} The final value returned by the recursive function chain.
 */
function trampoline(fn) {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
}

/**
 * Computes the power of a base raised to an exponent using recursion and accumulator.
 * Returns a thunk (function) for each recursive step, enabling trampolining.
 *
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to raise the base to.
 * @param {number} [acc=1] - The accumulator for the result (used internally).
 * @returns {number|Function} The result if the exponent is 0, otherwise a thunk for the next recursive step.
 */
function power(base, exponent, acc = 1) {
  if (exponent === 0) {
    return acc;
  }

  if (exponent % 2 === 0) {
    return () => power(base * base, exponent / 2, acc);
  } else {
    return () => power(base, exponent - 1, acc * base);
  }
}

/**
 * Creates a lazy iterator that applies a mapping function to each element of the input array.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} mapFn - The function to apply to each element of the array.
 * @returns {{ next: function(): { value: any, done: boolean } }} An iterator object with a `next` method that returns the next mapped value and a done flag.
 */
function lazyMap(array, mapFn) {
  let index = 0;
  return {
    next: function () {
      if (index < array.length) {
        const value = mapFn(array[index]);
        index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    },
  };
}

/**
 * Creates a Fibonacci sequence generator.
 *
 * @returns {{ next: function(): { value: number } }} An object with a `next` method that returns the next Fibonacci number.
 */
function fibonacciGenerator() {
  let a = 0,
    b = 1;
  return {
    next: function () {
      const value = a;
      [a, b] = [b, a + b];
      return { value };
    },
  };
}

/* --- Datos para las pruebas --- */
let products = [
  { name: "banana", price: 400 },
  { name: "apple", price: 350 },
  { name: "watermelon", price: 450 },
  { name: "strawberry", price: 500 },
];

let inputString =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.";

let students = [
  {
    name: "Alice",
    grades: [
      { subject: "Math", scores: [85, 90, 78] },
      { subject: "English", scores: [88, 92, 85] },
    ],
  },
  {
    name: "Bob",
    grades: [
      { subject: "Math", scores: [80, 85, 82] },
      { subject: "English", scores: [78, 80, 75] },
    ],
  },
  {
    name: "Charlie",
    grades: [
      { subject: "Math", scores: [90, 95, 92] },
      { subject: "English", scores: [88, 90, 85] },
    ],
  },
];

const numbers = [1, 2, 3, 4, 5];

const counter1 = createCounter();
const counter2 = createCounter();

let repeatHello = repeatFunction(sayHello, 10);

let factorized = 150;
let base = 2;
let exponent = 20;

const fib = fibonacciGenerator();

/* --- Consola con resultados y pruebas --- */
console.log(
  "----------------------------- HOMEWORK 3 -----------------------------\n\n"
);

// =============================== TASK 1 ===============================
console.log("########################## TASK 1 ##########################\n");

console.log("Array of products:");
console.log(products);

console.log("\n1) Discounted prices (10% off):");
console.log(calculateDiscountedPrice(products, 10));

console.log("\n2) Total price of original products:");
console.log(calculateTotalPrice(products));

console.log("\n-------------------------------------------------------------\n");

// =============================== TASK 2 ===============================
console.log("########################## TASK 2 ##########################\n");

console.log("1) Full name example:");
console.log(getFullName({ firstName: "John", lastName: "Doe" }));

console.log("\n2) Unique words in the input text:");
console.log("Input text:", inputString);
console.log(filterUniqueWords(inputString));

console.log("\n3) Overall average grade for students:");
console.log("Students data:");
console.log(JSON.stringify(students, null, 2));
console.log("Calculated average:", overallAverageGrade(students));

console.log("\n-------------------------------------------------------------\n");

// =============================== TASK 3 ===============================
console.log("########################## TASK 3 ##########################\n");

console.log("1) Testing independent counters:");
console.log("counter1 call 1:", counter1());
console.log("counter1 call 2:", counter1());
console.log("counter2 call 1:", counter2());
console.log("counter2 call 2:", counter2());
console.log("counter1 call 3:", counter1());

console.log("\n2) repeatFunction: printing 'Hello!' 10 times:");
repeatHello();

console.log("\n-------------------------------------------------------------\n");

// =============================== TASK 4 ===============================
console.log("########################## TASK 4 ##########################\n");

console.log(`1) Factorial of ${factorized}:`);
console.log(trampoline(() => calculateFactorial(factorized)));

console.log(`\n2) Power calculation: ${base} ^ ${exponent}:`);
console.log(trampoline(() => power(base, exponent)));

console.log("\n-------------------------------------------------------------\n");

// =============================== TASK 5 ===============================
console.log("########################## TASK 5 ##########################\n");

console.log("1) LazyMap over [1,2,3,4,5] with x * 2:");
const lazyMapped = lazyMap(numbers, (x) => x * 2);
for (let i = 0; i < numbers.length + 1; i++) {
  console.log(`Call ${i + 1}:`, lazyMapped.next());
}

console.log("\n2) Fibonacci Generator first 10 values:");
for (let i = 0; i < 10; i++) {
  console.log(`Fib #${i + 1}:`, fib.next().value);
}

console.log("\n------------------------- END OF HOMEWORK -------------------------");
