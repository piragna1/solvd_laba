import { z } from "zod";
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
      schema: {
        street: "Av. Siempre Viva",
        number: 742,
        city: "Springfield",
        postalCode: "1234",
      },
    },
    hobbies: {
      type: "array",
      required: false,
      itemType: "string",
    },
    workHistory: {
        type:'array',
        required:true,
        itemSchema:{
            enterprise:{type:'string',required:true},
            role:{type:'string',required:true},
            from:{type:'string',required:true},
            to:{type:'string',required:false},
        }
    }
  };

  constructor() {}
  /**Implement a function called validateObject that takes an object and a validation schema as arguments. 
     * The schema should define the required properties, their types, and any additional validation rules. 
        The function should return true if the object matches the schema, and false otherwise. 
        You can choose any schema you want.*/
  validateObject(object, validationSchema) {
    
  }
}
