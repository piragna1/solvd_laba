/**### **Task 5: Array Performance Analysis***/
export class Task5{
    /**1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments.
     *  The `measureArrayPerformance` function should execute the provided function with the given array as input
     *  and measure the execution time.*/
    measureArrayPerformance(fn, array){
        let beggining;
        let end;
        beggining=performance.now()
        fn(array);
        end=performance.now()
        console.log(`The process took ${end-beggining} miliseconds to get executed.`);
    }
    /**2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods
     *  (`map`, `filter`, `reduce`, etc.) against your custom array manipulation functions. */
    
}
    