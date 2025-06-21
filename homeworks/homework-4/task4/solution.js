import { printDescriptors } from "./helper.js";
/**### **Task 4: Advanced Property Descriptors***/
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "Anytown",
    country: "USA",
  },
  hobbies: ["reading", "cycling"],
  contact: {
    email: "john@example.com",
    phone: "555-1234",
  },
};

/** Implement a function called createImmutableObject that takes an object as an argument and returns a new 
    object with all its properties made read-only and non-writable using property descriptors. 
    The function should handle nested objects and arrays recursively.
*/
const createImmutableObject = function (object) {
  if (object === null || typeof object !== "object") return object;

  const copy = Array.isArray(object) ? [...object] : { ...object }; 

  if (object instanceof Array) { // If it is an array
    for (let key of object.keys()) { //Get keys
      if (typeof object[key] === "object" && object[key] !== null) { //Check if nested object
        copy[key] = createImmutableObject(copy[key]); /**Recall function passing the object and assign the return to the copy object
        in the respective key:value pair */
      }
      Object.defineProperty(copy, key, { //Make the property, object or not, not configurable nor writable
        value: copy[key],
        writable: false,
        enumerable: true,
        configurable: false,
      });
    }
  } else {
    for (let key of Object.keys(object)) { // If it is an literal object
      if (typeof object[key] === "object" && object[key] !== null) {//Check if nested object
        copy[key] = createImmutableObject(copy[key]); //Recall the function assignign the result at the correct key/value pair
      } 
      Object.defineProperty(copy, key, { //Make the property, object or not, not writable nor configurable
          value: copy[key],
          enumerable: true,
          writable: false,
          configurable: false,
        });
    }
  }
  return copy;
};

/** Use the createImmutableObject function to create an immutable version of the person object from Task 1.*/
const copy = createImmutableObject(person);
printDescriptors(copy);
printDescriptors(person);