//----------------------------------------------------------------------------------------Functions

//-------------------------Declaring a function:
// //1
// function function1(arguments){return 1;}
// //2
// const function2 = function(arguments){return 2;}
// //3
// const function3 = (arguments) => {return 3;}
//-------------------------

//-------------------------Arrow function declaration! () => {}

// //1 : standard!
// const function1 = (argument) => {return argument;};
// //2: 1 argument without parenthesis!
// const function2 = argument1 => {return argument1;}
// //3: standard with multiple arguments
// const function3 = (argument1, argument2)=>{return argument1+argument2;};
// //4: setting default values for arguments in case they value is not entered when the function is called
// const function4 = (argument1,argument2=2) => {return argument1+argument2;};

//-------------------------

//-------------------------

// const doSomething = (foo=1, bar = 'hey') => {return foo+bar;};
// const doSomething1 = function(...args){return args;};

// console.log(doSomething(3));//3hey
// console.log(doSomething());//1hey

// const args = [2,'ho!'];
// console.log(doSomething1(args));//[[2,'ho!']]
// console.log(doSomething1(args.concat([1,2,3,4,5,6])));/* [
//   [
//     2, 'ho!', 1,
//     2, 3,     4,
//     5, 6
//   ]
// ]*/

//-------------------------

//------------------------- passing object arguments in the parameters of the function

// const doSomething = ( {foo=1, bar='hey'} ) => {
//     console.log(++foo);
//     console.log(bar);
// }

// //at least, an empty object must be passed through the parameters of the function
// // doSomething();//TypeError: Cannot read properties of undefined (reading 'foo')

// //empty object
// doSomething({});/* 2
// hey*/
// const argument = {};
// doSomething(argument);/* 2
// hey*/

// //note that when the properties indicated in the signature of the function don't exist in the object passed as argument, they will be generated with the set default values.

// //In this case there already exist foo and bar properties with their own values, and they will not be overriden.
// const argument1 = {foo:2,bar:'ho!'};
// doSomething(argument1);/* 3
// ho!*/

//-------------------------

//------------------------- Assignation of the return value of an executed function:

// const doSomething = (foo=1,bar='hey') => {}
// console.log(doSomething());//undefined

// const doSomething1 = () => {return 'test';};
// const result = doSomething1();
// console.log(result); // test

//-------------------------

//------------------------- 

// const doSomething = () => {
//     return ['Roger', 6];
// }

// const doSomething1 = () => {
//     return {name:'Roger', age:6};
// }

// console.log(doSomething());//[ 'Roger', 6 ]

// //Array destructuring
// {
// const [name, age] = doSomething();
// console.log(name);//Roger
// console.log(age);//6
// }

// //Object destructuring
// {
//     const {name, age} = doSomething1();
//     console.log(name);//Roger
//     console.log(age);//6
//     console.log({name:name, age:age});//{ name: 'Roger', age: 6 }
// }

//-------------------------

//------------------------- Nesting functions! 😵
// const doSomething = () => {

//     //declaring a function inside
//     const doSomethingElse = () => {}

//     //execution
//     doSomethingElse();

//     return 'test';//return of outer function!

// }

// console.log(doSomething());//test
//-------------------------

//------------------------- Execution of functions of an object
// const car = {
//     brand:'Ford',
//     model:'Fiesta',
//     start: () => {
//         console.log('started');
//     }
// };
// car.start();//started
//-------------------------

//------------------------- Execution of functions of an object
// const car = {
//     brand:'Ford',
//     model:'Fiesta',
//     start: () => {
//         console.log(`${this.brand} ${this.model} has started`);
//     },
//     stop: function(){
//         console.log(`${this.brand} ${this.model} has stopped`);
//     },
//     start1: function(){
//         console.log(`${this.brand} ${this.model} has started`);
//     }
// };
// // car.start();//TypeError: Cannot read properties of undefined (reading 'brand')
// car.stop();//Ford Fiesta has stopped
// car.start1();//Ford Fiesta has started

// /**It is curious how when you use an arrow function when declaring a method inside an object then you cannot access its properties
//  * by using `this`.
//  */
//-------------------------

//------------------------- Execution of functions of an object
// const test = {
//     fn:function(){
//         console.log(this);
//     },
//     fn1: () => {
//         console.log(this);
//     }
// }
// test.fn();//{ fn: [Function: fn], fn1: [Function: fn1] }
// test.fn1();//undefined
//-------------------------

//------------------------- Inmediately Invoked Function Expression (IIFE)
// ;(function(){
//     console.log('executed');
// })();//executed

