import { Task3 } from "./solution.js";

export async function runTask3() {
  console.log("\n==================== TASK 3 ====================\n");

  const counter1 = Task3.createCounter();
  console.log("Counter 1 calls:");
  console.log(counter1());
  console.log(counter1());

  const counter2 = Task3.createCounter();
  console.log("Counter 2 calls:");
  console.log(counter2());
  console.log(counter2());
  console.log(counter2());

  console.log("\nRepeating sayHi 3 times:");
  Task3.repeatFunction(() => console.log("Hi!"), 3)();

  console.log("\nRepeating sayHi indefinitely (will stop after 5 seconds):\n");
  const stopIndefinite = Task3.repeatFunction(() => console.log("Hi!"), -1)();

  await new Promise((resolve) => {
    setTimeout(() => {
      stopIndefinite();
      console.log("Stopped indefinite repetition.");
      resolve();
    }, 5000);
  });
}
