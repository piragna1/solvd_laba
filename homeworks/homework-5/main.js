//Implementations for the solutions of the tasks
import { Task1 } from "./task1/solution.js";
import { Task2 } from "./task2/solution.js";
import { Task3 } from "./task3/solution.js";
import { Task4 } from "./task4/solution.mjs";
//resources (arrays,objects,etc.)
import { array, person } from "./shared/data.js";
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
            // const numShuffles = 100000; // Times shuffled
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
      // // ==================== Testing getArrayIntersection() ====================
      // console.log('// ==================== Testing getArrayIntersection() ====================')
      // // Test case 1: Basic intersection
      // const array1 = [{ id: 1 }, [1, 2], { id: 2 }];
      // const array2 = [{ id: 1 }, [1, 2], { id: 3 }, 1, 2];
      // const result1 = task4.getArrayIntersection(array1, array2);
      // console.log("🔵 Test Case 1: Basic Intersection");
      // console.log("Input Array 1:", JSON.stringify(array1, null));
      // console.log("Input Array 2:", JSON.stringify(array2, null));
      // console.log("👉 Output:", JSON.stringify(result1, null), '\n');

      // // Test case 2: One empty array
      // const emptyArray = [];
      // const result2 = task4.getArrayIntersection(array1, emptyArray);
      // console.log("🟡 Test Case 2: One Empty Array");
      // console.log("Input Array 1:", JSON.stringify(array1, null));
      // console.log("Input Array 2: []");
      // console.log("👉 Output:", JSON.stringify(result2, null), '\n');

      // // Test case 3: Only primitive values
      // const array3 = [1, 2,2,3,4,7,8,4,110,'a','b', 3];
      // const array4 = [2, 'a',3, 4];
      // const result3 = task4.getArrayIntersection(array3, array4);
      // console.log("🟣 Test Case 3: Only Primitive Values");
      // console.log("Input Array 1:", JSON.stringify(array3, null));
      // console.log("Input Array 2:", JSON.stringify(array4, null));
      // console.log("👉 Output:", JSON.stringify(result3, null), '\n');

      // // Test case 4: Nested objects
      // const array5 = [{ a: { b: 1 } }, { a: 2 }];
      // const array6 = [{ a: { b: 1 } }, { a: 3 }];
      // const result4 = task4.getArrayIntersection(array5, array6);
      // console.log("🔴 Test Case 4: Nested Objects");
      // console.log("Input Array 1:", JSON.stringify(array5, null));
      // console.log("Input Array 2:", JSON.stringify(array6, null));
      // console.log("👉 Output:", JSON.stringify(result4, null), '\n');

      // // Test case 5: Duplicates
      // const array7 = [1, 2, 2, 3];
      // const array8 = [2, 2, 3, 4];
      // const result5 = task4.getArrayIntersection(array7, array8);
      // console.log("⚪ Test Case 5: Duplicates");
      // console.log("Input Array 1:", JSON.stringify(array7, null));
      // console.log("Input Array 2:", JSON.stringify(array8, null));
      // console.log("👉 Output:", JSON.stringify(result5, null), '\n');

      // // ==================== Testing getArrayUnion() ====================
      // console.log('// ==================== Testing getArrayUnion() ====================')
      // // Test Case 1: Basic union with primitives and objects
      // const unionArray1 = [1, 2, { id: 1 }];
      // const unionArray2 = [2, 3, { id: 1 }, { id: 2 }];
      // const unionResult1 = task4.getArrayUnion(unionArray1, unionArray2);
      // console.log("⚪ Test Case 1: Basic Union");
      // console.log("Input Array 1:", JSON.stringify(unionArray1, null));
      // console.log("Input Array 2:", JSON.stringify(unionArray2, null));
      // console.log("👉 Output:", JSON.stringify(unionResult1, null), '\n');

      // // Test Case 2: One empty array
      // const emptyUnionArray = [];
      // const unionResult2 = task4.getArrayUnion(unionArray1, emptyUnionArray);
      // console.log("⚪ Test Case 2: One Empty Array");
      // console.log("Input Array 1:", JSON.stringify(unionArray1, null));
      // console.log("Input Array 2: []");
      // console.log("👉 Output:", JSON.stringify(unionResult2, null), '\n');

      // // Test Case 3: Arrays with duplicate objects
      // const dupArray1 = [{ id: 1 }, { id: 1 }, { id: 2 }];
      // const dupArray2 = [{ id: 1 }, { id: 3 }];
      // const unionResult3 = task4.getArrayUnion(dupArray1, dupArray2);
      // console.log("⚪ Test Case 3: Arrays with Duplicate Objects");
      // console.log("Input Array 1:", JSON.stringify(dupArray1, null));
      // console.log("Input Array 2:", JSON.stringify(dupArray2, null));
      // console.log("👉 Output:", JSON.stringify(unionResult3, null), '\n');

      // // Test Case 4: Large arrays (10,000 elements each)
      // console.log("==================== ⚪ Test Case 4 ====================");
      // console.log("📝 Description: Testing union of two large arrays (10k elements each) with 5,000 overlapping objects");

      // // Generate arrays
      // const largeArray1 = Array(10000)
      //   .fill()
      //   .map((_, i) => ({ id: i })); // IDs: 0-9,999
      // const largeArray2 = Array(10000)
      //   .fill()
      //   .map((_, i) => ({ id: i + 5000 })); // IDs: 5,000-14,999

      // console.log("\nInput Details:");
      // console.log(`- largeArray1: 10,000 objects with IDs [0 ... 9,999]`);
      // console.log(`- largeArray2: 10,000 objects with IDs [5,000 ... 14,999]`);
      // console.log("--> Overlap: 5,000 objects (IDs 5,000-9,999 exist in both arrays)");

      // // Execute and measure
      // console.log("\nCalculating union...");
      // console.time("Performance");
      // const unionResult4 = task4.getArrayUnion(largeArray1, largeArray2);
      // console.timeEnd("Performance");

      // console.log("\nOutput Verification:");
      // console.log(`- Expected unique elements: ${10000 + 10000 - 5000} = 15,000 (array1 + array2 - overlap)`);
      // console.log(`- Actual output length: ${unionResult4.length}`);
      // console.log("- First 5 elements:", JSON.stringify(unionResult4.slice(0, 5), null));
      // console.log("- Last 5 elements:", JSON.stringify(unionResult4.slice(-5), null));

      // console.log("\n📌 Conclusion:");
      // console.log("Union must contain:");
      // console.log("- 5,000 unique elements of largeArray1 (IDs 0-4,999)");
      // console.log("- 5,000 overlapping elements (IDs 5,000-9,999, counted just once)");
      // console.log("- 5,000 unique elements of largeArray2 (IDs 10,000-14,999)");
      // console.log("TOTAL: 15,000 unique elements\n");

      // // Test Case 5: Nested objects
      // const nestedArray1 = [{ a: { b: 1 } }, { x: [1, 2] }, "hello"];
      // const nestedArray2 = [{ a: { b: 1 } }, { x: [1, 3] }, { y: { z: null } }];
      // const unionResult5 = task4.getArrayUnion(nestedArray1, nestedArray2);
      // console.log("⚪ Test Case 5: Nested Objects");
      // console.log("Input Array 1:", JSON.stringify(nestedArray1, null));
      // console.log("Input Array 2:", JSON.stringify(nestedArray2, null));
      // console.log("👉 Output:", JSON.stringify(unionResult5, null), '\n');

      // // Test Case 6: Different primitive types
      // const primitivesArray1 = [1, "1", true, null, undefined];
      // const primitivesArray2 = [1, 2, "2", false, undefined, NaN];
      // const unionResult6 = task4.getArrayUnion(primitivesArray1, primitivesArray2);
      // console.log("⚪ Test Case 6: Different Primitive Types");
      // console.log("Input Array 1:", JSON.stringify(primitivesArray1, null));
      // console.log("Input Array 2:", JSON.stringify(primitivesArray2, null));
      // console.log("👉 Output:", JSON.stringify(unionResult6, null), '\n');

      // // Test Case 7: Special values (NaN, null, undefined)
      // const specialArray1 = [NaN, null, undefined, 0];
      // const specialArray2 = [NaN, undefined, "", false];
      // const unionResult7 = task4.getArrayUnion(specialArray1, specialArray2);
      // console.log("⚪ Test Case 7: Special Values");
      // console.log("Input Array 1:", JSON.stringify(specialArray1, null));
      // console.log("Input Array 2:", JSON.stringify(specialArray2, null));
      // console.log("👉 Output:", JSON.stringify(unionResult7, null), '\n');

      // // Test Case 8: Mixed complex types
      // const mixedArray1 = [1, { a: 1 }, [1, 2], null, { b: { c: 3 } }];
      // const mixedArray2 = ["1", { a: 1 }, [1, 2], undefined, { b: { c: 3 } }];
      // const unionResult8 = task4.getArrayUnion(mixedArray1, mixedArray2);
      // console.log("⚪ Test Case 8: Mixed Complex Types");
      // console.log("Input Array 1:", JSON.stringify(mixedArray1, null));
      // console.log("Input Array 2:", JSON.stringify(mixedArray2, null));
      // console.log("👉 Output:", JSON.stringify(unionResult8, null), '\n');
//------
// TASK 5---------------------------------------------

//------