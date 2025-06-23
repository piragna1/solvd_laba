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
        to: '2',
      },
    ],
  };
  schema = {
    name: { type: "string", required: true },
    lastName: { type: "string", required: true },
    age: { type: "number", required: true },
    email: {
      type: "string",
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
  /**
   * Recursively validates an object against a schema.
   *
   * Supports:
   * - Types: string, number, boolean, object, array
   * - Required properties
   * - Nested objects
   * - Arrays of primitives or objects
   * - Rules: min (number), pattern (RegExp)
   *
   * @param {Object} obj - Object to validate
   * @param {Object} schema - Schema to validate against
   * @returns {boolean} - True if valid, false otherwise
   */
  validateObject(obj, schema) {
    // Ensure input is an object (non-null and not an array)
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      return false;
    }

    for (let key in schema) {
      const rules = schema[key];
      const value = obj[key];

      // Check required fields
      if (rules.required && value === undefined) {
        return false;
      }

      // Optional field missing — skip
      if (value === undefined) continue;

      // Handle nested object
      if (rules.type === "object") {
        if (
          typeof value !== "object" ||
          value === null ||
          Array.isArray(value)
        ) {
          return false;
        }
        // Recursive call for nested object
        if (!this.validateObject(value, rules.itemSchema)) {
          return false;
        }

        // Handle array
      } else if (rules.type === "array") {
        // Check if the value is actually an array
        if (!Array.isArray(value)) {
          return false; // Fail validation if not an array
        }

        // Iterate over each element in the array
        for (let item of value) {
          // Case 1: Array of complex objects
          // If 'itemType' is "object" and there's a schema for the items
          if (
            rules.itemType === "object" &&
            typeof rules.itemSchema === "object"
          ) {
            // Recursively validate each object using the 'itemSchema'
            if (!this.validateObject(item, rules.itemSchema)) {
              return false; // Fail if any object does not validate
            }
          }
          // Case 2: Array of primitive types (string, number, boolean, etc.)
          else if (typeof rules.itemType === "string") {
            // Validate that the item's type matches the expected 'itemType'
            if (typeof item !== rules.itemType) {
              return false; // Fail if types don't match
            }
          }
          // Case 3: Invalid or unsupported schema configuration
          else {
            return false; // Fail validation for safety if schema is misconfigured
          }
        }
        // Primitive types
      } else {
        
        if (typeof value !== rules.type) {
          return false;
        }

        if (rules.pattern && !rules.pattern.test(value)) {
          return false;
        }

        if (rules.min !== undefined && value < rules.min) {
          return false;
        }
      }
    }

    // All checks passed
    return true;
  }
}

let t7 = new Task7();
console.log(t7.validateObject(t7.persona, t7.schema));
