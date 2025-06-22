import { printDescriptors } from "./helper.js";
/**### **Task 4: Advanced Property Descriptors**
 *
 * Implement a function called createImmutableObject that takes an object as an argument and returns a new
 * object with all its properties made read-only and non-writable using property descriptors.
 * The function should handle nested objects and arrays recursively.
 */

export class Task4 {
  constructor() {
    this.person = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: "john.doe@example.com",
    };
  }

  /** 1. Implement createImmutableObject recursively for objects and arrays */
  createImmutableObject(object) {
    if (object === null || typeof object !== "object") return object;

    const copy = Array.isArray(object) ? [...object] : { ...object };

    if (Array.isArray(object)) {
      for (let key of object.keys()) {
        if (typeof object[key] === "object" && object[key] !== null) {
          copy[key] = this.createImmutableObject(copy[key]);
        }
        Object.defineProperty(copy, key, {
          value: copy[key],
          writable: false,
          enumerable: true,
          configurable: false,
        });
      }
    } else {
      for (let key of Object.keys(object)) {
        if (typeof object[key] === "object" && object[key] !== null) {
          copy[key] = this.createImmutableObject(copy[key]);
        }
        Object.defineProperty(copy, key, {
          value: copy[key],
          enumerable: true,
          writable: false,
          configurable: false,
        });
      }
    }
    return copy;
  }

  /** 2. Use createImmutableObject to create an immutable version of the person object */
  getImmutablePerson(person) {
    return this.createImmutableObject(person);
  }

  getPerson() {
    return this.person;
  }
}

