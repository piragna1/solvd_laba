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
export const observeObject = function (object, fn) {
  return new Proxy(object, fn);
};
/**
 * Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the 
    property name and the action (get or set) performed on the object. 
 */
export const logAction = function(action, prop, val1,val2){
   if (action === 'get'){
      console.log('Accessing current value of '+prop+': '+val1);
   }
   else{
      console.log('Updating current value of '+prop+' from  '+val1+' to: '+val2);
   }
}