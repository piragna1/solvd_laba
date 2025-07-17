//                                                                              BIG O NOTATION

//What is?
// //General categorization based on time/memory consumption of a given algorithm based on input

//Examples
//O(n) -> the consumption of a given algorithm will grow depending on `n` (linear increment)
//O(n^2) -> exponential increment
//O(log n) -> logaritmic increment
//...

//Why use it?
//It is a decision-making tool at the time of choosing, for example, a data structure for a given situation

//----------------------------------------

//----------------------------------------common Consideration

/**if an algorithm for example makes an iteration over an input it is expected the `running time` to be O(n).
function sumCharCodes(needle) {
    let sum = 0;

    for (let i = 0; i < needle.length; i++) {
        sum += needle.charCodeAt(i);
    }
}
*/

// ----------------------------- So.... here is another example

function sumCharCodes(needle) {
  let sum = 0;

  for (let i = 0; i < needle.length; i++) {
    sum += needle.charCodeAt(i);
  }

  for (let i = 0; i < needle.length; i++) {
    sum += needle.charCodeAt(i);
  }

  return sum;
}

// It should be O(2n) since it is looping twice over the given input.
// In Big O Notation constants are dropped.
// So It keeps being O(n)...





/**-------------------------------------------------- Take the following examples:
N = 1; O(10N) = 10; O(N^2) = 1 (exponential is 10x smaller)
N = 5; O(10N) = 50; O(N^2) = 25 (exponential is 2x smaller)
N = 100; O(10N) = 1,000; O(N^2) = 10,000 (exponential is 10x bigger) 
N = 1,000; O(10N) = 10,000; O(N^2) = 1,000,000 (exponential is 100x bigger) 
N = 10,000; O(10N) = 100,000; O(N^2) = 100,000,000 (exponential is 1000x bigger)
 ------------------------------------------------------*/






/*---------------------------Key concepts to understand:

•Growth is with respect to input. 
•Constants are dropped. 
•Measure the worst case(most of the time)
*/


//-----------------------------------------TIPES OF GROWTH in increasing order
/*
-O(1) constant
-O(log n) logarithmic
-O(n) Linear
-O(n log n) linearithmic
-O(n^2) quadratic
-O(2^n) exponential
-O(n!) factorial
--------------------------------------
*/





/**-------------------------------------OTHER EXAMPLES 
 * 
 * 
 * 
 * 
*/

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low >= high) return;
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
}


function sumCharCodes1(needle) { //quadratic
  let sum = 0;
    let counter = 0;
  for (let i = 0; i < needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
        sum += needle.charCodeAt(j);
        counter++;
    }
  }
console.log(counter)

  return sum;
}

function sumCharCodes2(needle) { //
  let sum = 0;
    let counter = 0;
  for (let i = 0; i < needle.length; i++) {
    for (let j = i; j < needle.length; j++) {
        sum += needle.charCodeAt(j);
        counter++;
    }
  }
console.log(counter)

  return sum;
}


// --------------------------------------------------MANUAL TESTING OF SOME EXAMPLES:
let characters = '1234567890';
sumCharCodes1(characters);