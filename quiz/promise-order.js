// ----- EXERCISE-1 -----

// console.log(1); // Synchronous

// const promise = new Promise((resolve) => {
//   console.log(2); // Synchronous
//   resolve();
//   console.log(3); // Synchronous
// });

// console.log(4); // Synchronous

// promise
//   .then(() => {
//     console.log(5); // Microtask
//   })
//   .then(() => {
//     console.log(6); // Microtask
//   });

// console.log(7); // Synchronous

// setTimeout(() => {
//   console.log(8); // Macrotask
// }, 10);

// setTimeout(() => {
//   console.log(9); // Macrotask
// }, 0);

// ________________________________________________________

// ----- EXERCISE-2 -----

// Promise.resolve(1)
//   .then(() => 2)
//   .then(3)
//   .then((value) => value * 3)
//   .then(Promise.resolve(4))
//   .then(console.log);

// ________________________________________________________

// ----- EXERCISE-3 -----

// Promise.resolve(1)
//   .then((val) => {
//     console.log(val);
//     return val + 1;
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => {
//     console.log(val);
//     return Promise.resolve(3).then((val) => {
//       console.log(val);
//     });
//   })
//   .then((val) => {
//     console.log(val);
//     return Promise.reject(4);
//   })
//   .catch((val) => {
//     console.log(val);
//   })
//   .finally((val) => {
//     console.log(val);
//     return 10;
//   })
//   .then((val) => {
//     console.log(val);
//   });

// ________________________________________________________

// ----- EXERCISE-4 -----

// new Promise((resolve, reject) => {
//   resolve(1);
//   resolve(2);
//   reject("error");
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("error");
//   }
// );
