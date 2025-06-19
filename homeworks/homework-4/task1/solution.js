/**### **Task 1: Object Property Manipulation**

Create an object called person with the following properties and values:

```jsx
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"
```


Create a new property called `address` on the person object with an initial value of an empty object. 
    Make this property non-enumerable and non-configurable. */


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
    firstName: {writable:false,},
    lastName: {writable:false,},
    age: {writable:false,},
    email: {writable:false,},
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
            if (info.firstName!==undefined){
                newDescriptors.firstName.value=info.firstName;
            }
            if (info.lastName!==undefined){
                newDescriptors.lastName.value=info.lastName;
            }
            if (info.age!==undefined){
                newDescriptors.age.value=info.age;
            }
            if (info.email!==undefined){
                newDescriptors.email.value=info.email;
            }
            updatedPerson = Object.defineProperties(updatedPerson, newDescriptors);
            return updatedPerson;
        },
        writable:false,
        enumerable:true,
        configurable:true
    }
);
console.log(person.updateInfo({firstName:'Alicia'}));