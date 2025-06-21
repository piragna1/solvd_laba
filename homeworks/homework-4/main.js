import { Task1 } from "./task1/solution.js";
import { Task2 } from "./task2/solution.js";

// TASK 1---------------------------------------------
            // // Usage example:
            // const task = new Task1();

            // // 1. Create the person object
            // console.log("\n🟢 1. Create the person object with the required properties:");
            // task.createPerson();
            // console.log(task.getPerson());

            // // 2. Make all properties of the person object read-only and not directly modifiable
            // console.log(
            //   "\n🔵 2. Make all properties of the person object read-only and not directly modifiable:"
            // );
            // task.makePropertiesReadOnly();
            // console.log(Object.getOwnPropertyDescriptors(task.getPerson()));

            // // 3. Implement the updateInfo method on the person object
            // console.log("\n🟡 3. Implement the updateInfo method on the person object:");
            // task.addUpdateInfoMethod();
            // console.log(
            //   "updateInfo method added:",
            //   typeof task.getPerson().updateInfo === "function"
            // );

            // // Demonstration of updateInfo
            // console.log("\n🟠 Demonstration of updateInfo (updating firstName and age):");
            // const updated = task.getPerson().updateInfo({ firstName: "Alicia", age: 32 });
            // console.log(updated);
            // console.log(
            //   "Descriptors of the updated object:",
            //   Object.getOwnPropertyDescriptors(updated)
            // );

            // // 4. Create the address property as an empty object, non-enumerable and non-configurable
            // console.log(
            //   "\n🟣 4. Create the address property as an empty object, non-enumerable and non-configurable:"
            // );
            // task.addAddressProperty();
            // console.log(
            //   "address property:",
            //   Object.getOwnPropertyDescriptor(task.getPerson(), "address")
            // );
//------

// TASK 2---------------------------------------------
            // // Usage demonstration:
            // const task2 = new Task2();

            // // 1. Product creation
            // console.log("\n🟢 1. Product object created with properties:");
            // console.log(task2.getProduct());

            // // 2. Make price and quantity non-enumerable and non-writable
            // console.log(
            //   "\n🔵 2. Making price and quantity non-enumerable and non-writable:"
            // );
            // task2.makePriceAndQuantityNonEnumerableNonWritable();
            // console.log(Object.getOwnPropertyDescriptors(task2.getProduct()));

            // // 3. Get total price using non-enumerable properties
            // console.log("\n🟡 3. Total price calculated using non-enumerable properties:");
            // console.log("Total price:", task2.getTotalPrice());

            // // 4. Attempt to delete "price" (should succeed, configurable: true)
            // console.log(
            //   '\n🟣 4. Attempting to delete the "price" property (should succeed, configurable: true):'
            // );
            // try {
            //   console.log("Delete result:", task2.deleteNonConfigurable("price"));
            // } catch (e) {
            //   console.error("Error:", e.message);
            // } finally {
            //   console.log(
            //     'Does "price" exist after delete?',
            //     Object.hasOwn(task2.getProduct(), "price")
            //   );
            // }

            // // 5. Attempt to delete "quantity" (should fail, configurable: false)
            // console.log(
            //   '\n🟠 5. Attempting to delete the "quantity" property (should fail, configurable: false):'
            // );
            // try {
            //   console.log("Delete result:", task2.deleteNonConfigurable("quantity"));
            // } catch (e) {
            //   console.error("Error:", e.message);
            // } finally {
            //   console.log(
            //     'Does "quantity" exist after delete?',
            //     Object.hasOwn(task2.getProduct(), "quantity")
            //   );
            // }

            // //6. Demonstration of remaining properties in the object
            // console.log(
            //   '\n⚪ 6. Attempting to check which properties remain in the object'
            // );
            // console.log(Object.getOwnPropertyDescriptors(task2.getProduct()));
//------
