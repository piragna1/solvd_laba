import { Task3 } from "./solution.js";

export async function runTask3() {

  console.log("🔢 COUNTERS\n");

  const counter1 = Task3.createCounter();
  console.log("🔁 Counter 1:");
  console.log(`  ➤ ${counter1()}`);
  console.log(`  ➤ ${counter1()}`);

  const counter2 = Task3.createCounter();
  console.log("\n🔁 Counter 2:");
  console.log(`  ➤ ${counter2()}`);
  console.log(`  ➤ ${counter2()}`);
  console.log(`  ➤ ${counter2()}`);

  console.log("\n📣 REPEAT FUNCTION\n");

  console.log("🔂 Repeating sayHi 3 times:");
  Task3.repeatFunction(() => console.log("  👋 Hi!"), 3)();

  console.log("\n♾️ Repeating sayHi indefinitely (stops after 5 seconds):\n");
  const stopIndefinite = Task3.repeatFunction(() => console.log("  👋 Hi!"), -1)();

  await new Promise((resolve) => {
    setTimeout(() => {
      stopIndefinite();
      console.log("\n🛑 Stopped indefinite repetition.");
      resolve();
    }, 5000);
  });

}
