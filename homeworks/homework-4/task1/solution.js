/**### **Task 1: Object Property Manipulation**
Create an object called person with the following properties and values:
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"
*/
export class Task1 {
    constructor() {
        this.person = null;
    }

    /** 1. Create the person object with the required properties */
    createPerson() {
        this.person = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            email: "john.doe@example.com",
        };
    }

    /** 2. Make all properties of the person object read-only and not directly modifiable */
    makePropertiesReadOnly() {
        if (!this.person) throw new Error("Person not created yet");
        Object.defineProperties(this.person, {
            firstName: { writable: false, enumerable: true, configurable: false },
            lastName: { writable: false, enumerable: true, configurable: false },
            age: { writable: false, enumerable: true, configurable: false },
            email: { writable: false, enumerable: true, configurable: false },
        });
    }

    /** 3. Implement the updateInfo method on the person object */
    addUpdateInfoMethod() {
        if (!this.person) throw new Error("Person not created yet");
        Object.defineProperty(this.person, 'updateInfo', {
            value: function (info) {
                let updatedPerson = {};
                let originalDescriptors = Object.getOwnPropertyDescriptors(this);
                for (const key of Object.keys(originalDescriptors)) {
                    let val = originalDescriptors[key].value;
                    if (info[key] !== undefined) {
                        val = info[key];
                    }
                    Object.defineProperty(updatedPerson, key, {
                        value: val,
                        writable: originalDescriptors[key].writable,
                        enumerable: originalDescriptors[key].enumerable,
                        configurable: originalDescriptors[key].configurable,
                    });
                }
                return updatedPerson;
            },
            writable: false,
            enumerable: true,
            configurable: true
        });
    }

    /** 4. Create the address property as an empty object, non-enumerable and non-configurable */
    addAddressProperty() {
        if (!this.person) throw new Error("Person not created yet");
        Object.defineProperty(this.person, 'address', {
            value: {},
            writable: true,
            enumerable: false,
            configurable: false
        });
    }

    getPerson() {
        return this.person;
    }
}

