//-------------------------------------------------------------------------Objects

//--------------------------
//Collection of related data and functionality
//--------------------------

//--------------------------
// const o1 = new Object();
// const o2 = {};
//--------------------------

//--------------------------
//They containt properties and methods
// const o = {
//     property:'propertyValue',
//     method1:function(){}
// }
//--------------------------

//--------------------------
//A property has a `key` and a `value`
// key:value
// const o ={
//     key:'value',
//     key1:1
// }
//--------------------------

//--------------------------
//Properties are accessible by dot notation
// const john = {name:"John"};
// console.log(john.name);//'John'
//--------------------------

//--------------------------
//Properties can be deleted using `delete` operator
// const john = {name:"John"};
// console.log(john.name);//'John'
// delete john.name;
// console.log(john.name);//undefined
//--------------------------

//--------------------------
//Multiwords keys:
// const o = {
//     'multiword key':'value!'
// };
// let key = 'multiword key';
// console.log(key);//multiword key
//--------------------------

//--------------------------Property value shorthand
// const def = {
//     // name,//ReferenceError: name is not defined
//     // age//ReferenceError: age is not defined
// }

// function makeUser(name,age){
//     return {
//         name,
//         age
//     }
// }

// const john = makeUser('john', 30);
// console.log(john);//{ name: 'john', age: 30 }
//--------------------------

//--------------------------for in loop
// //iterates over every key of an object
// const john = { name: 'john', age: 30 };
// for (let key in john){
//     console.log(key);
// }
// /*
// name
// age
// */
//--------------------------

//-------------------------- __proto__
// const animal = {
//     eats:true
// };
// const rabbit = {
//     jumps:true,
// };

// console.log(rabbit.__proto__);//[Object: null prototype] {}
// rabbit.__proto__ = animal;//sets rabbit.__proto__ to animal;
// console.log(rabbit.__proto__);//{ eats: true }
//--------------------------

//-------------------------- __proto__ limitations
//can not go in circles (reference to itself)
//can only be null or an object
//there just can be 1 [[Prototype]] for a given object.
//--------------------------

//--------------------------
// const o ={
//     1:'a',
// }
// let addition = 1+2+3+4+5+6+7+8+9;
// o[2]=addition;
// console.log(o[1]);//a
// console.log(o[2]);//45
// let multiplication = 1*2*3*4*5*6;
// o[multiplication]=multiplication;
// console.log(o[multiplication]);//720
// console.log(o);//{ '1': 'a', '2': 45, '720': 720 }
//--------------------------

//--------------------------
// const person = {
//     name:'name',
//     age:'age',
//     undef:undefined,
//     undefined:3
// }

// const employee = {
//     role:'delivery'
// }

// employee.__proto__=person;

// console.log('name' in person);//true

// console.log('age' in person);//true

// console.log('undef' in person);//true

// console.log(undefined in person);//true

// console.log(person[undefined]);//3

//--------------------------

//--------------------------
// const person = {
//     name:'name',
//     age:'age',
//     undef:undefined,
//     undefined:3
// }

// const employee = {
//     role:'delivery'
// }

// employee.__proto__=person;

// for (let key in employee){
//     console.log(key);
//     /*
//     role
// name (from person)
// age (from person)
// undef   (from person)
// undefined   (from person)
//     */
// }


//--------------------------

//--------------------------prototype methods
// //get prototype
// Object.getPrototypeOf(obj);
// //set prototype
// Object.setPrototypeOf(Object,proto);
//--------------------------

//--------------------------prototype methods
// Object.create(proto[descriptors]);
// console.log(Object.create())//TypeError: Object prototype may only be an Object or null: undefined
// console.log(Object.create(null))//[Object: null prototype] {}
// console.log(Object.create([]))//Array {}
// console.log(Object.create({}))//{}
//--------------------------

//--------------------------flags and descriptors
//configurable: you can modify the descriptors of the property or you can delete the property
//writable:you can modify if set to true
//enumerable:if true it will be listed in loops
//--------------------------

//--------------------------
//The method Object.getOwnPropertyDescriptor allows to query the full information about a property.
//--------------------------

//--------------------------
/**There are also methods that limit access to the whole object: 
Object.preventExtensions(obj) 
Forbids the addition of new properties to the object. 

Object.seal(obj) 
Forbids adding/removing of properties. Sets configurable: false for all 
existing properties. 

Object.freeze(obj) 
Forbids adding/removing/changing of properties. Sets configurable 
and writable to false for all properties. */
//--------------------------

//--------------------------
/**And there are also tests for them. 
Object.isExtensible(obj) 
Returns false if adding properties is forbidden. 
Object.isSealed(obj) 
Returns true if adding/removing properties is forbidden. 
Object.isFrozen(obj) 
Returns true if adding/removing/changing properties is forbidden */
//--------------------------

//--------------------------GETTERS AND SETTERS
// const obj ={
//     get propName(){return this[propName];},
//     set propName(value){this[propName]=value;}
// }
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------

//--------------------------
//--------------------------