import {
  validateAge,
  validateEmail,
  validateName,
  validateLastName,
} from "./util.js";
/*### Task 5: Object Observation*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};
/**
 * Implement a function called observeObject that takes an object and a callback function as arguments. The function should return a 
    proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or 
    modified.
 */
export const observeObject = function (object, callbackFn) {
  return new Proxy(object, {
    get(target, prop, receiver) {
      return callbackFn(target, prop, receiver);
    },
    set(target, prop, val) {
      return callbackFn(target, prop, val);
    },
  });
};
/**
 * Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the 
    property name and the action (get or set) performed on the object. 
 */
export const logFn = function (target, prop, value) {
  if (typeof value === 'object') {
    return `Accessing current value of '${prop}': ${target[prop]}`;
  } else {
    //validations
    if (prop === "firstName") {
      validateName(value);
    } else if (prop === "lastName") {
      validateLastName(value);
    } else if (prop === "age") {
      validateAge(value);
    } else if (prop === "email") {
      validateEmail(value);
    } else {
      throw new Error(`${prop} is not an existing property of the object.`);
    }
    console.log(`Changing ${prop} from ${target[prop]} to ${value}...`);
    target[prop] = value;
    return true;
  }
};
const friendlyProxy = observeObject(person, logFn);



/**nombre invalido
 * apellido invalido
 * edad invalida
 * email invalido
 * 
 * datos validos
 * 
 * 8 casos
 */

console.log(friendlyProxy.firstName)
console.log(friendlyProxy.lastName)
console.log(friendlyProxy.age)
console.log(friendlyProxy.email)

try{
friendlyProxy.firstName = 'ca'
}
catch(e){
   console.error(e.message)
}

try{
friendlyProxy.lastName = 'ca'
}
catch(e){
   console.error(e.message)
}
try{
friendlyProxy.age = 180
}
catch(e){
   console.error(e.message)
}
try{
friendlyProxy.email = 'ca'
}
catch(e){
   console.error(e.message)
}

friendlyProxy.firstName = 'Carlax'
friendlyProxy.lastName = 'Galarga'
friendlyProxy.age = 80
friendlyProxy.email = 'elber.galarga@gmail.com'


console.log(friendlyProxy.firstName)
console.log(friendlyProxy.lastName)
console.log(friendlyProxy.age)
console.log(friendlyProxy.email)