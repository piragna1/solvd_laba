/**### **Task 2: Object Property Enumeration and Deletion**/
/**
Create a new object called `product` with the following properties and values:
```jsx
name: "Laptop"
price: 1000
quantity: 5
```
 */
const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};
/** Use property descriptors to make the price and quantity properties non-enumerable and non-writable.*/
Object.defineProperties(product, {
  price: {
    writable: false,
    enumerable: false,
    configurable: true,
  },
  quantity: {
    writable: false,
    enumerable: false,
  },
});
// console.log(Object.getOwnPropertyDescriptors(product));
/**Implement a function called `getTotalPrice` that takes the product object as an argument and returns 
    the total price (calculated as price * quantity). Ensure that the function accesses the 
    non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.
 */
const getTotalPrice = function (product) {
  let priceDesc = Object.getOwnPropertyDescriptor(product, "price");
  let quantityDesc = Object.getOwnPropertyDescriptor(product, "quantity");
  return priceDesc.value * quantityDesc.value;
};
// console.log(getTotalPrice(product))
/** Implement a function called `deleteNonConfigurable` that takes an object and a property name as arguments.
    The function should delete the specified property from the object if it exists. 
    If the property is non-configurable, throw an error with an appropriate message. */
const deleteNonConfigurable = function (object, propertyKey) {
  if (Object.hasOwn(product, propertyKey)) {
    if (!Object.getOwnPropertyDescriptor(object, propertyKey).configurable) {
      throw new Error(
        "Property cannot be deleted because its configurable descriptor is set to false."
      );
    }
  }
  return delete object[propertyKey];
};

try {
  console.log(deleteNonConfigurable(product, "price"));
} catch (e) {
  console.error(e.message);
} finally {
  console.log(Object.hasOwn(product, "price"));
}
