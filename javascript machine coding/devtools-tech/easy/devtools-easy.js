// 1️⃣ myCall - call() is a JavaScript function method used to invoke a function immediately while explicitly setting the value of this. It also allows passing arguments one by one.

/*

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  context = context == null ? globalThis : context;

  return Reflect.apply(this, context, args);
};

*/

/*

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  context = context == null ? globalThis : Object(context);

  const uniqueKey = Symbol("fn");

  context[uniqueKey] = this;

  try {
    return context[uniqueKey](...args);
  } finally {
    delete context[uniqueKey];
  }
};

*/

/* // Example: 1 - Normal use case

function greet(greeting, age) {
  return `${greeting} ${this.name} ${age}`;
}

const user = { name: "Kedar" };

console.log(greet.myCall(user, "Hello", 25)); // Hello Kedar 25

*/

/* // Example: 2 - null context → globalThis

function show() {
  return this;
}

console.log(show.myCall(null)); // global object (window in browser / global in Node)

*/

/* // Example: 3 - undefined context

function show() {
  return this;
}

console.log(show.myCall(undefined)); // global object

*/

/* // Example: 4 - primitive context (boxing behavior)

function showType() {
  return typeof this;
}

console.log(showType.myCall(10)); // object

console.log(showType.myCall("hello")); // object

*/

/* // Example: 5 - No arguments passed

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "John" };

console.log(greet.myCall(user)); // Hi John

*/

/* // Example: 6 - multiple arguments

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.myCall(null, 1, 2, 3)); // 6

*/

/* // Example: 7 - function borrowing

const person1 = {
  name: "Kedar",
  getName(age) {
    return `${this.name} ${age}`;
  }
};

const person2 = { name: "John" };

console.log(person1.getName.myCall(person2, 30)); // John 30

*/

/* // Example: 8 - args spread correctness

function join(a, b, c, d) {
  return [a, b, c, d];
}

console.log(join.myCall(null, 1, 2, 3, 4)); // [1, 2, 3, 4]

*/

/* // Example: 9 - missing arguments become undefined

function test(a, b, c) {
  return [a, b, c];
}

console.log(test.myCall(null, 1));// [1, undefined, undefined]

*/

/* // Example: 10 - function as constructor-like context

function show() {
  return this.value;
}

console.log(show.myCall({ value: 99 })); // 99

*/

/* // Example: 11 - detached method call

const obj = {
  value: 50,
  get() {
    return this.value;
  }
};

const detached = obj.get;

console.log(detached.myCall({ value: 100 })); // 100

*/

/* // Example: 12 - error when not function

Function.prototype.myCall.call = "not a function";

try {
  Function.prototype.myCall.call();
} catch (e) {
  console.log(e.message);
}
// TypeError: ... is not a function

*/

/* // Example: 13 - symbol isolation check (no overwrite)

function test() {
  return Object.getOwnPropertySymbols(this).length;
}

const obj = {};

test.myCall(obj);

console.log(Object.keys(obj).length); // 0  (ensures no pollution)

*/

// 2️⃣ myApply - apply() is a JavaScript function method used to invoke a function immediately while explicitly setting the value of this. Arguments are passed as an array (or array-like object).

/*

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  context = context == null ? globalThis : Object(context);

  const fnKey = Symbol("fn");

  context[fnKey] = this;

  try {
    if (args == null) {
      return context[fnKey]();
    }

    if (typeof args === "object" || typeof args === "function";) {
      throw new TypeError(
        "CreateListFromArrayLike called on non-object"
      );
    }

    // Convert array-like object into real array
    const length = Number(args.length) || 0;

    const finalArgs = [];

    for (let i = 0; i < length; i++) {
      finalArgs.push(args[i]);
    }

    return context[fnKey](...finalArgs);
  } finally {
    delete context[fnKey];
  }
};

*/

/* // Example: 1 - Normal use case

function greet(greeting, age) {
  return `${greeting} ${this.name} ${age}`;
}

const user = { name: "Kedar" };

console.log(greet.myApply(user, ["Hello", 25])); // Hello Kedar 25

*/

/* // Example: 2 - null context → globalThis

function show() {
  return this;
}

console.log(show.myApply(null)); // global object (window in browser / global in Node)

*/

/* // Example: 3 - undefined context

function show() {
  return this;
}

console.log(show.myApply(undefined)); // global object

*/

/* // Example: 4 - primitive context (boxing behavior)

function showType() {
  return typeof this;
}

console.log(showType.myApply(10)); // object

console.log(showType.myApply("hello")); // object

*/

/* // Example: 5 - No arguments passed

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "John" };

console.log(greet.myApply(user)); // Hi John

*/

/* // Example: 6 - args is null

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "John" };

console.log(greet.myApply(user, null)); // Hi John

*/

