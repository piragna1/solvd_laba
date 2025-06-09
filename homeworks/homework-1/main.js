"use strict";

const Task1 = require("./task1/solution.js");

new Task1(); // Instancia la clase para agregar los métodos al prototipo de String

console.log("==== Use examples ====");

// Operaciones válidas
console.log(`📌 10 + 2 = ${"10".plus("2")}`);    
console.log(`📌 10 - 2 = ${"10".minus("2")}`);  
console.log(`📌 10 ÷ 2 = ${"10".divide("2")}`);  
console.log(`📌 10 × 2 = ${"10".multiply("2")}`);

// Casos con errores
console.log("\n==== Error handling ====");
console.log(`⚠️  10 + "abc" -> ${"10".plus("abc")}`);  
console.log(`⚠️  "abc" - 2 -> ${"abc".minus("2")}`);  
console.log(`⚠️  1213l1231 × abc -> ${"1213l1231".multiply("abc")}`);  
console.log(`⚠️  1231231qa ÷ 2 -> ${"1231231qa".divide("2")}`);
