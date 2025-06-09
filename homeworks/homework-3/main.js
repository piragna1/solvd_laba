/**
# Homework 3

### **Task 1: Immutability and Pure Functions**

1. Implement a pure function called `calculateDiscountedPrice` that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.
2. Create a pure function called `calculateTotalPrice` that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.

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


// main.js

import { products, persons,inputString, students, numbers, factorized, base, exponent } from "./shared/data.js";
import { Task1 } from "./task1/solution.js";
import { Task2 } from "./task2/solution.js";
import { Task4 } from "./task4/solution.js";
import { Task5 } from "./task5/solution.js";
import { runTask3 } from "./task3/runner.js";
import { trampoline } from "./shared/utils.js";


async function main() {
console.log("\n==================== TASK 1 ====================\n");

console.log("📦 ORIGINAL PRODUCTS:");
products.forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.name} - $${p.price}`);
});

console.log("\n💸 DISCOUNTED PRODUCTS (10% off):");
const discounted = Task1.calculateDiscountedPrice(products, 10);
discounted.forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.name} - $${p.price}`);
});

console.log("\n🧾 TOTAL PRICE (Original): $" + Task1.calculateTotalPrice(products));

console.log("\n==========================================================\n");


console.log("\n==================== TASK 2 ====================");

// Mostrar arreglo persons sin formato (raw)
console.log("\n🗃️ RAW PERSONS ARRAY:");
console.log(persons);

// Mostrar todos los nombres completos
console.log("\n🧑 FULL NAMES OF ALL PERSONS:");
persons.forEach((person, idx) => {
  console.log(`  ${idx + 1}. ${Task2.getFullName(person)}`);
});

// Mostrar el inputString original
console.log("\n📝 INPUT STRING:");
console.log(`  "${inputString}"`);

// Palabras únicas y ordenadas
const uniqueSortedWords = Task2.filterUniqueWords(inputString);
console.log("\n🔤 UNIQUE & SORTED WORDS:");
uniqueSortedWords.forEach((word, index) => {
  console.log(`  ${index + 1}. ${word}`);
});

// Reportes de estudiantes
console.log("\n🗃️ RAW STUDENTS DATA:");
students.forEach((student, i) => {
  console.log(`\n  Student ${i + 1}: ${student.name}`);
  student.subjects.forEach((subject) => {
    console.log(`    - ${subject.subject}: ${subject.grades.join(", ")}`);
  });
});
console.log("\n🎓 STUDENT REPORTS:");
console.log(Task2.getStudentReports(students));
console.log("\n==========================================================\n");
  
console.log("\n==================== TASK 3 ====================\n");
await runTask3();
console.log("\n==========================================================\n");

console.log("\n==================== TASK 4 ====================\n");
console.log(`🧮 Factorial(${factorized}) =`);
console.log(trampoline(() => Task4.calculateFactorial(factorized)));

console.log(`\n💥 Power(${base} ^ ${exponent}) =`);
console.log(trampoline(() => Task4.power(base, exponent)));

console.log("\n==========================================================\n");


console.log("\n==================== TASK 5 ====================\n");
console.log("📥 INPUT NUMBERS ARRAY:");
console.log(numbers);

console.log("\n🌀 Lazy Map (x2 each number):");
const lazyIterator = Task5.lazyMap(numbers, x => x * 2);
let result = lazyIterator.next();
let count = 1;
while (!result.done) {
  console.log(`  ${count++}. ${result.value}`);
  result = lazyIterator.next();
}

console.log("\n🧬 Fibonacci Sequence (First 10 numbers):");
const fibGen = Task5.fibonacciGenerator();
for (let i = 1; i <= 10; i++) {
  console.log(`  ${i}. ${fibGen.next().value}`);
}

console.log("\n==========================================================\n");
}


main();
