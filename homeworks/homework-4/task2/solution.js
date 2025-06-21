/**### **Task 2: Object Property Enumeration and Deletion**
/**
Create a new object called `product` with the following properties and values:
name: "Laptop"
price: 1000
quantity: 5
*/
export class Task2 {
    constructor() {
        this.product = {
            name: "Laptop",
            price: 1000,
            quantity: 5,
        };
    }

    /** Use property descriptors to make the price and quantity properties non-enumerable and non-writable. */
    makePriceAndQuantityNonEnumerableNonWritable() {
        Object.defineProperties(this.product, {
            price: {
                writable: false,
                enumerable: false,
                configurable: true,
            },
            quantity: {
                writable: false,
                enumerable: false,
                configurable: false,
            },
        });
    }

    /** Implement a function called `getTotalPrice` that takes the product object as an argument and returns 
     * the total price (calculated as price * quantity). Ensure that the function accesses the 
     * non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.
     */
    getTotalPrice() {
        let priceDesc = Object.getOwnPropertyDescriptor(this.product, "price");
        let quantityDesc = Object.getOwnPropertyDescriptor(this.product, "quantity");
        return priceDesc.value * quantityDesc.value;
    }

    /** Implement a function called `deleteNonConfigurable` that takes an object and a property name as arguments.
     * The function should delete the specified property from the object if it exists. 
     * If the property is non-configurable, throw an error with an appropriate message.
     */
    deleteNonConfigurable(propertyKey) {
        if (Object.hasOwn(this.product, propertyKey)) {
            if (!Object.getOwnPropertyDescriptor(this.product, propertyKey).configurable) {
                throw new Error(
                    "Property cannot be deleted because its configurable descriptor is set to false."
                );
            }
        }
        return delete this.product[propertyKey];
    }

    getProduct() {
        return this.product;
    }
}

