/**### **Task 5: Implementing Throttle Function**

Your task is to implement a throttle function that takes a function and a time interval as arguments. The throttle function should ensure
 that the provided function is executed at most once within the specified time interval.

**Instructions**

1. Implement a function called `throttle` that takes two arguments:
- `func`: The function to be throttled.
- `interval`: The time interval (in milliseconds) within which the function can be executed.
1. The `throttle` function should return a new function that wraps the provided function.
2. When the new function is invoked, it should:
- Check if the specified time interval has elapsed since the last execution of the provided function.
- If the interval has not elapsed, ignore the invocation.
- If the interval has elapsed, execute the provided function and update the last execution timestamp.
1. Test your `throttle` function by using it to throttle a scroll event listener. Ensure that the provided function is executed at most
 once within the specified time interval during rapid scrolling. */

function throttle(fun, limit){
    let lastRun;
    let lastFunc;

    return function(...args){
        if (!lastRun){
            fun(...args);
            lastRun=Date.now();    
        }
        else{
            clearTimeout(lastFunc);
            lastFunc = setTimeout(()=>{
                if(Date.now()-lastRun >= limit){
                    fun(...args);
                    lastRun=Date.now();
                }
            }, limit - (Date.now()-lastRun));
        }
    }
}

 function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);