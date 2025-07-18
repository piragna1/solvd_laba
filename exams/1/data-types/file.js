//-----------------------------------------------------------DATA TYPES


//--------------------
//In JS exists two major groups of data types. Primitive and Object data type
//--------------------

//--------------------
//Primitive: Number, BigInt, String, Boolean, Symbol, Null, Undefined.
//--------------------

//--------------------
//Object: any value that is not primitive.
//--------------------

//--------------------
// //Number
// let n1 =1 ;
// let n2 =1.1 ;
// let n3 =Infinity ;
// let n4 ='100'/55.5;
// let n5 ='not a number'/1;
// let n6 =11111111111111111111111111111111n ;

// console.log(n1);//1 integer
// console.log(n2);//1.1 float
// console.log(n3);//Infinity 
// console.log(n4);//1.8018018018018018 dividing a string that represents a number by a number
// console.log(n5);//NaN
// console.log(n6);//11111111111111111111111111111111n big integer
//--------------------

//--------------------  //Number
// const a  = 5;
// console.log(a.constructor.prototype);//{}
// console.log(Object.getOwnPropertyNames(a.constructor));/*
// [
//   'length',            'name',
//   'prototype',         'isFinite',
//   'isInteger',         'isNaN',
//   'isSafeInteger',     'parseFloat',
//   'parseInt',          'MAX_VALUE',
//   'MIN_VALUE',         'NaN',
//   'NEGATIVE_INFINITY', 'POSITIVE_INFINITY',
//   'MAX_SAFE_INTEGER',  'MIN_SAFE_INTEGER',
//   'EPSILON'
// ]*
//  */
// console.log(Object.getOwnPropertyNames(a.constructor.prototype));/**
// [
//   'constructor',
//   'toExponential',
//   'toFixed',
//   'toPrecision',
//   'toString',
//   'valueOf',
//   'toLocaleString'
// ] 
// */
// console.log(a.toString());// 5
// console.log(a.toString);// [Function: toString]
//--------------------

//-------------------- Number

// console.log(Number.MAX_VALUE)//1.7976931348623157e+308

// console.log(Number.MAX_VALUE*2)//Infinity

// console.log(9283748591827384+1);//9283748591827384 precision lost (16 digits number)

// console.log(9283748591827384+1===9283748591827384); //true, precision lost (16 digits each)

// console.log(BigInt(9283748591827384)+BigInt(1)); //9283748591827385n, kept precision 

// console.log(BigInt(Number.MAX_VALUE))//179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368n

// console.log(BigInt(Number.MAX_VALUE)+BigInt(1))//179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858369n

//--------------------

//-------------------- String
// console.log("a");
// console.log('a ');
// console.log('');
// console.log(' ');
// console.log(" ");
// console.log(` a`);
// console.log("A \
// stringuilinguis");
// console.log('I \ am a developerrer');
// console.log('I\'m a developerrer');
//--------------------

//--------------------String
// let number=1;
// console.log(`the numbers is ${number}`);//
// console.log(`number added to itself results as: ${number+number}`);//
// console.log(`I can press enter here 
//     hahahahha
//     there is no problem
//     I still can asking the computer to show the number -> ${number}`);//
//--------------------

//--------------------  Boolean
// let b1=0;
// let b2=-0;
// let b3=NaN;
// let b4='';//empty string

// console.log(b1);//0
// console.log(b2);//-0
// console.log(b3);//NaN
// console.log(b4);//

// console.log(Boolean(b1)===false);//true
// console.log(Boolean(b2)===false);//true
// console.log(Boolean(b3)===false);//true
// console.log(Boolean(b4)===false);//true

// console.log(b4===false);//false

// console.log(1===true);//false
// console.log(Boolean(1)===true);//true
//--------------------

//-------------------- Null & Undefined

// console.log(typeof notCreatedVariable === 'undefined');//true

// console.log(typeof 0);// number

