import { Task1 } from "./task1/solution.js";
import { Task2 } from "./task2/solution.js";
import { Task3 } from "./task3/solution.js";
import { Task4 } from "./task4/solution.js";
import { printDescriptors } from "./task4/helper.js";
import { Task5 } from "./task5/solution.js";
import { Task6 } from "./task6/solution.js";

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

// TASK 3---------------------------------------------

            // // Usage demonstration:
            // const task3 = new Task3();

            // // 1. Create the bankAccount object
            // console.log('\n🟢 1. Create the bankAccount object with a default balance:');
            // task3.createBankAccount();
            // console.log(task3.getBankAccount());

            // // 2. Add a getter for formattedBalance
            // console.log('\n🔵 2. Add a getter for formattedBalance:');
            // task3.addFormattedBalanceGetter();
            // console.log('formattedBalance:', task3.getBankAccount().formattedBalance);

            // // 3. Add a setter for balance
            // console.log('\n🟡 3. Add a setter for balance:');
            // task3.addBalanceSetter();
            // task3.getBankAccount().setBalance = 2000;
            // console.log('Updated balance:', task3.getBankAccount().balance);
            // console.log('Updated formattedBalance:', task3.getBankAccount().formattedBalance);

            // // 4. Implement the transfer method
            // console.log('\n🟣 4. Implement the transfer method and demonstrate a transfer:');
            // task3.addTransferMethod();
            // const sender = task3.getBankAccount();
            // const receiver = Task3.cloneBankAccount(sender);
            // receiver.setBalance = 500;
            // console.log('Sender before transfer:', sender.formattedBalance);
            // console.log('Receiver before transfer:', receiver.formattedBalance);
            // console.log('-------')
            // sender.transfer(sender, receiver, 300);
            // console.log('Transferring: $300...')
            // console.log('-------')
            // console.log('Sender after transfer:', sender.formattedBalance);
            // console.log('Receiver after transfer:', receiver.formattedBalance);
//------

// TASK 4---------------------------------------------
            // // Usage demonstration:
            // const task4 = new Task4();

            // // 1. Show the original person object
            // console.log("\n🟢 1. Original person object:");
            // console.log(task4.getPerson());

            // // 2. Create an immutable version of the person object
            // console.log("\n🔵 2. Immutable version of the person object:");
            // const immutablePerson = task4.getImmutablePerson(task4.getPerson());
            // console.log(immutablePerson);

            // // 3. Show property descriptors for both objects
            // console.log("\n🟡 3. Comparing both person objects descriptors:");
            // console.log("\n Property descriptors for person:");
            // printDescriptors(task4.getPerson());
            // console.log("\n Property descriptors for immutablePerson:");
            // printDescriptors(immutablePerson);
//------

// TASK 5---------------------------------------------
            // //Usage demonstration:
            // const t5 = new Task5();
            // // 1. Implementation of the private `observeObject` function within class Task5

            // // 2. Usage of the custom proxy object
            // console.log("\n🟢 1. Creating proxy object for the person object...");
            // console.log('person object structure: ', t5.person)
            // const friendlyProxy = t5.createProxyObject(t5.person)
            // console.log("\n🔵 2. Analyzing responses of executing different actions on the target person object.");
            // console.log("\n👉 Accessing data:");
            // console.log('console.log(friendlyProxy.firstName):',friendlyProxy.firstName);
            // console.log('console.log(friendlyProxy.lastName)',friendlyProxy.lastName);
            // console.log('console.log(friendlyProxy.age)',friendlyProxy.age);
            // console.log('console.log(friendlyProxy.email)',friendlyProxy.email);
            // console.log('\n👉 Trying to update fields with invalid inputs:')
            // try {
            //   friendlyProxy.firstName = "ca";
            // } catch (e) {
            //   console.error(e.message);
            // }

            // try {
            //   friendlyProxy.lastName = "ca";
            // } catch (e) {
            //   console.error(e.message);
            // }
            // try {
            //   friendlyProxy.age = 180;
            // } catch (e) {
            //   console.error(e.message);
            // }
            // try {
            //   friendlyProxy.email = "ca";
            // } catch (e) {
            //   console.error(e.message);
            // }

            // console.log('\n👉 Trying to update fields with valid inputs:')
            // friendlyProxy.firstName = "Carlax";
            // friendlyProxy.lastName = "Galarga";
            // friendlyProxy.age = 80;
            // friendlyProxy.email = "elber.galarga@gmail.com";

            // console.log('\n👉 Accessing modified data:')
            // console.log(friendlyProxy.firstName);
            // console.log(friendlyProxy.lastName);
            // console.log(friendlyProxy.age);
            // console.log(friendlyProxy.email);

//------
// TASK 6---------------------------------------------
            // //Usage demonstration:
            // let t6 = new Task6();
            // // 1. Implementation of the `deepCloneObject` function within class Task6
            // console.log("\n🟢 1. Creating deep clone of person object...");
            // let copy=t6.deepCloneObject(t6.person);
            // console.log("\n🔴 2. Modifying original object...");
            // t6.person.name='Alca'
            // t6.person.lastName='Huete'
            // console.log('\n🟣 3. Comparing `name` and `lastName` properties of both objects executing same object method `printInfo()`:')
            // t6.person.printInfo()
            // copy.printInfo()
            // console.log('\n🟡 4. Modifying objects `printInfo()` method')
            // t6.person.printInfo = function(){console.log('Hi!')}
            // copy.printInfo = function(){console.log('Bye!')}
            // console.log('\n🔵 5. Comparing both output executions...')
            // console.log('t6.person.printInfo():')
            // t6.person.printInfo()
            // console.log('copy.printInfo()')
            // copy.printInfo()
//------
