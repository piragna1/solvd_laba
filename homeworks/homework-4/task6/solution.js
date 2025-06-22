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
    deepCloneObject(obj){
        if (!obj) return null;
        if (typeof obj ==='function') {
            return obj;
        }
        if (typeof obj === 'object'){
            if (obj instanceof Array){//array

            }
            else{//litral obj

            }
            
        }
    }
//   deepCloneObject(obj) {
//     //This method cann not handle functions cloning
//     return structuredClone(obj);
//   }
}

let t6 = new Task6();
// let p1 = t6.deepCloneObject(t6.person)
let x = null
let arr = [
    {
        name:'caca'
    },
    {
        name:'caca1'
    },
    {
        name:'caca2'
    }
]
let obj = {
    arr:[
        {

        },
        {}
    ],
    name:'obj'
}
console.log(!x)
console.log(arr instanceof Array)
console.log('----------------')
for (let key in Object.keys(arr)){
    console.log(key)
}
console.log('----------------')
for (let key of Object.keys(obj)){
    console.log(key)
}
/**
 * quiero hacer un deepcloning de un objeto pero no se puede usar el metodo `structuredClone` con objetos que tengan funciones
 * porque salta un error...
 * 
 * Entonces quiero crear una funcion recursiva que recorra todas las propiedades de un objeto, sean simbolos, cadenas de caracteres u 
 * otros objetos como arreglos u objetos literales... o funciones...
 * 
 * se puede usar structured clon con cada tipo de dato excepto con las funciones
 * 
 * asi que recorro y si no es una funcion devuelvo el retorno de aplicar structuredClone...
 * 
 * notas:
 *  - A la hjora de generar una nueva propiedad con la funcionalidad puntual en un objeto (usando la sintaxis del punto '.'), 
 *      si se trata de una funcion, se puede tomar una existente, de otro objeto por ejemplo. Luego si en el objeto original 
 *      se modifica la misma, entonces en el primero, es decir en el objeto donde se ha agregado una nueva propiedad tomando la funcion
 *      de otro lado, las instrucciones del mismo no se veran afectadas y visceversa...
 */