// console.log(typeof 10n);// bigint

// console.log(typeof true);//boolean

// console.log(typeof 'function');//string

// console.log(typeof Symbol('hola'));//symbol

// console.log(typeof Symbol.apply);//function

//--------------------

//-------------------- Object
// //Object litreal
// const obj1 = {name:'John pope'};
// console.log(obj1);//{ name: 'John pope' }

// //Object constructor
// const obj2 = new Object({name:"John pope"});
// obj2.lastName = "Wojtyla";
// console.log(obj2);//{ name: 'John pope', lastName: 'Wojtyla' }

// //Object.create() method
// // const obj3 = Object.create(1);//TypeError: Object prototype may only be an Object or null: 1
// const obj3 = Object.create({name:'carllitos'});//TypeError: Object prototype may only be an Object or null: 1
// console.log(obj3);//{}
// console.log(obj3.name);//carlitos
//--------------------

//-------------------- Multiplication * operator

// //Number + Number -> addition
// //Number + Number -> substraction

// //Number + String -> concatenation
// console.log(1+'carajos!')//1carajos!
// console.log(1+'200')//1200
// //Number - String -> concatenation
// console.log(1-'carajos!')//NaN
// //String + number -> concatenation
// console.log('carajos!'+1);//carajos!
// console.log('100'+1);//1001


// //Number * Number -> multiplication
// console.log(Infinity*0);//NaN
// console.log(Infinity*Infinity);// Infinity

// //String * Number -> NaN
// console.log('a'*1);//NaN
// console.log('1'*1);//1 :o

//--------------------

//-------------------- Divistion operator /
// //Number / Number -> division
// console.log(5/0.5);//10
// let z = 2.0 * -0.0;
// console.log(z);//-0
// console.log(3.0/0);//Infinity
// console.log(1.0/-0);//-Infinity
// console.log(1.0/-0 * -1);//Infinity
//--------------------

//-------------------- Modulus operator %
// //The rest of the division operation
// console.log(2%2); //0
// console.log(9%5); //rest: 4
// console.log(-12%5);//-2
// console.log(-4%2); //-0 :o
// console.log(-4%NaN); // Nan
// console.log(-NaN%-2);// Nan
//--------------------

//-------------------- Exponential operator
// console.log(-(4**2));//-16
// console.log(2**5);//32
// console.log(3**3);//27
// console.log(3**2.5);//15.588457268119896
// console.log(10 ** -2);//0.01
// console.log(2**3**2);//512
// console.log((2**3)**2);//64
// console.log((2**3)**2 === 2**6)//true
// console.log(2**(3**2));//512
// console.log(NaN**2);//NaN
//--------------------

//-------------------- Exponential operator
// console.log(-2**3); //An unary expression with the '-' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses.ts(17006)
// console.log(+2**3); //An unary expression with the '-' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses.ts(17006)
// console.log(~2**3); //An unary expression with the '-' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses.ts(17006)
// console.log(!2**3); //An unary expression with the '-' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses.ts(17006)
// console.log(~2); // -3 xd
//--------------------

//-------------------- Exponential operator
// console.log((-2) **3);//-8
// console.log((+2) **3);//8

// console.log(~(5**2));// ~25 = -26 (bitwise NOT) operation!

// //bitwise NOT: flips every value of the binary number

// //hepler: ~x = -(x + 1)

// /*JavaScript uses signed 32-bit integers for bitwise operations.
// 25 (decimal) in binary (32-bit) is:
// 0000 0000 0000 0000 0000 0000 0001 1001

// flipping:
// //1111 1111 1111 1111 1111 1111 1110 0110

// that is considered as a negative signed binary number with complements two

// which is equal to -26... because how complements two works.

// 1111 1111 1111 1111 1111 1111 1110 0101

// 0000 0000 0000 0000 0000 0000 0001 1010 -> 26
// */

