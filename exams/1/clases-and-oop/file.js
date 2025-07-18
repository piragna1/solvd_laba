//Clases and OOP (object oriented programming)


//extensible `program-code-templates` for creating objects with initial values as state (member variables) and implementation
// of behaviour (member methods/functions)

//--------------
// class MyClass{ //class
//     constructor(memberVariable){//constructor
//         this.memberVariable = memberVariable;//member variables
//     }
//     method(){}//member method
//     method1(){}//member method
// }

//--------------
//constructor () is a method that is called from the new() operator:
// let myClass = new MyClass();

//--------------



//--------------
//check: typeof 'className'.
// console.log(typeof MyClass); // FUNCTIONNNN!!!
// console.log(MyClass)
//So in JavaScript classes are considered as functions!
//MyClass becomes a function, a constructor function

//--------------


//--------------
//Then, in the `prototype` of the class all diferent methods of it are stored.
//When you call a method of an instace of a class, the program looks for that method within the class's prototype.

//that being said it will be interesting to see:
// console.log(MyClass === MyClass.prototype.constructor)
//or
// console.log(Object.getOwnPropertyNames(MyClass.prototype));//output: [ 'constructor', 'method', 'method1' ] 😮
//or
// console.log(MyClass.prototype) // {}
//or
// console.log(MyClass.prototype.method)//[Function: method]


//--------------





//--------------
//You can declare a class without using `class` keyword and using `function` keyword instead:
// function User(name){
//     this.name = name;
// }
// User.prototype.sayHi = function(){
//     console.log(`Hi I am ${this.name}`)
// }
// console.log(User);//[Function: User]
// console.log(User.prototype.sayHi)//[Function (anonymous)]
// console.log(Object.getOwnPropertyNames(User.prototype))//[ 'constructor', 'sayHi' ] (note that the field name does not appear)
// console.log(Object.getOwnPropertyNames(User))//[ 'length', 'name', 'prototype' ]
// console.log(User.name)//User
// console.log(User.length)//1
// console.log(User.prototype)//{ sayHi: [Function (anonymous)] }


// let user = new User('John');
// user.sayHi()
//--------------



//--------------

// CLASS declaration vs FUNCTION declaration
/*  
1: class's methods are labelled with [[IsClassConstructor]]:true internal property.
2: class's methods are not enumerable
3: inside class declarations 'use strict' mode is automatically activated
*/
//--------------




//--------------

// //class expression 😵
// let Person = class {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){console.log(`Hi I am ${this.name}`)}
// }

// let person = new Person("Pope John!");
// person.sayHi();//Hi I am Pope John!

// //So? Also works!

// //Also... you can do something like this!
// new Person('John').sayHi();//Hi I am Jon XD
// //You are generating an instance but not storing it... which is enough for running some method of the class's
// //instance. 👍

// //let's see...
// console.log(new Person('Carl'));//Person { name: 'Carl' }
// console.log(person)//Person { name: 'Pope John!' }
// // you can see both instances proyected there in the output...
// //Although, the first one is not stored in a variable.

//--------------







//--------------


//another class expression example:
// let User = class MyClass {
//     sayHi(){
//         console.log(MyClass)//[class MyClass]
//         console.log(User)//[class MyClass] 😮😵
//     }
// }

// User.prototype.sayHi()
/*OUTPUT
[class MyClass]
[class MyClass] */

// console.log(MyClass)//ReferenceError: MyClass is not defined
//You can access 'MyClass' inside User class
// console.log(User)//[class MyClass] 👍

// let u = new MyClass();//ReferenceError: MyClass is not defined
// let u = User;
// console.log(Object.getOwnPropertyNames(u.prototype)) //[ 'constructor', 'sayHi' ]
// console.log(Object.getOwnPropertyNames(User.prototype))//[ 'constructor', 'sayHi' ]

// let u = new User();
// u.sayHi();
// /*OUTPUT
// [class MyClass]
// [class MyClass] */

//--------------





//--------------

// GET and SET class methods
//Get -> for getting information
//Set -> ... XD, setting information


// class User{
//     constructor(name){ //constructor calls the setter function
//         this.name=name; 
//     }
//     get name(){
//         return this._name;
//     }
//     set name(input){
//         //some validation of data here!
//         if (input.length < 4) {
//             console.log('names must have 4 characters or more!');
//             return
//         }
//         this._name=input
//     }
// }

// let u1 = new User('cha');
// console.log(u1.name);//undefined
// u1.name = 'Cha';//names must have 4 characters or more!
// u1.name = 'Charles';
// console.log(u1.name);//Charles 👍
//--------------







//--------------

// //CLASS FIELD

// class User{
//     name='defaultName!' // this is a class field
//     // constructor(){}//you can avoid the constructor. I can generate itself automatically (but empty)
//     sayHi(){
//         console.log(`Hi I am ${this.name}`)
//     }
// }

// let user = new User();
// user.sayHi()//Hi I am defaultName!

// // CLASS FIELDS do not appear on classes prototypes!

// console.log(user.name);//defaultName!
// console.log(User.prototype.name);//undefined

