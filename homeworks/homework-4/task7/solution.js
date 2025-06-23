/**### **Task 7: Object Property Validation***/

export class Task7 {
  persona = {
    name: "Gonzalo",
    lastName: "Varela Alagna",
    age: 30,
    email: "gonzalo@example.com",
    isActive: true,
    address: {
      street: "Av. Siempre Viva",
      number: 742,
      city: "Springfield",
      postalCode: "1234",
    },
    hobbies: ["reading", "programming", "soccer"],
    workHistory: [
      {
        enterprise: "TechCorp",
        role: "Software developer",
        from: "2018-06-01",
        to: "2022-04-30",
      },
      {
        enterprise: "DevSolutions",
        role: "Senior Dev",
        from: "2022-05-01",
        to: null, // actually working
      },
    ],
  };
  schema = {
    name: { type: "string", required: true },
    lastName: { type: "string", required: true },
    age: { type: "number", required: true },
    email: {
      type: "number",
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    isActive: { type: "boolean", required: true },
    address: {
      type: "object",
      required: true,
      itemSchema: {
        street: { type: "string", required: true },
        number: { type: "number", required: true },
        city: { type: "string", required: true },
        postalCode: { type: "string", required: true },
      },
    },
    hobbies: {
      type: "array",
      required: false,
      itemType: "string",
    },
    workHistory: {
      type: "array",
      required: true,
      itemType: "object",
      itemSchema: {
        enterprise: { type: "string", required: true },
        role: { type: "string", required: true },
        from: { type: "string", required: true },
        to: { type: "string", required: false },
      },
    },
  };

  constructor() {}
  /**Implement a function called validateObject that takes an object and a validation schema as arguments. 
     * The schema should define the required properties, their types, and any additional validation rules. 
        The function should return true if the object matches the schema, and false otherwise. 
        You can choose any schema you want.*/
  validateObject(object, personaValidationSchema) {
    let ret = true;
    //req
    if (personaValidationSchema.type === "string") {
      //string
      if (!object || typeof object !== "string") {
        ret = false;
      }
    } else if (personaValidationSchema.type === "number") {
      //number
      if (!object || typeof object !== "number") {
        ret = false;
      }
    } else if (personaValidationSchema.type === "boolean") {
      //boolean
      if (!object || typeof object !== "boolean") {
        ret = false;
      }
    } else if (
      //arr
      personaValidationSchema.type === "array"
    ) {
      if (object && object instanceof Array) {
        //manage items
        if (
          !personaValidationSchema.itemType === "object" &&
          !personaValidationSchema.itemType === "array"
        ) {
          //not object items
          for (let key of Object.keys(object)) {
            ret = this.validateObject(
              object[key],
              personaValidationSchema["itemType"]
            );
          }
        } else {
          // object items
          for (let key of Object.keys(object)) {
            ret = this.validateObject(
              object[key],
              personaValidationSchema["itemSchema"]
            );
          }
        }
      }
    } else if (personaValidationSchema.type === "object") {
      //obj literal
      for (let key of Object.keys(object)) {
        ret = this.validateObject(
          object[key],
          personaValidationSchema["itemSchema"][key]
        );
      }
    }
    return ret;
  }
  validateObject1(object, schema) {
    let ret = true;
    //required property falsy/truthy?
    if (schema.required === undefined) {
      // falsy
      for (let key of Object.keys(object)) {
        //iterate over object
        ret = this.validateObject(object[key], schema[key]);
      }
    } else {
      // truthy
      // required property true/false?
      if (schema.required === true) {
        // true
        //1st argument is object?
        if (typeof object === "object") {
          //object
          //1st argument schema 'type' property is array?
          if (schema.type === "array") {
            //it is array
            //are items type 'object'?
            if (schema.itemType === "object") {
              //items are object
              //iterate objects array
              for (let key of Object.keys(object)) {
                ret = this.validateObject(object[key], schema["itemSchema"]);
              }
            } else {
              //items are primitive type data
              for (let key of Object.keys(object)) {
                //iterate primitive type data array
                ret = this.validateObject(object[key], schema["itemType"]);
              }
            }
          } else {
            //shema.type === 'object'
            for (let key of Object.keys(object)) {
              //iterate over object properties
              ret = this.validateObject(object[key], schema["itemSchema"][key]);
            }
          }
        }
        //1st argument : primitive data type
        else {
          //validate 1st arg against the schema
          ret = object && typeof object === schema.type;
        }
      }
    }
    return ret;
  }
  /**
   * Probar
   *  inicializar la variable en true
   *  modificar variable a false cuando corresponda
   *  retorno
   *
   * seria basicamente abordar la problematica al reves, validar dessde un principio un objeto como true
   * y buscar el false. Una vez encontrado un falso ya se puede terminar la validacion. Si no se encuentra ninguna
   * propiedad que no este correctamente completada, es decir, que el objeto ingresado es valido, entonces
   * se puede retornar true.
   */
}
let t7 = new Task7();
const person = {
  name: "pp",
  age: 22,
  hobbies: ["soccer", "listen to music"],
  address: {
    street: "Av. Siempre Viva",
    number: 742,
    city: "Springfield",
    postalCode: "1234",
  },
  isActive: true,
};
const schema = {
  name: { type: "string", required: true },
  age: { type: "number", required: true },
  hobbies: {
    type: "array",
    required: false,
    itemType: "string",
  },
  address: {
    type: "object",
    required: true,
    itemSchema: {
      street: { type: "string", required: true },
      number: { type: "number", required: true },
      city: { type: "string", required: true },
      postalCode: { type: "string", required: true },
    },
  },
  isActive: { type: "boolean", required: true },
};

console.log(person.hobbies);
console.log(schema.hobbies);
// console.log(t7.validateObject(person, schema));