// //APPLYING LOGICAL NOT:
// console.log(!(1**2));//false 
// console.log(!(-1));//false
// console.log(!(1));//false
// console.log(!(1));//false
// console.log(!(0));//true
//--------------------

//-------------------- Increment operator ++ (works the same with decrement `--`)
// let a = 2;
// console.log(a);//2
// let b = a++;
// console.log(a);//3
// console.log(b);//2 assigned first, then incrementing 'a'

// let c = 2;
// console.log(c);//2
// let d = ++c;
// console.log(d);//3 incrementing 'a' first, then assigning trhe value to 'd'
//--------------------

//-------------------- Substraction assignment operator -=
// let c = 3;
// c-=1;
// //c=2
//--------------------

//-------------------- Exponentiation assignment operator *=
// let a = 2;
// a*=2;
// console.log(a)//4
//--------------------

//-------------------- Left shift assignment operator <<=
// let yoo = 5;
// console.log(yoo<<=2); //Expected 20 (in binary 10100)
// //twice left shifting I suppose
//--------------------

//-------------------- Logical AND asssignment operator &&=

//both sides of the opeartion must be  truthy for &&= to work!

// let name = {
//     firstName:"Ram",
//     lastName:"",
// };

// console.log(name.firstName);

// name.firstName &&= 'Shyam';

// console.log(name.firstName); // it proceeds due to the logical AND assignment operator and both values are truthy.

// name.lastName &&= 'Varrrela';

// console.log(name.lastName); // '' Does not work because one of the values (name.lastName in this case ) is falsy. And the operation executes when both are truthy.

//--------------------

//--------------------Logical OR assignment operator ||=

//left side of the opeartion must be falsy for ||= to work!


// let name = {
//     firstName:"Ram",
//     lastName:"",
// };

// console.log(name.firstName);

// name.firstName ||= 'Shyam';

// console.log(name.firstName); // it DOES NOT PROCEED due to the logical OR assignment operator which does not work when both values are truthy.
// // for ||=  to work, the left hand side of the operation shouljd be FALSY!

// name.lastName ||= 'Varrrela';

// console.log(name.lastName); // '' It works because one of the values is falsy.
//--------------------

//-------------------- Logical nullish assignment operator ??=

//left sides of the opeartion must be  nullish for ??= to work!

// let x =12;
// let y =null;
// let z =13;

// //x is not nullish, so the assignment operation does not proceed.
// x ??= z;

// //y is nullish, so the assignment operation proceeds.
// y ??=x;

// console.log(x);//12
// console.log(y);//12

//--------------------

//-------------------- logical Nullish and OR assignment operators ??= AND ||=
/**
 * 
 * null ??= "default"-> changed
 * undefined ??= "default"-> changed
 * 
 * "" ??= "default"->unchanged
 * 0 ??= "default"->unchanged
 * false ??= "default"->unchanged
 * NaN ??= "default"->unchanged
 * 'hello' ??= "default"->unchanged
 * 42 ??= "default"->unchanged
 * 
 * 
 
 * null ||= "default"->changed
 * undefined ||= "default"->changed
 * "" ||= "default"->changed
 * 0 ||= "default"->changed
 * false ||= "default"->changed
 * NaN ||= "default"->changed
 * 
 * 'hello' ||= "default"->unchanged
 * 42 ||= "default"->unchanged
 */

//--------------------

//--------------------COMPARISON OPERATORS
/**
 * > greater than
 * < smaller than
 * >= greater or equal than
 * <= smaller or equal than
 * == not strictly equal than
 * === strictly equal than
 * != not strictly not equal than
 * !== strictly not equal than
 */
//--------------------

//-------------------- Comparison operators
// console.log(10>5)//true

// console.log(10 === '10');// false
// console.log(5 == '5');// true
// console.log('5'==5);// true
// console.log(NaN == NaN);// false
// console.log(0 == false);//true
// console.log('0 == null:',0 == null);//false

