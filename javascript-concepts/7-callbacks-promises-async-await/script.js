/*

console.log("1-Start");

setTimeout(() => {
  console.log("2-Starting");
}, 0);

console.log("3-Finish");

*/

// ------------------------------------------

/*

async function getName() {
  return "John";
}

function getName() {
  // return Promise.resolve("John");
  return Promise.reject("John Reject");
}

console.log(
  getName()
    .then((data) => console.log(data))
    .catch((error) => console.log(error)),
);

*/

/*

const promise = new Promise((resolve, reject) => {
  resolve("FOO");
});

console.log(promise);
console.log(promise.then((data) => data));
console.log(promise.then((data) => console.log(data)));

*/

/*

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("FOO");
  }, 2000);
});

console.log(promise);
console.log(promise.then((data) => data));
console.log(promise.then((data) => console.log(data)));

*/

// ------------------------------------------

/*

console.log("1-Start");

function display(value) {
  setTimeout(() => {
    return value;
  }, 0);
}

const message = display("Starting");

console.log(message); 

console.log("3-Finish");

*/

// ------------------------------------------

/*

console.log("1-Start");

function display(value, cb) {
  setTimeout(() => {
    cb(value);
  }, 0);
}

const message = display("Starting", function cb(value) {
  console.log("2-" + value);
});

console.log("3-Finish");

*/

// ------------------------------------------

/*

console.log("1-Start");

function display1(value1, cb1) {
  setTimeout(() => {
    cb1(value1);
  }, 0);
}

function display2(value2, cb2) {
  setTimeout(() => {
    cb2(value2);
  }, 0);
}

function display3(value3, cb3) {
  setTimeout(() => {
    cb3(value3);
  }, 0);
}

const message = display1("Starting", function cb1(value1) {
  console.log("2-" + value1);

  display2("Started", (value2) => {
    console.log("3-" + value2);

    display3("Finishing", (value3) => {
      console.log("4-" + value3);
    });
  });
});

console.log("5-Finish");

*/

// ------------------------------------------

/*

console.log("1-Start");

function display1(value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1);
    }, 1000);
  });
}

function display2(value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2);
    }, 1000);
  });
}

function display3(value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3);
    }, 1000);
  });
}

display1("Starting")
  .then((res) => {
    console.log("2-" + res);
    return display2("Started");
  })
  .then((res) => {
    console.log("3-" + res);
    return display3("Finishing");
  })
  .then((res) => {
    console.log("4-" + res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("5-Finish");

*/

// ------------------------------------------

// Promise Combinator (all, race, allSettled, any)
// 1. all

/*

console.log("1-Start");

function display1(value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1);
    }, 1000);
  });
}

function display2(value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2);
      // reject(value2);
    }, 1000);
  });
}

function display3(value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3);
    }, 1000);
  });
}

Promise.all([
  display1("2-Starting"),
  display2("3-Started"),
  display3("4-Finishing"),
])
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      console.log(res[i]);
    }
  })
  .catch((err) => {
    console.log("Rejected : ", err);
  });

console.log("5-Finish");

*/

// ------------------------------------------
// 2. race

/*

console.log('1-Start')

function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1)
    }, 3000)
  })
}

function display2 (value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2)  
      //reject(value2)
    }, 1000)
  })
}

function display3 (value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3)
    }, 2000)
  })
}

Promise.race([
  display1('2-Starting'),
  display2('3-Started'),
  display3('4-Finishing')
])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('Rejected : ', err)
  })

console.log('5-Finish')

*/

// ------------------------------------------
// 3. allSetteled

/*

console.log("1-Start");

function display1(value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1);
      // reject(value1);
    }, 3000);
  });
}

function display2(value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2);
    }, 1000);
  });
}

function display3(value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3);
    }, 2000);
  });
}

Promise.allSettled([
  display1("2-Starting"),
  display2("3-Started"),
  display3("4-Finishing"),
])
  .then((res) => {
    for (let i = 0; i < res.length; i++) {
      console.log(res[i]);
    }
  })
  .catch((err) => {
    console.log(err);
  });

console.log("5-Finish");

*/

// ------------------------------------------
// 4. any

/*

console.log("1-Start");

function display1(value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value1);
      //resolve(value1)
    }, 3000);
  });
}

function display2(value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2);
    }, 1000);
  });
}

function display3(value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3);
    }, 2000);
  });
}

Promise.any([
  display1("2-Starting"),
  display2("3-Started"),
  display3("4-Finishing"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Rejected : ", err);
  });

console.log("5-Finish");

*/

// ------------------------------------------

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
    reject(new Error("Something went wrong!"));
  }, 1000);
});

promise
  .then((value) => value * 2)
  .then((value) => value + 5)
  .then((value) => console.log(value))
  .catch((error) => {
    console.log(error.message);
    return 100; // recovery value
  })
  .then((value) => console.log(value))
  .then(() => 200)
  .finally((value) => console.log("Done!", value));

// finally NEVER receives the chain value.

/*

| Expression                  | Returns a Promise? | Notes                                  |
| --------------------------- | ------------------ | -------------------------------------- |
| `new Promise(...)`          | ✅ Yes              | Creates a new promise                  |
| `Promise.resolve(value)`    | ✅ Yes              | Creates an already-fulfilled promise   |
| `Promise.reject(error)`     | ✅ Yes              | Creates an already-rejected promise    |
| `Promise.all([...])`        | ✅ Yes              | Resolves when all promises resolve     |
| `Promise.race([...])`       | ✅ Yes              | Settles when the first promise settles |
| `Promise.allSettled([...])` | ✅ Yes              | Waits for all promises to settle       |
| `Promise.any([...])`        | ✅ Yes              | Resolves with first fulfilled promise  |
| `.then(...)`                | ✅ Yes              | Always returns a new promise           |
| `.catch(...)`               | ✅ Yes              | Always returns a new promise           |
| `.finally(...)`             | ✅ Yes              | Always returns a new promise           |


*/

// ------------------------------------------

// Async-Await