/* // Example: 7 - args is undefined

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "John" };

console.log(greet.myApply(user, undefined)); // Hi John

*/

/* // Example: 8 - array-like object as args

function greet(greeting, age) {
  return `${greeting} ${this.name} ${age}`;
}

const user = { name: "Kedar" };

console.log(
  greet.myApply(user, { 0: "Hello", 1: 30, length: 2 })
); // Hello Kedar 30

*/

/* // Example: 9 - sparse array handling

function test(a, b, c) {
  return [a, b, c];
}

console.log(test.myApply(null, [1, , 3])); // [1, undefined, 3]

*/

/* // Example: 10 - invalid args type (error case)

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "John" };

console.log(greet.myApply(user, 123)); // TypeError: CreateListFromArrayLike called on non-object

*/

/* // Example: 11 - negative length (error case)

function test(a, b) {
  return [a, b];
}

console.log(test.myApply(null, { length: -1 })); // RangeError: Invalid array length

*/

/* // Example: 12 - Infinity length (error case)

function test(a, b) {
  return [a, b];
}

console.log(test.myApply(null, { length: Infinity })); // RangeError: Invalid array length

*/

/* // Example: 13 - function context binding

function showValue() {
  return this.value;
}

const obj = { value: 100 };

console.log(showValue.myApply(obj)); // 100

*/

/* // Example: 14 - detached method call

const obj = {
  value: 50,
  get() {
    return this.value;
  }
};

const detached = obj.get;

console.log(detached.myApply({ value: 99 })); // 99

*/

// 3️⃣ myBind --------------------------------------------------

// bind() is a JavaScript function method used to create and return a new function with a permanently bound this value. It does not invoke the function immediately.It also allows passing arguments one by one

/*

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not a function");
  }

  const fn = this;

  function boundFunction(...newArgs) {
    if (this instanceof boundFunction) {
      return fn.apply(this, [...args, ...newArgs]);
    }

    const finalContext = context == null ? globalThis : Object(context);

    return fn.apply(finalContext, [...args, ...newArgs]);
  }

  if (fn.prototype) {
    boundFunction.prototype = Object.create(fn.prototype);
  }
  return boundFunction;
};

*/

/* // Example: 1 - Basic binding

function greet(greeting, age) {
  return `${greeting} ${this.name} ${age}`;
}

const user = { name: "Kedar" };

const boundGreet = greet.myBind(user, "Hello");

console.log(boundGreet(25)); // Hello Kedar 25

*/

/* // Example: 2 - null context → globalThis

function show() {
  return this;
}

const boundShow = show.myBind(null);

console.log(boundShow()); // global object

*/

/* // Example: 3 - undefined context

function show() {
  return this;
}

const boundShow = show.myBind(undefined);

console.log(boundShow()); // global object

*/

/* // Example: 4 - primitive context (boxing)

function showType() {
  return typeof this;
}

const bound1 = showType.myBind(10);
console.log(bound1()); // object

const bound2 = showType.myBind("hello");
console.log(bound2()); // object

*/

/* // Example: 5 - partial application (pre-filled args)

function add(a, b, c) {
  return a + b + c;
}

const add5 = add.myBind(null, 5);

console.log(add5(10, 15)); // 30

*/

/* // Example: 6 - multiple pre-filled arguments

function join(a, b, c, d) {
  return [a, b, c, d];
}

const boundJoin = join.myBind(null, 1, 2);

console.log(boundJoin(3, 4)); // [1, 2, 3, 4]

*/

/* // Example: 7 - prototype inheritance with constructor

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const BoundPerson = Person.myBind(null);

const p = new BoundPerson("Kedar");

console.log(p.name); // Kedar
console.log(p.getName()); // Kedar

*/

/* // Example: 8 - new operator overrides bound context

function Test(name) {
  this.name = name;
}

const BoundTest = Test.myBind({ name: "Ignored" });

const obj = new BoundTest("John");

console.log(obj.name); // John

*/

/* // Example: 9 - length property adjustment

function sum(a, b, c, d) {
  return a + b + c + d;
}

const boundSum = sum.myBind(null, 1, 2);

console.log(boundSum.length); // 2

*/

/* // Example: 10 - name property check

function demo() {}

const boundDemo = demo.myBind(null);

console.log(boundDemo.name); // bound demo

*/

/* // Example: 11 - missing arguments become undefined

function test(a, b, c) {
  return [a, b, c];
}

const boundTest = test.myBind(null, 1);

console.log(boundTest()); // [1, undefined, undefined]

*/

/* // Example: 12 - function borrowing

const obj1 = {
  value: 10,
  getValue() {
    return this.value;
  }
};

const obj2 = { value: 99 };

const boundGet = obj1.getValue.myBind(obj2);

console.log(boundGet()); // 99

*/

