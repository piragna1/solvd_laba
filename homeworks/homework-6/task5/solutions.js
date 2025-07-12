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

import { JSDOM } from "jsdom";

const dom = new JSDOM(
  `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./solutions.js"></script>
</head>
<body>
    <header>
  <h1 id="app">Movie website</h1>
  <search>
    <form action="./search/">
      <label for="movie">Find a Movie</label>
      <input type="search" id="search-input" name="q" />
      <button type="submit">Search</button>
    </form>
  </search>
</header>
</body>
</html>
  `
);

// Throttle function
function throttle(func, limit) {
  let lastRun = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastRun >= limit) {
      func(...args);
      lastRun = now;
      console.log(`Function Executed: ${now}`);
    } else {
      console.log("Throttle Limit Not Reached");
    }
  };
}

function onScroll(event) {
  // Handle scroll event
  console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 100);

dom.window.addEventListener("scroll", throttledScrollHandler);

// Simulate scroll event
function simulateScroll(value, delay) {
  setTimeout(() => {
    console.log(Date.now());
    //set y
    dom.window.scrollY = value;
    // Create a new scroll event
    const event = new dom.window.Event("scroll", {
      bubbles: true,
      cancelable: true,
    });
    // Dispatch the input event to trigger the event listener
    dom.window.dispatchEvent(event);
  }, delay);
}
// Generating large data for testing scroll events
const scrollData = [];
for (let i = 0; i < 1000; i++) {
  // Incremental scroll values (scrollY values)
  const scrollValue = Math.floor(Math.random() * 500);  // Random scroll position between 0 and 500px
  const delay = i * 10;  // Incremental delays for each scroll event (10ms gap between each event)
  scrollData.push({ scrollValue, delay });
}

// Simulate scroll events with the generated data
scrollData.forEach(({ scrollValue, delay }) => {
  simulateScroll(scrollValue, delay);
});