// let ret = (()=>'eeeexecuted!')();
// console.log(ret);//eeeexecuted!

// ;(()=> console.log('EXXXXecution!!!!!!!'))();//EXXXXecution!!!!!!!
//-------------------------

//------------------------- Assigning the result of an Inmediately Invoked Function Expression to a variable
// const something = (function(){return 'IIFE';})();
// console.log(something); // IIFE
//-------------------------

//------------------------- Hoisting (working with function declaration)
// doSomething();//did something
// function doSomething(){
//     console.log('did something');
// }
//-------------------------

//------------------------- Hoisting: do not work with function expressions!
// doSomething();//TypeError: doSomething is not a function
// var doSomething = function doSome(){
//     console.log('did something');
// }
//-------------------------

//-------------------------

// const myFunction = function () {}

// const myFunction1 = () => {}

// const myFunction2 = (a,b) => a+b;

// const myFunction3 = argument => argument/2;
// console.log(myFunction3(10));//5

//-------------------------

//------------------------- 

// const myFunction = () => ({value:'test'});
// const myFunction1 = () => {value:'test'};

// console.log(myFunction());//{ value: 'test' }
// console.log(myFunction1());//undefined !!!!!!!!!!!!!!!!!!!!!!!!!!

// const obj = myFunction();
// console.log(obj);//{ value: 'test' }


//-------------------------

//------------------------- Function expression usage example:

// //this is a function expression where:
// // const bark = dog => {
// //     //we generate this variable where we stored the value we received from the parameters (the argument);
// //     const say = `${dog} barked!`;
// //     //And we inmediately use the IIFE thecnique in order to console log the variable value!
// //     (() => {console.log(say)})();
// // }

// // //Now we can execute the function!
// // bark();//undefined barked!          OOPS! forgot to pass an argument to the function parameters!
// // bark('Roger');//Roger barked! 🥹👍
// //-------------------------

// //------------------------- Function expression usage example:
// //Here we are using function expression to assign to a variable a function that receives 1 value as argument, prepare a variable,
// //and  then return a new function that consoles log the variable prepared.
// const prepareBark = dog => {
//     const say = `${dog} barked!`;
//     return () => console.log(say);
// }

// //now we can execute `prepareBark`
// prepareBark();//output: nothing 🤔
// prepareBark('Roger');//output: nothing

// //Ok... I think we have to store again the value that is being return from the inner fufnction of prepareBark()
// //So...

// const result = prepareBark('Roger');

// result();//Roger barked!
// //O...key....

// prepareBark('Roger')();//Roger barked! 😯

// //What is happening?

// //prepareBark('Roger') is returning a function. But that function is not executed... so that is why using () for execution makes the  output (function) consoling log the variable `say` of prepareBark('Roger');

// const result1 = prepareBark('Maximus')();//Maximus barked!
// console.log(result1);//undefined
// //Here we are storing the return value of the inner function of prepareBark(), WHICH is not explicited so it is undefined...
// //But also we are executing that inner function and that is why `Maximus barked!` is being console logged.


// const innerFunction = prepareBark('Matheu');
// //Using function expression, `innerFunction` is storing the inner function of prepareBark function with the argument's value settled as 'Matheu';
// //So now... theoretically if we run innerFunction... which holds this ->  return () => console.log(say); <- we would be executing that arrow function:
// //The arrow function: -> () => console.log(say) <- which executes console.log(say) and return nothing!
// //Okey, let us execute the function:
// innerFunction();//Matheu barked!

// //GGGGREAT! 🥹👍

//-------------------------

//------------------------- Function expression usage example:
//I was wondering why the name of prepareBark... and the next slides explained me that
// const prepareBark = dog => {
//     const say = `${dog} barked!`;
//     return () => console.log(say);
// }
// const matheuBark = prepareBark('Matheu');
// const sydBark = prepareBark('Syd');

// matheuBark();//Matheu barked!
// sydBark();//Syd barked!
//-------------------------

//------------------------- Function expression example

// const circleArea = function(radius){
//     return (radius**2)*Math.PI;
// }


// //So... here we have a function expression. 
// //counter now holds a function that initializes a variable with 0 and... then returns a function that increment the value of the variable
// //and then returns that value...
// const counter = (function(){ //my godness
//     let initValue= 0;
//     return function(){
//         initValue++;
//         return initValue;
//     }
// });
// //So... how would it works?

// //Let us assign to a variable the function that counter is holding...
// const counter1=counter();
// //ooooooookey. Now counter1 is storing the same function than counter.

// //what can we do with counter 1 now???? 🤔🤔🤔
// console.log(counter1);//[Function (anonymous)]

