//--------------------------ARRAYS IN JAVASCRIPT----------------------


const array = [];//empty array

//multi-data-type content array
const fruits = [
  "apple",
  {
    name: "bananas",
    quantity: 0,
  },
  'delete this',
  0,
  false
];

//PD:generally the data contained are related 


//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

//----------ways of INITIALIZING

//---`array literal` syntax
const arr=[];
let arr1=[];
var arr2=[];

//---`array constructor` syntax
const arr3 = new Array();

//--------
//--------





//-------------------       OPERATIONS

//accsesing data:
//Arrays are 0 indexed, meaning: first element is at index 0 and last is located in (array.length-1)

const languages =['js','python','c','java'];//length: 4
console.log(languages) //   ['js','python','c','java']

//first element located at index 0: js
console.log(languages[0]);//js

//last element located at index ((length-1)=4-1=3): java
console.log(languages[languages.length-1]);//java

// ELEMENTS ARE ALSO KNOWN AS `items`

//--------
//--------




//----------------------------MODIFY ARRAY CONTENT
//YOU CAN MODIFY THE ITEMS/ELEMENTS/CONTENT OF AN ARRAY

//by assignation
languages[0]='Pascal'; //js -> Pascal
console.log(languages[0]); // now 'Pascal'





//--------------------------ADDING CONTENT

//you can add  new items using methods

    //push() adds at the end

    //unshift() adds at the beginning
//





//-----------------------------REMOVING CONTENT

//methods:
        //pop() -> removes from the end

        //shift() -> from the beginning.

        //splice(x,y) -> keeps items from index `x` `y` items excluding the last one. The rest is removed.
            //this method modifies the 'target' array
//


//Examples
//x:0, y:2;
console.log(languages);//[ 'Pascal', 'python', 'c', 'java' ]
console.log(languages.splice(0,2)) // ['Pascal', 'python']. It took from 0 to 1 (excluding 2)

console.log(languages);// AND now languages is:[ 'c', 'java' ] because of the use of `splice()`










//--------------------------ARRAY LENGTH
let numbers = [1,2,3,4]; //length: 4

//is possible to modify length value:

//BY assignation:

//making it bigger: `empty` element/s may be generated
numbers.length = 5; 
console.log(numbers);//[ 1, 2, 3, 4, <1 empty item> ]
//
//making it smaller: elements may be deleted
numbers.length = 1;
console.log(numbers);//[ 1 ]
//

numbers = [1,2,3,4]; //length: 4

//Length also will change if you use `pop/shift` or `push/unshift` methods



//---------------------------------------ITERATION

//FOR LOOP
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

//FOR EACH `js built-in` method
numbers.forEach(element => {
    console.log(element);
})

/**in both cases the output is
1
2
3
4
*/




//-----------------------------------------CONCATENATION of arrays (using `concat()` method)





numbers = [1,3,5,7];

let evenNumbers = [2,4,6,8];

console.log(numbers.concat(evenNumbers)); //[1, 3, 5, 7, 2, 4, 6, 8] does not order







//-----------------------------------------CONVERTION to string



//USING     `tostring()`

console.log(numbers.toString()) //1,3,5,7



// USING `join()`

console.log(numbers.join('---'))// 1---3---5---7
//the output is also `string` data type









//-----------------------------------------CHECKING content existence





//does exist the element '9'?
//check with `includes()` method


console.log(numbers.includes(9));//result:false









//-----------------------------------------MODIFICATION/TRANSFORMATION using `map()` method


//I want to apply the same modification to every item so I use `map()`

//let us increment every item's value by 1:
let numbersIncremented = numbers.map(x => {
    return x+1;
})



//check the difference:

console.log(numbers);//[ 1, 3, 5, 7 ]

console.log(numbersIncremented);// EXPECTED: [ 2, 4, 6, 8 ]



//brief explanation of map:
/*
appllies a method to every item of the given array and returns the result
So, as an argument I passed a `callback` function (which is just a function) where I ask the program
to access `x` which is every item of the array, and store in it the returned value (which is x+1 in this case).
*/



//ENDs