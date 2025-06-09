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

const fact = 150;
const powBase = 2;
const powExp = 20;

console.log(`🧮 Factorial(${fact}) =`);
console.log(trampoline(() => Task4.calculateFactorial(fact)));

console.log(`\n💥 Power(${powBase} ^ ${powExp}) =`);
console.log(trampoline(() => Task4.power(powBase, powExp)));
console.log("\n==========================================================\n");
}
console.log("\n==================== TASK 5 ====================\n");

console.log("\n==========================================================\n");


main();