/* // Example: 13 - ensures context does not leak

function check() {
  this.changed = true;
  return this.changed;
}

const obj3 = {};

const boundCheck = check.myBind(obj3);

boundCheck();

console.log(obj3.changed); // true

*/

/* // Example: 14 - new ignores bound context

function Person2(name) {
  this.name = name;
}

const BoundPerson2 = Person2.myBind({ name: "ignored" });

const p2 = new BoundPerson2("Kedar");

console.log(p2.name); // Kedar

*/

/* // Example: 15 - simple bound function

function hello() {
  return `Hi ${this.name}`;
}

const boundHello = hello.myBind({ name: "John" });

console.log(boundHello()); // Hi John

*/

// 4️⃣ myPush --------------------------------------------------

/*

// "use strict";

Array.prototype.myPush = function (...items) {
  if (this == null) {
    throw new TypeError("Cannot call myPush on null or undefined");
  }

  const obj = Object(this);

  let count = Number(obj.length);

  if (!Number.isFinite(count) || count < 0) {
    count = 0;
  }

  count = Math.floor(count);

  const MAX_LENGTH = 2 ** 32 - 1;

  for (let i = 0; i < items.length; i++) {
    if (count >= MAX_LENGTH) {
      throw new RangeError("Invalid array length");
    }

    obj[count++] = items[i];
  }

  obj.length = count;

  return count;
};

const arr = [1, 2, 3, 4];
arr.myPush(5);
console.log(arr);

console.log(Array.prototype.myPush.call(null, 2)); // will throw error in strict mode. In non-strict mode this === globalThis

const s = "Hello";
console.log(Array.prototype.myPush.call(s, "x"));
console.log(s);

const obj1 = {
  0: 1,
  length: 1,
};
console.log(Array.prototype.myPush.call(obj1, 2));
console.log(obj1);

const weirdObj = {
  length: -10,
};
Array.prototype.myPush.call(weirdObj, "a");
console.log(weirdObj);

const obj2 = {
  length: "2",
};
Array.prototype.myPush.call(obj2, "x");
console.log(obj2);

*/

// 5️⃣ myPop --------------------------------------------------

/*

Array.prototype.myPop = function () {
  if (this.length === 0) return undefined;

  const lastIndex = this.length - 1;
  const lastElement = this[lastIndex];

  delete this[lastIndex]; // optional but explicit
  this.length = lastIndex;

  return lastElement;
};

const arr = [1, 2, 3, 4];
console.log(arr.myPop());
console.log(arr);

const obj = { 0: "a", 1: "b", length: 2 };
console.log(Array.prototype.myPop.call(obj));
console.log(obj);

*/

// 6️⃣ myShift --------------------------------------------------

/*

Array.prototype.myShift = function () {
  if (this.length === 0) return undefined;

  const first = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }

  this.length--;

  console.log("this : ", this);

  return first;
};

const arr = [1, 2, 3, 4];
console.log(arr.myShift());
console.log(arr);

const obj = { 0: "a", 1: "b", length: 2 };
console.log(Array.prototype.myShift.call(obj));
console.log(obj);

*/

// 7️⃣ myUnshift --------------------------------------------------

/*

Array.prototype.myUnshift = function (...items) {
  let count = items.length;

  for (let i = this.length - 1; i >= 0; i--) {
    this[i + count] = this[i];
  }

  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
  }

  return this.length;
};

const arr = [1, 2, 3, 4];
console.log(arr.myUnshift(5, 6));
console.log(arr);

const obj = { 0: "a", 1: "b", length: 2 };
console.log(Array.prototype.myUnshift.call(obj, "c"));
console.log(obj);

*/

// 8️⃣ myIncludes --------------------------------------------------

/*

Array.prototype.myIncludes = function (value, fromIndex = 0) {
  let start = fromIndex;

  if (start < 0) {
    start = this.length + start;
    if (start < 0) start = 0;
  }

  for (let i = start; i < this.length; i++) {
    // skip holes
    if (!(i in this)) continue;

    if (this[i] === value || (Number.isNaN(this[i]) && Number.isNaN(value))) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, , " ", null, NaN, undefined, 4];
console.log(arr.myIncludes(4, -8)); // true
console.log(arr.includes(4, -8)); // true
console.log(arr.myIncludes(null)); // true
console.log(arr.includes(null)); // true
console.log(arr.myIncludes(NaN)); // true
console.log(arr.includes(NaN)); // true
console.log(arr.myIncludes(undefined)); // true
console.log(arr.includes(undefined)); // true
console.log(arr.myIncludes(" ")); // true
console.log(arr.includes(" ")); // true

const obj = { 0: "a", 1: "b", 2: "c", 3: "d", length: 4 };
console.log(Array.prototype.myIncludes.call(obj, "d", 5));
console.log(obj);

*/