// console.log(5===6);//false
// console.log('5'==='5');//true
// console.log(5==='5');//false

// console.log(NaN===NaN);//false
// console.log(0===false);//false
// console.log(0===null);//false

//--------------------

//-------------------- Comparison operators
// console.log(5 >= 5);//true
// console.log('5' > "15");//true
// console.log(5>"5");//false
// console.log('5'>15);//false
////--------------------

//-------------------- Ternary operator
// condition ? trueExpression: falseExpression;
//--------------------

//--------------------
// let hour = 15;
// let message;
// if (hour < 12 ){
//     message = 'Good morning';
// }
// else{
//     message = 'Good afternoon';
// }
// console.log(message);//Good afternoon

// hour = 11;

// message = (hour < 12 ? 'Good morning' : 'Good afternoon');

// console.log(message);//Good morning
//--------------------

//-------------------- IN operator
// let languages = ['html', 'css', 'JS'];

// console.log (1 in languages);//true
// console.log (2 in languages);//true
// console.log (3 in languages);//false
//--------------------

//-------------------- IN operator
// let person = {
//     name:'Charles',
//     lastName:'Chaplin'
// };

// console.log('name' in person);//true
// console.log('address' in person);//false
//--------------------

//-------------------- instanceof OPERATOR
// let languages = ['html', 'css', 'JS'];

// console.log(languages instanceof Array);//true
// console.log(languages instanceof Object);//true
// console.log(languages instanceof String);//false
// console.log(languages instanceof Number);//false
//--------------------

//-------------------- BIGINT TYPE
// //parameter in decimal format
// console.log(BigInt('111111111111111111111111111111111111222'));//111111111111111111111111111111111111222n

// //parameter in hexadecimal format
// console.log(BigInt("0x1fffffffffffffeeeeeeeeeeaaaaaaaaaaaaa"))//44601490397061245952954092734661023138228906n

// //parameter in binary format
// console.log(BigInt("0b110101001010"));//3402n
// console.log(BigInt("1b110101001010"));//SyntaxError: Cannot convert 1b110101001010 to a BigInt

//--------------------

//-------------------- BIGINT TYPE
// console.log(typeof 100n === 100);//false
// console.log(typeof 100n === 'bigint');//true 

// console.log(100n < 101);//true
// console.log(200n < 301);//true
//--------------------

//-------------------- SORTING
// let arr = [4,2,5n,2n];
// arr.sort();//[ 2, 2n, 4, 5n ]
// console.log(arr);//[ 2, 2n, 4, 5n ]
// console.log(arr.sort());//[ 2, 2n, 4, 5n ]
//--------------------

//-------------------- OPTIONAL CHAINING
// // let Value = user.dog && user.dog.name; ///ReferenceError: Cannot access 'user' before initialization
// // let Value1 = user.dog?.name;//ReferenceError: Cannot access 'user' before initialization
// const user = {
//     dog:{
//         name:"Alex"
//     }
// };

// //short-circuit evaluation with the logical AND (&&) operator
// //It’s a safe way to access nested properties without throwing an error if a parent property is missing.
// let Value = user.dog && user.dog.name;//"If user.dog is truthy, then return user.dog.name; otherwise, return user.dog (which is likely undefined or null)."

// //🆚 Optional chaining version (modern way):
// //This does the same thing, but it's shorter and more readable.
// //equivalent to: let Value1 = (user.dog !== null && user.dog !== undefined) ? user.dog.name : undefined;
// let Value1 = user.dog?.name;

// //eg.
// let city = user.dog?.owner?.address?.city;

// console.log(Value);//Alex
// console.log(Value1);//Alex
// console.log(city);// undefined

// console.log(user.cat?.name);//undefined
// console.log(user.dog?.name);//Alex

// console.log(user.cat.name);//TypeError: Cannot read properties of undefined (reading 'name')
//--------------------
