/**### **Task 6: Object Deep Cloning***/
export class Task6 {
  person = {
    name: "Carlitos",
    lastName: "Juanjo",
    age: 40,
    address: [
      {
        country: "Philippines",
        city: "Cagayan de Oro",
        postalCode: "B7400",
        number: 1234,
      },
      {
        country: "Philippines",
        city: "Mindanao",
        postalCode: "B8212",
        number: 4321,
      },
    ],
    printInfo: function () {
      console.log(`
${this.name} ${this.lastName}
`);
    },
  };
  constructor() {}
  /**Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. 
    The function should handle circular references and complex nested structures. Do not use JSON methods.  */
  deepCloneObject(obj) {
    let ret = undefined;
    if (!obj){ret=null;}
    else if (typeof obj === 'function'){ret=obj;}
    else if (typeof obj ==='object'){
        ret={};
        for (let key of Object.keys(obj)){
            ret[key] = this.deepCloneObject(obj[key]);
        }
    }
    else {
        ret = structuredClone(obj);
    }
    return ret;
  }
}

