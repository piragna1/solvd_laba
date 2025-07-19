//---------------------------------------------------------------------------------------- Garbage Collection & Collections


//--------------------------------- Memory lifecycle
//allocate - use - release
//---------------------------------

//--------------------------------- Stack
// const male = true;
// const name = 'John Doe'
// const age =24;
// //All this variables are stored in the stack
//---------------------------------

//--------------------------------- Stack
//Stores primitive values and references
//Size is known at compile time
//Allocates a fixed amount of memory
//---------------------------------

//--------------------------------- Heap
//Stores objects and functions
//Size is known at runtime
//No limit per object
//---------------------------------

//--------------------------------- 
// const person = {
//     id:1,
//     name:"John",

// }

// const dog = {
//     name:"poppy",
//     personId:1
// }

// function getOwner(dog,persons){
//     return persons.find(
//         (person) => {person.id === dog.personId;}
//     );
// }

// const name = "John";
// const newPerson = person;

// /**
//  * person,dog objects are stored in the heap... but actually the words `person` and `dog` are in the stack... and they are a pointer to the object itself.
//  * same with the function... which is an object, but the signature `getOwner` is in the stack, and it is a reference to the complete function
//  * `name = "John"` is in the stack
//  * `newPerson` is in the stack and points to the same object as `person` does.
//  */
//---------------------------------

//--------------------------------- 
// user = getUser();
// var secondUser = getUser();
// function getUser(){
//     return 'user';
// }
//---------------------------------

//---------------------------------
// const object = {};

// const intervalId = setInterval(function(){
//     (() => console.log(object))();
//     (() => console.log('object'))();
// },2000);

// // Stop after 10 seconds
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped.");
// }, 10000);
//---------------------------------

//--------------------------------- Removing unnecessary event listeners and elements
// const element = document.getElementById('btn');
// const onClick = () => alert('hi');
// element.addEventListener('click',onClick);

// element.removeEventListener('click',onClick);
// element.parentNode.removeChild(element);
//---------------------------------

//--------------------------------- Optimization
/* Generally... objects have a short lifespan. They appear for doing what is intended and then they are collected...

That is why the garbage collector engine prioritize to always check the most new generated objects in order to clean.

Those objects that survive more time than average will be analyzed less frecuently.
*/
//---------------------------------

//--------------------------------- idle cpu garbage collection
//It is better for the general perfomance to run the garbage collection processes when CPU is idle.
//For avoiding disturbes during execution of tasks...
//---------------------------------

//--------------------------------- COLLECTIONS
// const map = new Map();
// //key value object

// map.set(1,1);
// map.set('1','1');
// map.set(true, 1);

// console.log(map.get(1));//1
// console.log(map.get('1'));//1
// console.log(map.get(true));//1

//See that a map can store any data type for keys while literal objects always use strings...
//---------------------------------

//--------------------------------- Notes
//For example. Which methods can be used with map are common question for interviews...
/*Map methods
set
get
has
clear
size
*/
//---------------------------------

//--------------------------------- Maps
// //You can use objects as keys!

// let john = {name:'John'};
// let alex = {name:'Alex'};

// let aux = john;

// const visitsMap = new Map();

// visitsMap.set(john, 123);

// console.log(visitsMap.get(john));//123
// console.log(visitsMap.get(aux));//123

// let visitCountsObj={};
// visitCountsObj[john]=visitsMap.get(john);
// visitCountsObj[alex] = 234;

// console.log(visitCountsObj['[object Object]']);//234

// console.log(visitCountsObj)//{ '[object Object]': 234 }

// //you can see how you can not use an object for an object literal property...

// console.log(visitCountsObj[alex]);//although, this is the output here:234

// // for (index of visitCountsObj){//TypeError: visitCountsObj is not iterable
// //     console.log(index);
// //     console.log(visitCountsObj[index]);
// // }

// visitCountsObj.hello = john;
// console.log(visitCountsObj);//{ '[object Object]': 234, hello: { name: 'John' } }
// visitCountsObj[john] = 'hello';

// //overwritten the previous value whose key was '[object Object]'
// console.log(visitCountsObj);//{ '[object Object]': 'hello', hello: { name: 'John' } }


//---------------------------------

//--------------------------------- Map chaining set calls
// const map = new Map();
// map.set(1,1).set(2,1).set(3,1);
// console.log(map);//Map(3) { 1 => 1, 2 => 1, 3 => 1 }
//---------------------------------

//--------------------------------- Way of initializing maps with initial values:
// const recipeMap = new Map([
//     ['cucumber',500],
//     ['tomatoes',350],
//     ['onion',50]
// ]);
// console.log(recipeMap);//Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }
//---------------------------------

