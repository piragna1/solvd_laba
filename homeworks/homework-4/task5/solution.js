import {logFn} from "./util.js";
/*### Task 5: Object Observation*/
export class Task5 {
  person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
  };
  constructor() {}
  /**
 * 1. Implement a function called observeObject that takes an object and a callback function as arguments. The function should return a 
    proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or 
    modified.
 */
  #observeObject = function (object, callbackFn) {
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
 * 2. Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the 
    property name and the action (get or set) performed on the object. 
 */
  createProxyObject(person){
    return this.#observeObject(person,logFn); //`logFn` imported 
  }
}

 
