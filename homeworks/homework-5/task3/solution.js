/**### **Task 3: Array Shuffling***/
export class Task3{
    /**1. Create a function called `customShuffle` that takes an array as an argument and returns a new 
 * array with its elements randomly shuffled. */
    customShuffle(array){
        const shuffled = [...array];
        for (let i = shuffled.length-1; i >0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [shuffled[i],shuffled[j]] = [shuffled[j],shuffled[i]];
        }
        return shuffled;
    }
    /**2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform 
 * randomness.  */
    methodImplementation(array){
        return this.customShuffle(array);
    }
} 