//--------------------------------- Iteration in maps
// const recipeMap = new Map([
//     ['cucumber',500],
//     ['tomatoes',350],
//     ['onion',50]
// ]);

// //over keys
// for (const element of recipeMap.keys()) {
//     console.log(element);
// }

// //over values
// for (const element of recipeMap.values()) {
//     console.log(element);
// }

// //over entries
// for (const element of recipeMap.entries()) {
//     console.log(element);
// }

//---------------------------------

//--------------------------------- forEach built-in js method with maps
// const recipeMap = new Map([
//     ['cucumber',500],
//     ['tomatoes',350],
//     ['onion',50]
// ]);

// recipeMap.forEach((value,key,map) => {
//     console.log(key,value);
//     // console.log(map);
// })
// /*
// cucumber 500
// tomatoes 350
// onion 50
//  */

// for (const element of recipeMap.entries()) {
//     console.log(element);
// }
// /* 
// [ 'cucumber', 500 ]
// [ 'tomatoes', 350 ]
// [ 'onion', 50 ]
//  */
//---------------------------------

//--------------------------------- Map initialization initial possible values
// //You can use an array whose items have the structure of [key,value] pairs as an argument when initializing a new Map!
// let recipe = [[ 'cucumber', 500 ],[ 'tomatoes', 350 ],[ 'onion', 50 ]];
// let recipeMap = new Map(recipe);
// let recipeMap1 = new Map([[ 'cucumber', 500 ],[ 'tomatoes', 350 ],[ 'onion', 50 ]]);

// console.log(recipeMap);//Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }
// console.log(recipeMap1);//Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }

//---------------------------------

//--------------------------------- Map initialization initial possible values
// //You can also use an object as parameter when initializing a new map!!!!

// let person = {name:"John",age:16};
// let personsVisit = new Map(Object.entries(person));
// console.log(personsVisit);//Map(2) { 'name' => 'John', 'age' => 16 }

//---------------------------------

//--------------------------------- A way of generating a literal object with an array as argument!!!

// //Same as with maps you can pass an array containing key value pairs arrays to a static method of the Object class in order to generate a new object literal!!!!

// let buy = Object.fromEntries([
//     ['banana', 2],
//     ['meat', 2],
//     ['orange',2]
// ]);

// console.log(buy);//{ banana: 2, meat: 2, orange: 2 }
//---------------------------------

//--------------------------------- Making a `plain` object from a map!
// const map = new Map();
// map.set('banana',1).set('orange',3).set('meat',1.5);
// const buy = Object.fromEntries(map.entries());
// console.log(buy);//{ banana: 1, orange: 3, meat: 1.5 }
//---------------------------------

//--------------------------------- SET collection
// //it does NOT store key value pairs... just values.

// //It cannot store the same value twice. They will bue unique.

// const visitSet = new Set();

// visitSet.add('John');
// visitSet.add('John');
// visitSet.add('John');
// visitSet.add('John');
// visitSet.add('John');

// console.log(visitSet.size);//1


// visitSet.add('Doe');
// visitSet.add('Martin');
// visitSet.add('Link');
// console.log(visitSet.size);//4
// for (const element of visitSet){
//     console.log(element);
//     /*  output:
//         John
//         Doe
//         Martin
//         Link
//     */
// }
// for (const element of visitSet.keys()){
//     console.log(element);
//     /*  output:
//         John
//         Doe
//         Martin
//         Link
//     */
// }
// for (const element of visitSet.values()){
//     console.log(element);
//     /*  output:
//         John
//         Doe
//         Martin
//         Link
//     */
// }



//---------------------------------

//--------------------------------- Creating a set with an array as an argument
// const fruitsSet = new Set(['apple','orange','pineapple','apple','watermelon','apple']);
// for (let fruit of fruitsSet){ //works the same with fruitsSet.values() or fruitsSet.keys()
//     console.log(fruit);
//     /* 
//     apple
// orange
// pineapple
// watermelon
//     */
// }
// fruitsSet.forEach(function(fruit,value2){
//     console.log(fruit,value2);
// });
// /*
// apple apple
// orange orange
// pineapple pineapple
// watermelon watermelon
// */
// for (let fruit of fruitsSet.entries()){ //works the same with fruitsSet.values() or fruitsSet.keys()
//     console.log(fruit);
//     /* 
//     [ 'apple', 'apple' ]
// [ 'orange', 'orange' ]
// [ 'pineapple', 'pineapple' ]
// [ 'watermelon', 'watermelon' ] */
// }

// //Noted how the elements are sorted alphabetically;

//---------------------------------

