/**# Homework 2

### Task

Create a JavaScript library that provides advanced data transformation functions. The library should include the following features:

**`addValues`**: Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.

**`stringifyValue`**: Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use `JSON.stringify()` for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.

**`invertBoolean`**: Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error.

**`convertToNumber`**: Accepts a single argument of any type and attempts to convert it to a number. For strings, use `parseFloat()` or `parseInt()` for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error.

**`coerceToType`**: Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.

Implement additional functions of your choice that demonstrate advanced type conversion scenarios or cater to specific use cases related to primitive types. You are encouraged to explore complex scenarios and push the limits of type conversion. */


const Task = require('./task/solution.js');
const task = new Task();

console.log('🟢 --- addValues ---');
console.log('5 + 3 =', task.addValues(5, 3)); // 8
console.log('"Hello " + "World" =', task.addValues('Hello ', 'World')); // "Hello World"
console.log('[1,2] + [3,4] =', task.addValues([1, 2], [3, 4])); // [1,2,3,4]
console.log('{a:1} + {b:2} =', task.addValues({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
console.log('true + false =', task.addValues(true, false)); // false

console.log('\n🔵 --- stringifyValue ---');
console.log('123 →', task.stringifyValue(123)); // "123"
console.log('[1,2,3] →', task.stringifyValue([1, 2, 3])); // "[1,2,3]"
console.log('{x:10} →', task.stringifyValue({ x: 10 })); // '{"x":10}'
console.log('true →', task.stringifyValue(true)); // "true"

console.log('\n🟡 --- invertBoolean ---');
console.log('true →', task.invertBoolean(true)); // false
console.log('false →', task.invertBoolean(false)); // true

console.log('\n🟣 --- convertToNumber ---');
console.log('"42.5" →', task.convertToNumber("42.5")); // 42.5
console.log('true →', task.convertToNumber(true)); // 1
console.log('false →', task.convertToNumber(false)); // 0

console.log('\n🟠 --- coerceToType ---');
console.log('"123" as number →', task.coerceToType("123", "number")); // 123
console.log('456 as string →', task.coerceToType(456, "string")); // "456"
console.log('"true" as boolean →', task.coerceToType("true", "boolean")); // true
console.log('0 as boolean →', task.coerceToType(0, "boolean")); // false
console.log('7 as array →', task.coerceToType(7, "array")); // [7]
console.log('"hello" as object →', task.coerceToType("hello", "object")); // { value: 'hello' }