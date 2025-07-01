//Implementations for the solutions of the tasks
import { Task1 } from "./task1/solution.js";
import { Task2 } from "./task2/solution.js";
import { Task3 } from "./task3/solution.js";
import { Task4 } from "./task4/solution.mjs";
import { Task5 } from "./task5/solution.mjs";
//resources (arrays,objects,etc.)
import { array, person,intersectionTestCases, unionTestCases } from "./shared/data.js";
// // TASK 1---------------------------------------------
            // //Usage demonstration:
            // let prop = 'id';
            // console.log("\n🟢 1. Creating `customFilterUnique` function...");
            // let t1 = new Task1();
            // console.log("\n🟣 2. Executing filtering function on the next array filtering by `id` property:");
            // console.log(JSON.stringify(person,{},1));
            // console.log(`\nResult 👇 (based on 'id' property): \n`,t1.usingCustomFilterUnique(person,(item)=>item[prop]));
//------
// TASK 2---------------------------------------------
            // //Usage demonstration:
            // let t2 = new Task2();
            // //variables for measuring execution time:
            // let beginning;
            // let end;
            // //variables for measuring memory usage:
            // let memoryBefore;
            // let memoryAfter;
            // //Usage
            // let a1 = Array.from(array);
            // console.log("\n🟣 1. Generated array:",array);
            // //--First chunking method
            // console.log("\n🟢 2. Dividing array into chunks of size 6:");
            // memoryBefore=process.memoryUsage().heapUsed;
            // beginning=performance.now();
            // console.log(t2.chunkArray(array, 6));
            // end=performance.now();
            // memoryAfter=process.memoryUsage().heapUsed;
            // console.log(`Method 1: Time: ${end - beginning} ms, Memory: ${memoryAfter - memoryBefore} bytes`);
            // //-- end of first method
            // //--Second chunking method
            // console.log("\n🔵 3. Dividing array into chunks of size 4 with optimized chunking method:");
            // memoryBefore=process.memoryUsage().heapUsed;
            // beginning=performance.now();
            // console.log(t2.chunkArrayv2(a1, 4));
            // end=performance.now();
            // memoryAfter=process.memoryUsage().heapUsed;
            // console.log(`Method 2: Time: ${end - beginning} ms, Memory: ${memoryAfter - memoryBefore} bytes`);
            // //-- end of second method
//------
// TASK 3---------------------------------------------
            // //Usage demonstration:
            // let t3 = new Task3();
            // let a =[0,1,2,3,4,5,6,7,8,9];
            // console.log('// H5Task3---------------------------------------------\n');
            // console.log('Array created:',a);
            // console.log('1. 🟡 Method for shuffling created')
            // const positionCount ={};
            // const numShuffles = 10000; // Times shuffled
            // console.log(`2. 🔵 Executing method for shuffling an array ${numShuffles} times:\n`)
            // for (let index = 0; index < numShuffles; index++) {
            //     const shuffledArray = t3.methodImplementation(a);
            //     const firstElement = shuffledArray[0];
            //     console.log(t3.methodImplementation(a));
            //     if (positionCount[firstElement]) {
            //         positionCount[firstElement]++;
            //     } else {
            //         positionCount[firstElement] = 1;
            //     }
            // }
            // console.log("How many times each number appeared in the first position:");
            // for (const [number, count] of Object.entries(positionCount)) {
            //     console.log(`Number ${number}: ${count} times`);
            // }
//------
// TASK 4---------------------------------------------
                  // // Usage demonstration:
                  // const task4 = new Task4();
                  // console.log("// ==================== Testing getArrayIntersection() ====================");
                  // intersectionTestCases.forEach(({ label, arrays }) => {
                  //   const [array1, array2] = arrays;
                  //   const result = task4.getArrayIntersection(array1, array2);
                  //   console.log(label);
                  //   console.log("Input Array 1:", JSON.stringify(array1, null, 2));
                  //   console.log("Input Array 2:", JSON.stringify(array2, null, 2));
                  //   console.log("👉 Output:", JSON.stringify(result, null, 2), "\n");
                  // });

                  // console.log("// ==================== Testing getArrayUnion() ====================");
                  // unionTestCases.forEach(({ label, arrays }) => {
                  //   const [array1, array2] = arrays;
                  //   const result = task4.getArrayUnion(array1, array2);
                  //   console.log(label);
                  //   console.log("Input Array 1:", JSON.stringify(array1, null, 2));
                  //   console.log("Input Array 2:", JSON.stringify(array2, null, 2));
                  //   console.log("👉 Output:", JSON.stringify(result, null, 2), "\n");
                  // });
//------
// TASK 5---------------------------------------------
                  // Usage demonstration:
                  // let t5 = new Task5();
                  // t5.comparingFilteringUniqueMethods();
                  // t5.comparingArrayChunkingMethods();
                  // t5.comparingIntersectionMethods();
                  // t5.comparingArrayUnionMethods();
//------