/**### **Task 1: Object Property Manipulation**

Create an object called person with the following properties and values:

```jsx
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"
```

Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.

Implement a method called `updateInfo` on the person object that takes a new info object as an argument. The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). Ensure that this method adheres to the read-only property descriptor set earlier.

Create a new property called `address` on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable. */