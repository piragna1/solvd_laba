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
      get(target,prop,receiver){
         callbackFn(target,prop,receiver);
      },
      set(target,prop,val){
         callbackFn(target,prop,val);
      }
   })
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

// console.log(person)
const hi = function(target,prop,receiver,newVal){
   if (newVal){

   // console.log('hola');
   }
   else{

   console.log('OBJECT',prop,':',target[prop]);
   }
   // console.log('receiver:\n',receiver)
}
const genFriendlyProxy = function(object, fn){
   //the handler contains the traps which define the behavior of the proxy
   const handler = {
      //traps (handler functions). Defines the behavior for the corresponding `object internal method`
      get(target,prop,receiver){ // intercepts attempts to access properties in the target
         fn(target,prop,receiver);
      },
      set(target,prop,value){
         //validations
         if (prop === 'firstName'){}
         else if (prop === 'lastName'){}
         else if (prop === 'age'){}
         else if (prop === 'email'){}
         else{throw new Error(`${prop} is not an existing property of the object.`)}
      }
   }
   return new Proxy(object, handler);
}
const friendlyProxy = genFriendlyProxy(person, hi);
friendlyProxy.firstName;
friendlyProxy.caracola='hola';
friendlyProxy.lastName;