//--------------------------------- 
// const john = {name:"John"};
// const lucas = {name:"Lucas"};
// const array = [john];
// console.log(array);//[ { name: 'John' } ]
// // array = [lucas];//TypeError: Assignment to constant variable.
// const array1 = [john,lucas];
// console.log(array1);//[ { name: 'John' }, { name: 'Lucas' } ]

// // john = null;//TypeError: Assignment to constant variable.

// // matheu = {name:"Matheu"};//ReferenceError: matheu is not defined
// let matheu = {name:"Matheu"};
// const array2=[matheu];
// console.log(array2);//[ { name: 'Matheu' } ]
// matheu=null;
// console.log(array2);//[ { name: 'Matheu' } ]


// //It seems like even if we dereference the variable matheu. The object {name:"Matheu"} is still being pointed by the array2.

//---------------------------------

//--------------------------------- Map

// //Map preserves the order in which the data was put;
// const john = {name:"John"};
// let lucas = {name:"Lucas"};
// // john = null;//TypeError: Assignment to constant variable.
// const map = new Map();
// map.set(lucas,1);
// console.log(map.get(lucas));//1
// lucas=null;
// console.log(map.get(lucas));//undefined

//---------------------------------

//--------------------------------- WeakMap

// //A weakpmap MUST use objects as keys.

// let data = {hola:'hola'};
// const weakMap = new WeakMap();
// // weakMap.set('hola',1);//TypeError: Invalid value used as weak map key
// weakMap.set(data,1);
// console.log(weakMap);//WeakMap { <items unknown> }

// console.log(weakMap.get(data));//1

//---------------------------------

//--------------------------------- 
// let john = {name:"John"};
// const weakMap = new WeakMap();

// weakMap.set(john,1);
// console.log(weakMap);//WeakMap { <items unknown> }

// console.log(weakMap.get(john));//1

// john = null;

// console.log(weakMap.get(john));//undefined !!!!!!!!!!!!!!!!!!!!!11

//---------------------------------

//--------------------------------- Map
// let visitCountMap = new Map();

// function count(user){
//     let count = visitCountMap.get(user) || 0;
//     visitCountMap.set(user, count+1);
// }


// let john = {name:"John"};
// count(john);
// count(john);
// count(john);
// count(john);
// count(john);
// count(john);
// count(john);
// count(john);
// count(john);
// count(john);

// console.log(visitCountMap.get(john));//10
// john=null;
// console.log(visitCountMap.get(john));//undefined !!!!!!!!!

//---------------------------------

//--------------------------------- Map
// let cache = new Map();

// function process(object){
//     if (!cache.has(object)){
//         //some calculations maybe
//         let result =object;
//         cache.set(object,result);
//         return result;
//     }
//     return cache.get(object);
// }

// let obj ={};
// let result1 = process(obj);
// //later from another place in the code...
// let result2 = process(obj);

// obj=null;
// console.log(cache.size);//1

// //garbage collector did not remove from the map the object referenced with obj.
//---------------------------------

//---------------------------------
// let cache = new WeakMap();

// function process(object){
//     if (!cache.has(object)){
//         //some calculations maybe
//         let result =object;
//         cache.set(object,result);
//         return result;
//     }
//     return cache.get(object);
// }

// let obj ={};
// let result1 = process(obj);
// //later from another place in the code...
// let result2 = process(obj);

// obj=null;
// console.log(cache.get(obj));//undefined

//---------------------------------

//---------------------------------
// let visitedSet = new WeakSet();
// let john = {name:"John"};
// let mary = {name:"Mary"};
// let pete = {name:"Pete"};
// visitedSet.add(john).add(mary).add(pete).add(john);

// john=null;
// console.log(visitedSet.has(john));//false

//---------------------------------

//--------------------------------- Object literal to string using json format
// let student ={
//     name:'John',
//     age:30,
//     isAdmin:false,
//     courses:['html','css','javascript'],
//     spouse:null
// }

// let json = JSON.stringify(student);

// console.log(typeof json);//string

// console.log(json);//{"name":"John","age":30,"isAdmin":false,"courses":["html","css","javascript"],"spouse":null}


//---------------------------------

//--------------------------------- JSON
// console.log(JSON.stringify(1));//1
// console.log(JSON.stringify('string'));//"string"
// console.log(JSON.stringify(true));//true
// console.log(JSON.stringify([1,2,3,'array!']));//[1,2,3,"array!"]
//---------------------------------

//---------------------------------
// let user = {
//     sayHi(){
//         console.log('Hello');
//     },
//     [Symbol('123')]:123,
//     something:undefined
// }
// console.log(JSON.stringify(user));//{}
//---------------------------------

//---------------------------------
// let meetup = {
//     title:"Conference",
//     room: 23,
//     participants:["John,ann",{name:"Pope!",hola:{hola:{nombre:'minombre'}}}]
// };

