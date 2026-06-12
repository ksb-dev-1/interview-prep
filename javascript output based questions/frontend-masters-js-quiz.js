// EVENT LOOP ======================================================================

/*

Promise.resolve().then(() => console.log(1));

queueMicrotask(() => console.log(2));

setTimeout(() => console.log(3), 0);

console.log(4);

new Promise(() => console.log(5));

(async () => console.log(6))();

*/

/* 4 5 6 1 2 3 */

// ----------------------------------------

/*

async function A() {
  // Promise.resolve();
  await Promise.resolve();
}

async function B() {
  await A();
  console.log(6);
}

B();

Promise.resolve().then(() => console.log(7));

*/

/* 7 6 */

// ----------------------------------------

/*

async function asyncFuntion() {
  console.log(1);

  new Promise(() => console.log(2));

  new Promise((res) => {
    setTimeout(() => console.log(12), 0);
    res();
  });

  await new Promise((res) => {
    setTimeout(() => console.log(3), 0);
    res();
  });
}

new Promise((res) => {
  console.log(4);

  (async () => {
    console.log(5);

    await asyncFuntion();
    console.log(6);
  })();

  res();
}).then(() => console.log(7));

console.log(8);

queueMicrotask(() => console.log(9));

*/

/* 4 5 1 2 8 7 9 6 12 3 */

// ----------------------------------------

/*

(async () => {
  const asyncFunc = async () => "asyncFunc";
  //   const asyncFunc = async () => console.log("asyncFunc");

  const promise = new Promise((res) => {
    console.log("promise");
    // res();
  }).then(() => console.log("then"));

  console.log("async body");

  queueMicrotask(() => console.log("queueMicrotask"));

  const results = await Promise.all([asyncFunc(), promise]);

  return results;
})();

console.log("script");

*/

/* const promise = (async () => {
  const results = await Promise.all([...]);
  return results;
})();

promise.then(console.log);*/

/* new MutationObserver(() => console.log(10));
 process.nextTick(() => console.log(11)); */

// Scope and Closures ======================================================================

/*

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}
const out = outer(2);
console.log(out(3)); // 5

*/

// ----------------------------------------

/*

const outerFunc = () => {
  let count = 0;
  return () => ++count;
};

const counter = outerFunc();
console.log(counter()); // 1
console.log(counter()); // 2

*/

// ----------------------------------------

/*

function createCounter() {
  let globalCount = 0;

  function incrementCount() {
    let incrementedValue = ++globalCount;
    return incrementedValue;
  }

  return { incrementCount };
}

const counter = createCounter();
console.log(counter.incrementCount()); // 1
console.log(counter.incrementCount()); // 2
console.log(createCounter().incrementCount()); // 1

*/

// ----------------------------------------

/*

function createUserManager() {
  let user = null;

  return function (name) {
    "use strict";

    user = { name, createdAt: Date.now() };
    return user;
  };

}

const createUser = createUserManager();
console.log(createUser("John Doe") === createUser("John Doe")); // false

*/

/*

function createUserManager() {
  let cache = null;

  return function (name) {
    if (!cache) {
      cache = { name, createdAt: Date.now() };
    }
    return cache;
  };
}

const createUser = createUserManager();
console.log(createUser("John Doe") === createUser("Jane Doe")); // true

*/

// ----------------------------------------

/*

function createCounter(initialCount) {
  let count = initialCount;

  return function () {
    "use strict";

    count += 1;
    return count;
  };
}

const counter = createCounter(10);
counter();
counter();
console.log(counter()); // 13

*/

// ----------------------------------------

/*

const input = "orange";

switch (input) {
  case "orange":
    const css = "color: #FFA500";
    console.log("%cOrange!", css);
    break;
  // Fix:
  // case "orange": {
  //   const css = "color: #FFA500";
  //   console.log("%cOrange!", css);
  //   break;
  // }
  case "yellow":
    const css = "color: #FFFF00";
    console.log("%cYellow!", css);
    break;
  default:
    console.log("No color for you");
}

*/

/* Uncaught SyntaxError: Identifier 'css' has already been declared */

