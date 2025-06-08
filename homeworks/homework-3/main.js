// main.js

import { products, inputString, students, numbers, factorized, base, exponent } from "./shared/data.js";
import { ProductUtils } from "./task1/solution.js";
import { TextUtils } from "./task2/solution.js";
import { GradeUtils } from "./task3/solution.js";
import { MathUtils } from "./task4/solution.js";
import { ArrayUtils } from "./task5/solution.js";

console.log("\n--- Task 1: Products ---");
const discounted = ProductUtils.calculateDiscountedPrice(products, 10);
console.log("Discounted Products:", discounted);
console.log("Total Price:", ProductUtils.calculateTotalPrice(discounted));

console.log("\n--- Task 2: Text ---");
const uniqueSortedWords = TextUtils.filterUniqueWords(inputString);
console.log("Unique & Sorted Words:", uniqueSortedWords);

console.log("\n--- Task 3: Student Grades ---");
const reports = GradeUtils.getStudentReports(students);
console.log("Student Reports:", reports);

console.log("\n--- Task 4: Math ---");
console.log("Squared:", MathUtils.squareNumbers(numbers));
console.log("Odds:", MathUtils.filterOddNumbers(numbers));
console.log(`Factorial(${factorized}):`, MathUtils.factorial(factorized));
console.log(`${base}^${exponent} =`, MathUtils.power(base, exponent));

console.log("\n--- Task 5: Arrays ---");
console.log("Max:", ArrayUtils.findMax(numbers));
console.log("Min:", ArrayUtils.findMin(numbers));
console.log("Sum:", ArrayUtils.sum(numbers));
console.log(">3:", ArrayUtils.filterGreaterThan(numbers, 3));
