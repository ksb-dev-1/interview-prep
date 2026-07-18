function init() {
  const executorFn = (resolve, reject) => {
    // resolve(10);
    // resolve(20); // has no impact
    // return resolve(10)

    reject(10);

    // throw new Error(10);

    // console.log("after resolve"); // Calling resolve does not exit the executor function. It only settles the Promise. If we want to stop further execution, we must explicitly use return.
  };

  return new Promise(executorFn);
}

const instance = init();

// console.log(instance);
// console.log(instance.__proto__.then);
// console.log(Object.getPrototypeOf(instance));
// console.log(Object.getPrototypeOf(instance).then); // recommended
// console.log(Promise.prototype);

// instance.then((v) => console.log("1st then value is : ", v));
// instance.then((v) => console.log("2nd then value is : ", v));

instance
  .then((v) => {
    console.log("1st then value is : ", v);
    return v + 1;
  })
  .then((v) => console.log("2nd then value is : ", v))
  .then(
    (v) => {
      console.log("2nd then value is : ", v);
      return v + 1;
    },
    (x) => {
      console.log("second argument : ", x);
      //   return x + 1;
      return Promise.reject(x + 1);
    },
  )
  .catch((err) => {
    console.log("1st catch value : ", err);
    // return err + 1;
    // return Promise.reject(err + 1);
    // throw new Error(err + 1);
  })
  .then((v) => console.log("then after catch : ", v))
  .catch((err) => {
    console.log("2nd catch value : ", err);
    return err + 1;
  });

// setTimeout(() => {
//   instance.then((v) => console.log("then inside setTimeout", v));
// }, 500);

/*
  
  .then() always returns a new Promise. If the callback returns a non-promise value, JavaScript automatically wraps it using Promise.resolve()

  .then(
  onFulfilled, // runs if resolved
  onRejected   // runs if rejected
)
  
  */