// this Keyboard ======================================================================

/*

// "use strict";

function logThis() {
  console.log(this);
}

const obj = {
  logThis,

  logThis2() {
    return logThis();
  },

  logThis3() {
    return obj.logThis();
  },
};

obj.logThis(); // obj
obj.logThis2(); // window / undefined in strict mode
obj.logThis3(); // obj

*/

// ----------------------------------------

/*

const objA = {
  foo() {
    console.log(this);
  },

  bar: () => console.log(this),

  // bar() {
  //   console.log(this);
  // },
};

const objB = {
  foo: objA.foo,

  bar: () => objA.bar(),

  baz() {
    objA.foo();
  },
};

objB.foo(); // objB
objB.bar(); // window
objB.baz(); // objA

*/

// ----------------------------------------

/*

function logThis() {
  console.log(this);
}

const obj1 = {
  foo: logThis,
  bar: () => logThis(),
  baz() {
    logThis();
  },
  qux() {
    logThis.call(this);
  },
};

const obj2 = {
  ...obj1,
  foo2: () => obj1.foo(),
};

for (const key in obj2) {
  obj2[key]();
}

*/

// obj2, window, window, obj2, obj1

// ----------------------------------------

/*

function logThis() {
  console.log(this);
}

const obj = {
  logThis,
  logThisInArrow: () => console.log(this),
  logThisNested() {
    const nestedFunc = () => console.log(this);
    nestedFunc();
  },
  logThisNestedArrow: () => {
    const nestedFunc = () => console.log(this);
    nestedFunc();
  },
};

obj.logThis();
obj.logThisInArrow();
obj.logThisNested();
obj.logThisInArrow();

*/

// obj, window, obj, window

// ----------------------------------------

/*

const obj = {
  logThis() {
    console.log(this);
  },
  logThis2() {
    function logThisInner() {
      console.log(this);
    }
    logThisInner.apply(this);

    // const logThisInner = () => console.log(this);
    // logThisInner();
  },
};

const { logThis, logThis2 } = obj;

logThis();
logThis2();
obj.logThis();
obj.logThis2();

*/

// window, window, obj, obj

// Classes and Prototypes ======================================================================

// ----------------------------------------

/*

class User {
  constructor(username) {
    this.username = username;
  }

  login() {}
}

const u1 = new User("John");
const u2 = new User("Jane");

console.log(u1.login === u2.login); // true

*/

// ----------------------------------------

/*

class Dog {
  constructor(name) {
    this.username = name;
    this.wagTail = () => {
      return "Wagging tail!";
    };
  }

  bark() {
    return "Woof!";
  }
}

const dog1 = new Dog("Max");
const dog2 = new Dog("Spot");

console.log(dog1.bark === dog2.bark); // true
console.log(Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2)); // true
console.log(dog1.wagTail() === dog2.wagTail()); // true
console.log(dog1.constructor === dog2.constructor); // true
console.log(dog1.wagTail === dog2.wagTail); // false

*/

// ----------------------------------------

/*

class Counter {
  constructor(initialCount = 0) {
    this.count = initialCount;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(1);
counterOne.increment();
const counterTwo = Object.create(counterOne);
counterTwo.increment();

console.log(counterOne.count, counterTwo.count); // 2 3

*/

// ----------------------------------------

/*

class Chameleon {
  constructor(color = "green") {
    this.color = color;
  }

  static changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
}

const freddie = new Chameleon("green");
// freddie.changeColor("orange"); // TypeError
Chameleon.changeColor("orange");

console.log(Chameleon.color, freddie.color);

*/

// ----------------------------------------

/*

class User {
  constructor(username) {
    this.username = username;
  }

  login() {}
}

const user = new User("John");

console.log(Object.getPrototypeOf(user) === User.prototype); // true
console.log(Object.getPrototypeOf(user) === Object.getPrototypeOf(User)); // false
console.log(user.prototype === User.prototype); // false
console.log(Object.getPrototypeOf(user) === User.constructor); // false

*/

// Generators and Iterators ======================================================================

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

// NOTE:
// - import decalarations are hoisted
