/**### **Task 2: Object Property Enumeration and Deletion**

Create a new object called `product` with the following properties and values:

```jsx
name: "Laptop"
price: 1000
quantity: 5
```

Use property descriptors to make the price and quantity properties non-enumerable and non-writable.

Implement a function called `getTotalPrice` that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.

Implement a function called `deleteNonConfigurable` that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message. */