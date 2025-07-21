//--------------------------------------------------------------Promises

//------------------------------callbacks
//promises use callbacks
//callbacks are functions passed by parameter as arguments
//------------------------------

//------------------------------Callback
// document.addEventListener('click', (event)=>{
//     //this arrow function is a callback
//     //Javascript calls this inner function when click happens!
//     alert('HI')
// })
//------------------------------

//------------------------------
// //The previous example functionality can also be achieved like this
// function sayHi(){
//     alert('Hi!');
// }
// document.addEventListener('click',sayHi);
// //function passed as an argument (callback) without parenthesis `()` because we do not want to execute/call/invoke it.
//------------------------------

//------------------------------Callback HELL
//callbacks must be used wisely as we can fall into some unnecessary complex structures.
// fetch("https://httpbin.org/headers").then((response) => {
//   response.json().then((data) => {
//     saveDataToDatabase(data).then(() => {
//       collectMetrics({ /* some data */ }).then(() => {
//         // ...
//       });
//     });
//   });
// });

//------------------------------

//------------------------------Callback HELL example
// authenticateUser(credentials, (err, user) => {
//   if (err) return handleError(err);

//   getUserSettings(user.id, (err, settings) => {
//     if (err) return handleError(err);

//     fetchDashboardData(settings, (err, dashboard) => {
//       if (err) return handleError(err);

//       connectToNotificationService(user.id, (err, connection) => {
//         if (err) return handleError(err);

//         connection.subscribe('alerts', (err, alerts) => {
//           if (err) return handleError(err);

//           processAlerts(alerts, (err, results) => {
//             if (err) return handleError(err);

//             saveResultsToDatabase(results, (err, success) => {
//               if (err) return handleError(err);

//               logActivity(user.id, 'processed alerts', (err) => {
//                 if (err) return handleError(err);

//                 sendConfirmationEmail(user.email, () => {
//                   console.log("All done!");
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // readability and maintenance issues are served

//------------------------------

//------------------------------ Callback HELL
//before ECMA Script 2016 that was how callbacks were handled!
//------------------------------

//------------------------------ Ecmascript 2017 ES8
//ES8 introduced asyn/await pattern for writing async code:
// async function main() {
//   try {
//     const data = await fetchData();
//     const result = await process(data);
//     display(result);
//   } catch (err) {
//     handleError(err);
//   }
// }

//------------------------------

//------------------------------
// async function main() {
//   try {
//     const user = await authenticateUser(credentials);
//     const settings = await getUserSettings(user.id);
//     const dashboard = await fetchDashboardData(settings);
//     const connection = await connectToNotificationService(user.id);
//     const alerts = await connection.subscribe('alerts');
//     const results = await processAlerts(alerts);
//     const success = await saveResultsToDatabase(results);
//     await logActivity(user.id, 'processed alerts');
//     await sendConfirmationEmail(user.email);

//     console.log("All done!");
//   } catch (err) {
//     handleError(err);
//   }
// }

//------------------------------

//------------------------------Promises
// //Objects that represent the eventual fulfillment of an operation whether if fails or succeeds, in an async fashion.

// //How to construct:

// const promise = new Promise( function process(resolve,reject){
//     //code to be executed
//     const data = {};
//     resolve(data);//invoking callback function for resolving
//     //or reject
// });

// //resolve and reject are callbacks:

// function resolve(data){
//     return true;
// }

// function reject(data){
//     return false;
// }


//------------------------------

//------------------------------States of a promise
//pending: initial state of a promise which is not fulfilled nor rejected
//fulfilled: promise finished successfully
//rejected: promise finished with an error
//------------------------------

//------------------------------Result
//this field is initially set as `undefined`

//it changes either to the value produced in the fulfillment case or to the error if the promise was rejected
//------------------------------

//------------------------------.then()
// //This method is used with a promise object and you can pass the callback in case of the resolve and also another callback in case of error
// new Promise().then(fulfilledCallbackFn, rejectCallbackFn);
// // it will return another promise for the completion of which ever callback is executed
//------------------------------

//------------------------------.catch()
// //This method is used in the case in which a given promise executes its rejection with a given callback
// new Promise(Promise.reject()).catch(rejectionCallback);
// //It accepts on argument in the parameters' section and it is the callback which executes when a promise is rejected.
//------------------------------

//------------------------------.finally()
// //Like try-catch-finally this call can be placed after a promise's rejection or resolution are processed.
// new Promise((resolveCallback,rejectCallback)=>{})
// .then(function resolveCallback(valueObtained){
//     //...
// })
// .catch(function rejectionCallback(reasonObtained){
//     //...
// })
// .finally(function onFinallyCallback(){
//     //always be executed
//     //...
// })
//------------------------------

//------------------------------Promise.all()
//static method
//takes an iterable with promises
//return a promise which:
    //resolves if all of the inner promises resolve
    //rejects if any of the inner promises reject
//------------------------------

//------------------------------Promise.any()
//static method
//takes an iterable with promises
//return a promise which:
    //resolves if any of the inner promises resolve
    //rejects if all of the inner promises reject
//------------------------------

//------------------------------Promise.race()
//static method
//takes an iterable with promises
//return a promise which:
    //resolves with the result of the first promise that settles (resolving or rejection)
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------

//------------------------------
//------------------------------
