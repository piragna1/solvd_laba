/**### **Task 1: Object Property Manipulation**
Create an object called person with the following properties and values:
```jsx
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"
```
*/
/**Use property descriptors to make all properties of the person object read-only and non-writable,
    so their values cannot be changed directly.
 * 
 */
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
}
Object.defineProperties(person, {
    firstName: {writable:false,enumerable:true},
    lastName: {writable:false,enumerable:true},
    age: {writable:false,enumerable:true},
    email: {writable:false,enumerable:true},
});
/**Implement a method called `updateInfo` on the person object that takes a new info object as an argument.
    The info object should contain updated values for any of the properties (e.g., { firstName: "Jane",
    age: 32 }).
    Ensure that this method adheres to the read-only property descriptor set earlier.
 */
Object.defineProperty(person, 'updateInfo', {
        value:function(info){
            let updatedPerson = {};
            let originalDescriptors = Object.getOwnPropertyDescriptors(person);
            let newDescriptors = {...originalDescriptors};
            for (const key of Object.keys(originalDescriptors)){
                if (info[key] !== undefined){
                    newDescriptors[key].value = info[key];
                }
            }
            updatedPerson = Object.defineProperties(updatedPerson, newDescriptors);
            return updatedPerson;
        },
        writable:false,
        enumerable:true,
        configurable:true
    }
);
let res = person.updateInfo({firstName:'Alicia'});
/** Create a new property called `address` on the person object with an initial value of an empty object. 
    Make this property non-enumerable and non-configurable. */