// console.log(JSON.stringify(meetup));//{"title":"Conference","room":23,"participants":["John,ann"]}
//---------------------------------

//---------------------------------
// let room = {
//     number:23
// };
// let meetup = {
//     title:"Conference",
//     place:room,
//     participants:["John,ann",{name:"Pope!",hola:{hola:{nombre:'minombre'}}}]
// };
// room.occupiedBy = meetup;
// JSON.stringify(meetup);//TypeError: Converting circular structure to JSON
//---------------------------------

//---------------------------------
// let room = {
//     number:23
// };
// let meetup = {
//     title:"Conference",
//     place:room,
//     participants:[
//         {name:"John"},
//         {name:"Alice"}
//     ]
// };
// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup, ['title','participants','name']));//{"title":"Conference","participants":["John,ann",{"name":"Pope!"}]}
//---------------------------------

//---------------------------------
// let room = {
//     number:23
// };
// let meetup = {
//     title:"Conference",
//     place:room,
//     participants:[
//         {name:"John"},
//         {name:"Alice"}
//     ]
// };
// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup, ['title','participants','name','number','place']));//{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
//---------------------------------

//---------------------------------
// let room = {
//     number:23
// };
// let meetup = {
//     title:"Conference",
//     place:room,
//     participants:[
//         {name:"John"},
//         {name:"Alice"}
//     ]
// };

// room.occupedBy=meetup;

// console.log(JSON.stringify(
//     meetup, 
//     function replacer(key,value){
//         return (key === "occupedBy") ? undefined : value;
//     }
// ));//{"title":"Conference","place":{"number":23},"participants":[{"name":"John"},{"name":"Alice"}]}

// JSON.stringify(
//     meetup, 
//     function replacer(key,value){
//         console.log(`${key} : ${value}`)
//         return (key === "occupedBy") ? undefined : value;
//     }
// );/*  : [object Object]
// title : Conference
// place : [object Object]
// number : 23
// occupedBy : [object Object]
// participants : [object Object],[object Object]
// 0 : [object Object]
// name : John
// 1 : [object Object]
// name : Alice*/
//---------------------------------

//---------------------------------
// let user ={
//     name:"John",
//     age:25,
//     roles:{
//         admin:false,
//         editor:true
//     },
// };

// console.log(JSON.stringify(user,null,2));
// /*
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "admin": false,
//     "editor": true
//   }
// }
// */
//---------------------------------

//---------------------------------
// let room = {
//     numer:123,
// };

// let conferencer = {
//     name:"John"
// }

// let meetup ={
//     title:"Conference",
//     conferencer,//conferencer:conferencer can be avoided!!!!!!!!
//     date: new Date(Date.UTC(10000,0,1)),
//     room:room
// }

// console.log(JSON.stringify(meetup));//{"title":"Conference","conferencer":{"name":"John"},"date":"+010000-01-01T00:00:00.000Z","room":{"numer":123}}
//---------------------------------

//---------------------------------

// let apple = {
//     price:269,
//     toJSON(){
//         return 'two hundred and sixty nine cents';
//     }
// }

// let room = {
//     number:23,
//     toJSON(){
//         return this.number;
//     }
// };

// let meetup ={
//     title:"Conference",
//     room
// };

// console.log(JSON.stringify(room));//23
// console.log(JSON.stringify(meetup));//{"title":"Conference","room":23}
// console.log(JSON.stringify(apple));//"two hundred and sixty nine cents"
//---------------------------------

//---------------------------------
// // // let value = JSON.parse(str[reviver]);

// // let numbers = "[0,1,2,3]";

// // numbers = JSON.parse(numbers);

// // console.log(numbers);//[ 0, 1, 2, 3 ]


// //---------------------------------

// //--------------------------------- JSON parse method
// // let userData = '{"name":"John","age":35,"isAdmin":false}';
// // console.log(JSON.parse(userData).name); // John
// //---------------------------------

// //---------------------------------
// let json = `{
// 'name': "John",
// "surname":'Smith',
// 'isAdmin': false,
// "friends":[0,1,2,3]   
// }`;

// let jsonCorrected =`{
// "name": "John",           
// "surname":"Smith",
// "isAdmin": false,
// "friends":[0,1,2,3]     
// }`;
// // console.log(JSON.parse(json));//SyntaxError: Expected property name or '}' in JSON at position 2 (line 2 column 1)
// // console.log(JSON.parse(json));//SyntaxError: Expected property name or '}' in JSON at position 2 (line 2 column 1)
// console.log(JSON.parse(jsonCorrected));/*
// {
//   name: 'John',
//   surname: 'Smith',
//   isAdmin: false,
//   friends: [ 0, 1, 2, 3 ]
// }
// */
//---------------------------------