// 9️⃣ myIndexof --------------------------------------------------

/*

Array.prototype.myIndexOf = function (value, fromIndex = 0) {
  let start = fromIndex;

  if (start < 0) {
    start = this.length + start;
    if (start < 0) start = 0;
  }

  if (start >= this.length) {
    return -1;
  }

  for (let i = start; i < this.length; i++) {
    if (!(i in this)) continue;

    if (this[i] === value) {
      return i;
    }
  }

  return -1;
};

const arr = [1, 2, 3, , " ", null, NaN, undefined, 4];
console.log(arr.myIndexOf(4, -8)); // 7
console.log(arr.indexOf(4, -8)); // 7
console.log(arr.myIndexOf(null)); // 4
console.log(arr.indexOf(null)); // 4
console.log(arr.myIndexOf(NaN)); // -1
console.log(arr.indexOf(NaN)); // -1
console.log(arr.myIndexOf(undefined)); // 6
console.log(arr.indexOf(undefined)); // 6
console.log(arr.myIndexOf(" ")); // 4
console.log(arr.indexOf(" ")); // 4

const obj = { 0: "a", 1: "b", 2: "c", 3: "d", length: 4 };
// console.log(Array.prototype.myIndexOf.call(obj, "c", -4));

*/

// 9️⃣ myForEach --------------------------------------------------

/*

Array.prototype.myForEach = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const obj = Object(this);
  const length = Math.min(
    Math.max(Math.floor(Number(obj.length)) || 0, 0),
    Number.MAX_SAFE_INTEGER,
  );

  for (let i = 0; i < length; i++) {
    if (i in obj) {
      callback.call(thisArg, obj[i], i, obj);
    }
  }
};

const obj = {
  multiplier: 2,
};

const arr = [1, 2, 3, , " ", null, NaN, undefined, 4];

arr.myForEach(function (value, index, array) {
  console.log(value, index, value * this.multiplier);
}, obj);

*/

// 1️⃣0️⃣ myMap --------------------------------------------------

/*

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }

  return result;
};

const obj = {
  multiplier: 2,
};

const arr = [1, 2, 3, , " ", null, NaN, undefined, 4];

arr.myMap(function (value, index, array) {
  console.log(value, index, value * this.multiplier);
}, obj);

*/

// 1️⃣1️⃣ myFilter --------------------------------------------------

/*

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const arr = [1, 2, 3, , " ", null, NaN, undefined, 4];
const result = arr.myFilter((value) => value > 2);
console.log(result);

*/

// 1️⃣2️⃣ mySome --------------------------------------------------

/*

Array.prototype.mySome = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4];
const result = arr.mySome((value) => value > 3);
console.log(result);

*/

// 1️⃣3️⃣ myEvery --------------------------------------------------

/*

Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (!callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 3, 4];
const result = arr.myEvery((value) => value > 0);
console.log(result);

*/

// 1️⃣4️⃣ myReduce --------------------------------------------------
/* 

array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
process an array and reduce it to a single value

- accumulator → stores the result from previous steps
- currentValue → current item in the array
- initialValue (optional) → starting value for the accumulator

*/

/*

const arr = [1, 2, 3, 4];

const result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 2);

console.log(result); // 12

*/

/*

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let accumulator;
  let startIndex = 0;

  // ❗ Handle no initial value
  if (arguments.length < 2) {
    // Find first valid element (skip holes)
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }

    // If no valid element → throw error
    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = this[startIndex];
    startIndex++;
  } else {
    accumulator = initialValue;
  }

  // ❗ Main loop (skip holes)
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];

const result = arr.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 2);

console.log(result);

*/

// 1️⃣5️⃣ mySlice --------------------------------------------------
// 1️⃣6️⃣ mySplice --------------------------------------------------
// pipe utility
// Array.find
// Promise.race
// grouping array of objects by key
// most frequent word in paragraph
// checking deep equality between objects

// ======================================================================

/*

function myNew(Constructor, ...args) {
  // 1. create empty object
  const obj = {};

  // 2. link prototype
  Object.setPrototypeOf(obj, Constructor.prototype);

  // 3. call constructor
  const result = Constructor.apply(obj, args);

  // 4. return rule of "new"
  return result !== null && typeof result === "object"
    ? result
    : obj;
}

function myNew(Constructor, ...args) {
  // 1. Create empty object linked to constructor prototype
  const obj = Object.create(Constructor.prototype);

  // 2. Call constructor with obj as this
  const result = Constructor.apply(obj, args);

  // 3. If constructor returns object, return it
  // otherwise return created object
  return result !== null && typeof result === "object"
    ? result
    : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log("Hi");
};

const p1 = myNew(Person, "Kedar", 23);

console.log(p1);
p1.sayHi();

*/