//which makes sense because each instance must have their own name

//--------------




//-------------------------------------------------

//CLASS INHERITANCE 
//A way through which a class can extend members of another (meaning, class fields, methods and also the constructor)
//For doing so, we use `extend` keyword.

//example:
// class Animal {
//     name="John";
//     constructor(name) {
//         this.speed = 0; //default value
//         this.name = name; //assigned by setter, receiving value from argument of constructor method
//         console.log(`Animal created! Name: ${this.name}`)
//     }

//     run(speed) {
//         this.speed = speed; //updates speed
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0; //set speed to 0
//         console.log(`${this.name} stands still.`);
//     }
// }

//----------------

// //inheritance here:

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides!`);
//     }

//     stop() {
//         super.stop();
//         this.hide();
//     }
// }

// //When the program does not not found a method in the Rabbit.prototype, it automatically looks for the method
// //in the superclass (Animal in this case).
// //For example, when calling run

// let rabbit = new Rabbit('Gray Rabbit');

// rabbit.hide();//Gray Rabbit hides!
// rabbit.run(10);//Gray Rabbit runs with speed 10.
// //Rabbit class does not have run method implemented so the program look after if inside the Animal superclass.

// //and check this:
// console.log(Rabbit.prototype)//Animal {}
// console.log(Animal.prototype)//{}
// console.log(Object.getOwnPropertyNames(Rabbit.prototype))//[ 'constructor', 'hide', 'stop' ]
// console.log(Object.getOwnPropertyNames(Animal.prototype))//[ 'constructor', 'run', 'stop' ]
// //so... when calling run() from a Rabbit instance, go to Animal class.prototype and execute
//----------------


// -----------------------

// // `super` keyword
// // it is used when you want to a parent class's method or constructor
// class Bird extends Animal {
//     flying=false;
//     constructor(name,species){ //here, we are `overriding` parent class's constructor
//         super(name); //HERE! super() is calling the constructor() method in its parent class Animal
//         this.species= species;
//     }
//     fly(){
//         this.flying = true; //calling setter
//         console.log(`${this.name} starts flying!!`);
//     }
//     stop(){
//         super.stop();//calling parent's stop method
//         //here you add functionality if needed
//         if (this.flying){
//             console.log(`${this.name} starts falling !`)
//             this.flying=false;
//         }
//     }
// }

// let bird = new Bird('Charles', 'Bienteveo');
// bird.fly();//Charles starts flying!!
// bird.stop();
// /* output;
// Charles stands still.
// Charles starts falling !*/
// console.log(bird.flying)//false

// //So... you are `Overriding` stop method, meanning that you do the same than the parent class
// //but also adding new own Bird's class functionality

//-------------------




//------------------- derived constructor in derived classes
// class Bird extends Animal {
//     flying=false;
//     constructor(name,species){ //here, we are `overriding` parent class's constructor
//         this.name=name;
//         this.species= species;
//         //this will lead to an error because it is lacking of the use of the super() constructor.
//     }
//     fly(){
//         this.flying = true; //calling setter
//         console.log(`${this.name} starts flying!!`);
//     }
//     stop(){
//         super.stop();//calling parent's stop method
//         //here you add functionality if needed
//         if (this.flying){
//             console.log(`${this.name} starts falling !`)
//             this.flying=false;
//         }
//     }
// }
// let bird = new Bird('charels', 'bienteveo');/*ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor */
//Derived constructor functions has an internal property called and setted like this: [[ConstructorKind]]:"derived"
//-------------------




//--------------------------------- class fields
// class Animal {
//     name="animal";
//     constructor(){
//         console.log(`new animal created! Its name: ${this.name}`)
//     }
// }

// //we can override class fields to set new default values.
// class Rabbit extends Animal {
//     name = "rabbit" //overriden class field
//     //omitting constructor: calls the parent constructor
// }
// let animal = new Animal();//new animal created! Its name: animal
// let rabbit = new Rabbit();//new animal created! Its name: animal
// console.log(rabbit.name);//rabbit🤔🤔🤔🤔
// //what happened?
// /* There is something in the order of execution of initializations
// Before any class field for the rabbit instance is generated, the parent class fields first initializes
// and then the parent constructor() executes... Just after that the program starts generating the information
// for the child class... so when doing console.log in the super() constructor there is no access to
// the class field of the Rabbit class. In contrast, the Animal `name` class field is being accessed.
// */


//---------------------------------




//--------------------------------- class fields

// class Animal {
//     name="animal";

//     showName(){
//         console.log('animal:', this.name)
//     }
//     constructor(){
//         this.showName();
//     }
// }

// class Rabbit extends Animal {
//     name = "rabbit";
//     showName(){
//         console.log('rabbit:', this.name);
//     };
// }

// new Animal();//animal: animal -> expected 
// new Rabbit();//rabbit: animal -> seems like child class's showName() method is being accessed but not so with its class field.
//---------------------------------




// //--------------------------------- static methods
// // It is a method that belong to a class, and no object instance is needed in order to access it.
// class Dog{
//     static bark(){
//         console.log('GUAU!');
//     }
// }
// class Bulldog extends Dog{
// }
// Dog.bark();
// Bulldog.bark();
// // so we are accessing to a class method without initializing any object.
// console.log(Object.getOwnPropertyNames(Dog))//[ 'length', 'name', 'prototype', 'bark' ] bark method is at the same level that prototype object !
// console.log(Object.getOwnPropertyNames(Dog.prototype))//['constructor'] no bark in here.

//---------------------------------

//--------------------------------- static class fields
// class Dog{
//     static animal = 'dog';
//     static bark(){
//         console.log('GUAU!');
//     }
// }
// class Bulldog extends Dog{
// }
// console.log(Dog.animal);//dog
// console.log(Bulldog.animal);//dog

// console.log(Object.getOwnPropertyNames(Dog))//[ 'length', 'name', 'prototype', 'bark', 'animal' ]
// //so every static thing is at the same level as prototype... not being part of it.

// console.log(Object.getOwnPropertyNames(Dog.prototype))//[ 'constructor' ]
//---------------------------------





//--------------------------------- INTERNAL and EXTERNAL interfaces in OOP
// //internal interfaces such as: private/protected class fields and methods!
//     // protected: members accessible from the class that defines them and also derived classes.
//     // private: members accesible inside the class that defines them.
// //external: public fields and class methods accessible from outside the class callings.

// class CoffeeMachine{
//     //underscore makes it protected.
//     _waterAmount= 0;
//     constructor(power){
//         this._power = power;//underscore here too!
//     }
//     set _waterAmount(value){
//         if (value<0){
//             console.log('Please set a value greater than 0!')
//             return
//         }
//         this._waterAmount=value;
//     }
//     get _waterAmount(){
//         return this._waterAmount;
//     }
//     //lets make `power` field readonly.
//     //for that just create a getter method (not a setter since we do not want never to change its value)
//     get power(){
//         return this.power;
//         //not that if you do not create it, then this property will be readable and writable...
//     }
// }

// let coffemach=new CoffeeMachine(100);

// console.log(coffemach._power)//100

// // console.log(coffemach.power) //RangeError: Maximum call stack size exceeded
// //it is recalling the method over and over again... 

// //let us try to change the field's value to 50.
// // coffemach.power=50;//TypeError: Cannot set property power of #<CoffeeMachine> which has only a getter
// // coffemach._power=50;//TypeError: Cannot set property power of #<CoffeeMachine> which has only a getter


//---------------------------------



// //--------------------------------- private class fields/members

// class CoffeeMachine{
//     //hashtag makes it private.
//     #waterAmount= 0;//private class field
//     #power=0;//private class field
//     constructor(power){
//         this.#power = power;
//     }
//     set waterAmount(value){
//         if (value<0){
//             console.log('Please set a value greater than 0!')
//             return
//         }
//         this.#waterAmount=value;
//     }
//     get waterAmount(){ //so from this getter we can access to the information about the water amount...
//         return this.#waterAmount;
//         //note:if it did not exist it would not be possible to read this field...
//     }
// }

// let coffeMachine = new CoffeeMachine(10);
// console.log(coffeMachine.power)//undefined since there are not getter providing this information.
// console.log(coffeMachine.waterAmount)//0. We got a value because the inner getter method provided it.
// coffeMachine.waterAmount=1000; //we can modify because there exists a class's setter.
// console.log(coffeMachine.waterAmount)//1000
// CoffeeMachine.prototype.setPower = function(value){
//     this.#power = value; // not possible.
// }
// //if we had declared a getter for the power value we had been able to unless accessing its current value... 
//---------------------------------






//---------------------------------             SOLID PRINCIPLES OF OOP

//---------S: single responsibility principle
// //A class must have just one defined responsibility

// //WITHOUT SRP:
// class User{
//     constructor(name){
//         this.name=name;
//     }
//     saveToDatabase(){
//         //save user to database
//     }
//     sendEmail(){
//         //send welcome email to the user
//     }
// }


// //WITH SRP:
// class User{
//     constructor(name){
//         this.name=name;
//     }
// }

// class UserDatabase{
//     saveToDatabase(){}
// }

// class EmailService{
//     sendEmail(){}
// }
// //so: 1 class, 1 responsibility
//--------------------------------

//---------OCP: Open Closed Principle
/ * Classes are oppened for extension but are closed for MODITIFATION*/
//WITHOUT OCP:


//-------------

//WITH OCP:
//--------------------------------












//---------LSP: Lyskov substitution principle
/* If a given program works with a given superclass, then any derived class of it must not lead to a 
misfunction of the normal execution of the program*/

//--------------------------------









//---------ISP: Interface segregation principle
//

//Example: instead of creating an Animal class with walk() and swim() methods, create 
//a Walker class extending from Animal for animals that can walk and
//a Swimmer class extending from Animal for animals that can swim...

//Without ISP:


//With ISP:
//--------------------------------








//-----------------------DIP:Depepndecy Inversion Principle
//1- Low level methods must not depend on high level methods. It must be the other way.
//2- Abstraction cannot depend on details but details must depend on abstraction.



//-----------------------


//--------------------------------------------------------------------------------

