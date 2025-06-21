import { Task1 } from "./task1/solution.js";

// TASK 1---------------------------------------------
// Usage example:
const task = new Task1();

// 1. Create the person object
console.log('\n🟢 1. Create the person object with the required properties:');
task.createPerson();
console.log(task.getPerson());

// 2. Make all properties of the person object read-only and not directly modifiable
console.log('\n🔵 2. Make all properties of the person object read-only and not directly modifiable:');
task.makePropertiesReadOnly();
console.log(Object.getOwnPropertyDescriptors(task.getPerson()));

// 3. Implement the updateInfo method on the person object
console.log('\n🟡 3. Implement the updateInfo method on the person object:');
task.addUpdateInfoMethod();
console.log('updateInfo method added:', typeof task.getPerson().updateInfo === 'function');

// Demonstration of updateInfo
console.log('\n🟠 Demonstration of updateInfo (updating firstName and age):');
const updated = task.getPerson().updateInfo({ firstName: 'Alicia', age: 32 });
console.log(updated);
console.log('Descriptors of the updated object:', Object.getOwnPropertyDescriptors(updated));

// 4. Create the address property as an empty object, non-enumerable and non-configurable
console.log('\n🟣 4. Create the address property as an empty object, non-enumerable and non-configurable:');
task.addAddressProperty();
console.log('address property:', Object.getOwnPropertyDescriptor(task.getPerson(), 'address'));
//------