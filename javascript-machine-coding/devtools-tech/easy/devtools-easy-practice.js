// "use strict";

// 1️⃣ myCall - functionName.call(this, arg1, arg2, ...);

Function.prototype.myCall = function (context, ...args) {};

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

/*

function crash() {
  throw new Error("boom");
}
const obj = {};

try {
  crash.myCall(obj);
} catch {}

console.log(Object.getOwnPropertySymbols(obj)); // []

*/

// 2️⃣ myApply - functionName.apply(this, [arg1, arg2, ...]);

Function.prototype.myApply = function (context, ...args) {};

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

// 3️⃣ myBind - const newFunction = functionName.bind(this, arg1, arg2, ...);

Function.prototype.myBind = function (context, ...args) {};

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

// 4️⃣ myPush

// 5️⃣ myPop
