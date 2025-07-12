/**### **Task 6: Currying Function Implementation**

Your task is to implement a currying function that converts a given function into a curried version. Currying is a technique in which
 a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.

**Instructions**

1. Implement a function called `curry` that takes two arguments:
- `func`: The function to be curried.
- `arity`: The number of arguments the original function takes.
1. The `curry` function should return a new curried function.
2. The curried function should keep accepting arguments until it has received the specified number of arguments (`arity`). 
Once all arguments are received, the original function should be executed with the collected arguments.
3. If the curried function is invoked with fewer arguments than `arity`, it should return a new curried function that waits for the 
remaining arguments. */

function multiply(a, b, c) {
	return a * b * c;
}

function curry(func,arity){
    return function curried(...args){
        if (args.length < arity){
            return function(...nextArgs){
                return curried(...args,...nextArgs);
            };
        }
        else {
            return func(...args)
        }
    }
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24