// console.log(counter1());//1
// console.log(counter1());//2
// console.log(counter1());//3
// console.log(counter1());//4
// console.log(counter1());//5
// console.log(counter1());//6
// console.log(counter1());//7
// console.log(counter1());//8
// console.log(counter1());//9
// console.log(counter1());//10
// console.log(counter1());//11
// //Allright! It seems like the value of the variable is being tracked...
// //Oooo...keey... it makes sennse to think it like an object...
// //An object with properties... an initValue property and another anonymous property which is a function...

// console.log(counter1.initValue);//undefined
// //ok that does not work.

// //But there still is the tracking of the variable... although we cannot acces the variable... we are just able to see its actual value when we execute the function and it is returned!
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// console.log(counter1());//30

// //Allright! Interesting!

//-------------------------

//------------------------- 

// let femaleCounter = 0;
// let maleCounter = 0;

// function isMale(user){
//     if (user.sex === 'man'){
//         maleCounter++;
//         return true;
//     }
//     return false;
// }

//-------------------------

//------------------------- 

// for (let index = 0; index < 1000; index++) {
//     console.log(fun(10));
// }

// let result = fun(10);

// for (let index = 0; index < 1000; index++) {
//     console.log(result);
// }
// const incrementNumbers = function(numbers){}

//-------------------------

//-------------------------
// import { deepEqual } from 'assert';

// //equals check for references
// //while deepEqual check for object content!

// function incrementNumbers(arr) {
//     return arr.map(num => num + 1);
// }

// let list = [1,2,3,4,5];

// let result = deepEqual(incrementNumbers(list),[2,3,4,5,6]);
// console.log(result);//undefinded

//-------------------------

//-------------------------
// const arr1 = [1,2,3];
// const arr2 = [];

// for(let i = 0; i <arr1.length;i++){
//     arr2.push(arr1[i]*2);
// }

// console.log(arr2);//[ 2, 4, 6 ]
//-------------------------

//-------------------------
// const arr1 = [1,2,3];

// const arr2 = arr1.map(function(value){
//     return value*2;
// });

// console.log(arr2);//[ 2, 4, 6 ]
//-------------------------

//-------------------------

// //function declaration (not expression);
// function computed(){
//     console.log('2000s has passed');
//     return 'a result'
// }

// //function declaration
// //argument: fn
// function cached(fn){
    
    
//     //creating a null object and assigning it to the cache variable.
//     const cache = Object.create(null);
    

//     //I think the purpose of it (`cached`) is to apply function expression in order to each variable store its own cache object.
//     //Also to have its own modification methodology, becuase we are receiving a callback function in order to determine it!

//     //And then, with that variable, we will have the possibility of executing the function below passing the `str` argument value!!!!

//     //Meaning that we will be able to access and modify the cache object everytime we call that function but always under the 'fn' argument's rules.

//     //cached function will return this function called cachedFn() which accepts an argument: 'str'
//     return function cachedFn(str){
//         //we are accessing the null object stored in the `cache` variable by doing [str]?
//         //Yes, we are accessing its [str] property

//         //We are checking if it is falsy, if it exists or is undefined...
//         if (!cache[str]){
//             //In case it is falsy:

//             //whe initialize this variable and store the execution of fn(str) passing str
//             let result = fn(str);

//             //here we are updating the property value in the cache object
//             cache[str] = result;
//         }
//         //and returning it
//         return cache[str];

//         //which means that in the case in which the property exists it will not be modificated and just returned!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         //so we can acess without changing anything!!!!!!!!!!!!!!!
//     }
// }

// // console.log(Object.getOwnPropertyNames(Object.create(null)));//[]

// const test = Object.create(null);


// //now test1 holds a cache object and from it we can call the inner function passing a value to modify the cache.
// const test1 = cached((str)=>str);

// console.log(test1('hello'));//hello


// //It was a very complex example... I do not even know how I did to approach it haha!
//-------------------------

//-------------------------
// let fooFirstExecutedDate = null;
// function foo(){
//     if (fooFirstExecutedDate!=null){
//         return fooFirstExecutedDate;
//     }
//     else{
//         fooFirstExecutedDate = new Date();
//         return fooFirstExecutedDate;
//     }
// }

// //Okey! So everytime we execute the function the value of the variable will be updated and synchronized with the actual time!

// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
// foo();
// console.log(fooFirstExecutedDate);
//-------------------------

//------------------------- Passing less or more arguments that explicited to a function
// // function add(a,b,c){
// //     return a+b+c;
// // }

