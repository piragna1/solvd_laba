/**### **Task 4: Implementing Debounce Function**

**Description**

Your task is to implement a debounce function that takes a function and a delay time as arguments. The goal of the debounce function is 
to ensure that the provided function is only executed after the user stops invoking it for the specified delay time.

**Instructions**

1. Implement a function called `debounce` that takes two arguments:
- `func`: The function to be debounced.
- `delay`: The delay time (in milliseconds) before the function is executed.
1. The `debounce` function should return a new function that wraps the provided function.
2. When the new function is invoked, it should:
- Clear any existing timeout.
- Set a new timeout to execute the provided function after the specified delay time.
1. Test your `debounce` function by using it to debounce an input event listener. Ensure that the provided function is only called once
 after the user stops typing for the specified delay time. */

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
const document = dom.window.document;

function debounce(func, delay) {
  let timer; // Variable to hold the timeout ID
  return function (...args) {
    // Clear the previous timeout
    clearTimeout(timer);
    // Set a new timeout to call the function after the specified delay
    timer = setTimeout(() => {
      func(...args); // Execute the function with its arguments
    }, delay);
  };
}

function debouncedSearch(query) {
  // Perform search operation with the query
  console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 1000);

// Get the input element (search box)
const inputElement = document.getElementById("search-input");

inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});

// Simulate input events with delays
function simulateInput(value, delay) {
  setTimeout(() => {
    // Create a new input event
    const event = new dom.window.Event("input", { bubbles: true, cancelable: true });
    // Set the input element's value
    inputElement.value = value;
    // Dispatch the input event to trigger the event listener
    inputElement.dispatchEvent(event);
    console.log(`Input event dispatched for: ${value}`);
  }, delay);
}

// Simulate typing in the search box
simulateInput("Inception", 0);  // First input at time 0ms
simulateInput("Interstellar", 5000);  // Second input after 5000ms
simulateInput("Avengers", 1000);  // Third input after 1000ms
simulateInput("Batman", 2500);  // Fourth input after 2500ms