// // console.log(add(1,2,3));//6
// // console.log(add(1,2));//NaN
// // console.log(add(1,2,3,4,5,6));//6

// //-------------------------

// //------------------------- Function nesting

// //Here we are executing a function declaration. Declaring a function called `curry` that accepts one argument called `fn`.
// function curry(fn){

//     //If `fn` accepts 1 argument or no one, the function curry return the function passed as argument directly...
//     if (fn.length<=1){return fn;};


//     //what happens it that is not the case??? let us see!


//     //we generate this variable `generator` assigning with function expression
//     const generator = (...args) => {



//         //what generator will do?




//         //if the function passed to curry accepts as many arguments as the function stored in `generator`:

//         if (fn.length === args.length){

//             //it returns ~fn~ with the arguments of ``generator``

//             return fn(...args);

//         }


//         //WHAT DOES `generator` DO otherwise?

//         //MEANING suppossed -> fn accepts MORE arguments that `generator` has:

//         else {

//             //  `generator` returns a new arrow function .

//             //IT holds in the parameters `...args2` meaning, as many arguments as you pass...


//             //this is another arrow function that `generator` would return in case of being called... and getting into the 'else' section
//             return (...args2) => {

//                 //that function (which `generator` returns) when called, will return the mismisima variable `generator` 😭😫😮‍💨😵😖😡🤬
//                 //which is a function... so... in this case...
//                 //generator will return a new version of itself with new arguments passed....
//                 return generator (...args,...args2);
//             }
//         }

//     }

//     //finally from curry we return the variable generator
//     //which stores a function that:
//         //checks if curry holds as an argument a function (`fn`) with enough arguments.
//             //In which case `fn` is called normally with those arguments and returned into generator.
//                 //and then `generator` is returned... being the result of calling the `fn` normally
//         //and otherwise: we will store in generator a function that:
//             //return `generator` istelf but with new arguments passed getting closer to the if() true condition block execution
//     return generator;
// }

// // const fun = (a,b,c) => {}
// // const fun1 = (a,b,c,d) => {}
// // console.log(fun.length);//3
// // console.log(fun1.length);//4
// // console.log(((a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) => {}).length)//16

// const add = (a,b,c,d,e,f,g) => {return a+b+c+d+e+f+g;};
// var gen = curry(add);
// console.log(gen);//[Function: generator]
// gen = gen(1); //generator(1)
// gen = gen(2); //generator(1,2)
// gen = gen(3); //generator(1,2,3)
// gen = gen(4); //generator(1,2,3,4)
// gen = gen(5); //generator(1,2,3,4,5)
// gen = gen(6); //generator(1,2,3,4,5,6)
// gen = gen(9);// add(1,2,3,4,5,6,9); finally this returns with all the arguments passed and acummulated the execution of the execution of
// //the original `add` function with all the arguments: 1,2,3,4,5,6,9
// console.log(gen);//30
// /* what is curious is how every generator 'remember' which es the function that they have to execute for the
// return value in case of reaching the correct amount of arguments passed 😭🤔*/
//-------------------------

//-------------------------
// //function expression
// let toUpperCase=function(x){return x.toUpperCase();};

// let hello = function(x) {return 'HELLO, '+ x;};

// let greet = function(x){
//     return hello(toUpperCase(x));
// }

// //funcion expression
// let compose = function(f,g){
//     //variable compose will store a function that receives two arguments and:
//     //returns another fucntion that receives 1 argument
//     return function (x){
//         //which:
//         //returns the execution of the first top argument `f` holding the second top argument `g` as argument which executes with `x` as argument.
//         return f(g(x));
//     }
// }

// //This way, we can ellaborate another way of greeting
// let greet1 = compose(toUpperCase,hello);
// console.log(greet1('jjjhonies'));//HELLO, JJJHONIES

// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! thas is awesome and complex 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫

//-------------------------

//-------------------------
function compose(){

    var args = arguments;

    var start = args.length-1;//starts by the last propertie of the `arguments` object. 

    //`compose()` return this function... that:
    return function(){

        //generates this variable i which is the key of the last property of the `arguments` object.
        var i =start;

        //generates this variable result assigning:
        //the result of executing over the arguments[start] value the apply function with `this` and `arguments` passed as arguments.
        var result = args[start].apply(this, arguments);

        //loops over until i is falsy
        //reassigning to `result` the result of executing on args[i] the `call` method passing `this` and `result` itself as arguments.
        while (i--) result = args[i].call(this,result);

        //after the while loop returns result'
        return result;
    }

}
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------

//-------------------------
//-------------------------
