/* // 1️⃣ --------------------------------------------------

var foo = 1;

var change = () => {
  this.foo = 2;
  console.log(this.foo);
};

var obj = {
  foo: 3,
};

var bounded = change.bind(obj);

console.log(foo); 
console.log(change()); 
console.log(foo); 
console.log(obj.foo); 
console.log(bounded()); 

*/

/* 📌 Output

1
2 undefined
2
3
2 undefined

*/

/* // 2️⃣ --------------------------------------------------

function compute() {
  const condition = true;

  if (condition) {
    let a = false;
    let b = false;
  }

  return {
    a: a || null,
    b: b || null,
  };
}

var r = compute();

console.log(r);

*/

/* 📌 Output

ReferenceError

Variables a and b are blocked scope. They do not exist outside the if condition. If we try to use them then it would be an error as those variables are undeclared in that scope.

*/

/* // 3️⃣ --------------------------------------------------

function compare(input) {
  return !!(input == 1 || input == 2 || input == 3);
}

console.log(compare(0));
console.log(compare(1));
console.log(compare(2));
console.log(compare(3));
console.log(compare(4));
console.log(compare([1]));
console.log(compare([2]));
console.log(compare([3]));

*/

/* 📌 Output 

false
true
true
true
false
true 
true 
true


When you use ==, JavaScript tries to coerce types to make them comparable.
Because [1] is coerced to "1" and then to 1, so [1] == 1 is true

*/

/* // 4️⃣ --------------------------------------------------

function init() {
  // throw new Error("I am an error");
  // return Promise.resolve(1);

  // ✅ Fix
  return Promise.resolve().then(() => {
    throw new Error("I am an error");
  });
}

init()
  .then((v) => console.log(v + 1))
  .catch((err) => console.log("Error caught -- ", err));

*/

/* 📌 Output

Uncaught Error: I am an error

errors are caught by the catch block only when they are part of the promise chain. In the current code snippet, error thrown at line no. 2 is outside the promise chain

*/

/* // 5️⃣ --------------------------------------------------

var person = {};

({ name: person["username"] } = {
  username: "johndoe",
  email: "johndoe@gmail.com",
  name: "john",
});

console.log(person.username, person.name);

const obj = { a: 10 };
const { a: x } = obj;
console.log(x);

const target = {};
({ a: target.value } = { a: 42 });
console.log(target.value);

const result = {};
({ x: result.a, y: result.b } = { x: 1, y: 2 });
console.log(result);

*/

/* 📌 Output

john, undefined
10
42
{a: 1, b: 2}

*/

/* // 6️⃣ --------------------------------------------------

var x = 1;

for (; x < 6; x += 2) {
  x = x * x;
}

console.log(x);

*/

/* 📌 Output

11

*/

/* // 7️⃣ --------------------------------------------------

const first = 6;
const second = "6";
const third = first + second; 
const fourth = first - second; 
const fifth = third + first * first; 
const sixth = fourth + second * second; 

console.log("Fifth is --", fifth, typeof fifth); 
console.log("Sixth is --", sixth, typeof sixth); 

*/

/* 📌 Output

third = 66
fourth = 0
fifth = 66 + 6 * 6 = 6636
sixth = 0 + '6' * '6' = 36

Fifth is -- 6636, string
Sixth is -- 36, number

*/

/* // 8️⃣ --------------------------------------------------

function reverse(string) {
  let i;
  let temp;
  const limit = parseInt(string.length / 2, 10);

  for (i = 0; i < limit; i++) {
    temp = string[i];
    string[i] = string[string.length - i - 1];
    string[string.length - i - 1] = temp;
  }

  return string;
}

const reversed = reverse("hello");
console.log(reversed);

*/

/* 📌 Output

hello

Strings are immutable

✅ Fix:

function reverse(str) {
  let arr = str.split(""); // make it mutable
  let temp;
  const limit = Math.floor(arr.length / 2);

  for (let i = 0; i < limit; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }

  return arr.join("");
}

console.log(reverse("hello"));

*/

/* // 9️⃣ --------------------------------------------------

var person = "John";

var deletePerson = () => {
  delete person;
  return person;
};

console.log(deletePerson());

*/

/* 📌 Output

John

delete only works on object properties, NOT on variables declared with var, let, or const

*/

/* // 1️⃣0️⃣ --------------------------------------------------

(function () {
  var first = (second = 5);
})();

console.log(second);

*/

/* 📌 Output

5

if used "use strict" then you'll get Reference error

is interpreted the following way:
var first = second;
second = 5;
But second is not declared anywhere in the function with var so it is set equal to 5 in the global scope.

*/

/* // 1️⃣1️⃣ --------------------------------------------------

let x = 1;

do {
  let y = --x;
  console.log(x++ + --y);
} while (x++ < 5);

*/

/* 📌 Output

-1 1 3 5 7

*/

/* // 1️⃣2️⃣ --------------------------------------------------

console.log("a");

setTimeout(() => {
  console.log("b");
}, 1);

setTimeout(() => {
  console.log("c");
}, 10);

setTimeout(() => {
  console.log("d");
}, 0);

console.log("e");

*/

/* 📌 Output

a e d b c

*/

/* // 1️⃣3️⃣ --------------------------------------------------

let num = 0;

async function increment() {
  num += await 2;
  console.log(num);
}

increment();

num += 1;
console.log(num);

*/

/* 📌 Output

1 2

*/

/* // 1️⃣4️⃣ --------------------------------------------------

function findIntersection(first, second) {
  const firstSet = new Set(first);

  return second.reduce((acc, current) => {
    return firstSet.has(current) ? [...acc, current] : acc;
  }, []);
}

function init() {
  const first = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const second = [1, 2, 3, 4, 5];
  console.log(findIntersection(first, second));
}

*/

/* 📌 Output

*/

/* //  1️⃣5️⃣ --------------------------------------------------

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 10);
  })(i);
}

*/

/* 📌 Output

5 5 5 5 5

0 1 2 3 4

0 1 2 3 4

*/

/* // 1️⃣6️⃣ --------------------------------------------------

class Pandav {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}
class Kaurav {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}
class Guru {
  constructor(name, weapon) {
    this.name = name;
  }
}

var Duryodhana = new Kaurav("Duryodhana", "Gada");
let Arjuna = new Pandav("Arjuna", "Gandiva");
const Dronacharya = new Guru("Dronacharya");

console.log(
  Arjuna.weapon,
  window.Arjuna,
  Duryodhana.weapon,
  window.Duryodhana,
  Dronacharya.name,
  window.Dronacharya,
);

*/

/* 📌 Output

Gandiva
undefined
Gada
{name: "Duryodhana", weapon: "Gada"}
Dronacharya
undefined

var creates a property on the global object, if declared globally.
let and const do not — even if declared globally.

*/

/* // 1️⃣7️⃣ --------------------------------------------------

function Person(name) {
  this.name = name;
}

// Person.prototype.getName = function () {
//   return this.name;
// };

Person.prototype.getName = () => {
  return this.name;
};

const john = new Person("John");
console.log(john.getName());
console.log(john.getName() === window.name);
console.log(window);
console.log(window.name);
console.log(typeof window.name);

*/

/* 📌 Output

John for normal function

Value of the property name on the global object for arrow function

*/

/* // 1️⃣8️⃣ --------------------------------------------------

const a = "1";

switch (+a) {
  case "1":
    console.log("🍕");
    break;
  case 1:
    console.log("🚀");
    break;
  default:
    console.log("👻");
}

*/

/* 📌 Output

🚀

a is "1" (a string)
+a uses unary plus, which converts it to a number → 1

*/

/* // 1️⃣9️⃣ --------------------------------------------------

const first = 2 in [1, 2];
const second = "2" in [0, 1, 2];

console.log(first, second);

*/

/* 📌 Output

false true

key in object

*/

/* // 2️⃣0️⃣ --------------------------------------------------

function Person(name) {
  this.name = name;

  var person = {
    name: "Jane",
  };

  function person() {
    return {
      name: "Cody",
    };
  }

  return person;
}

var john = new Person("John");
console.log(john); 

*/

/* 📌 Output

{name: "Jane"}

function person() { ... }   // hoisted (highest priority)
var person;                // declared but ignored (same name)

-- Inside the constructor, if we explicitly return an object, that object replaces this
-- Although there is a function named person, it gets overwritten by the var person = { name: "Jane" } assignment during execution. So the returned value is the object { name: "Jane" }
-- If you return an object/function → that is returned instead of this
-- If you return a primitive → it is ignored, and this is returned

function Person(name) {
  // hoisted:
  function person() { return { name: "Cody" }; }
  var person; // ignored because function already declared

  this.name = name;

  person = { name: "Jane" }; // assignment overrides the function

  return person;
}

*/

/* 2️⃣1️⃣ --------------------------------------------------

function Person(name) {
  this.name = name;

  function person() {
    return {
      name: "Jane",
    };
  }

  var person = {
    name: "Cody",
  };

  var person = false;

  return person;
}

var john = new Person("John");
console.log(john);

*/

/* 📌 Output

{name : "John"}

If you return an object/function → that is returned instead of this
If you return a primitive → it is ignored, and this is returned

*/

/* 2️⃣2️⃣ --------------------------------------------------

const User = require("../models/User");
const Question = require("../models/Question");
const { getCurrentSession } = require("../utils");

async function getQuestion(questionId) {
  const isIdInvalid = !questionId || !questionId.trim().length;

  if (isIdInvalid) {
    throw new Error("Bad Request");
  }

  const question = await Question.getQuestionById(questionId);

  // assume we have this utility to find current session
  // computes to an object with proper user data
  const session = getCurrentSession();

  if (session) {
    // computes to false
    const isAuthorRequest = question.author.id === session.user.id;
    const author = isAuthorRequest
      ? session.user
      : await User.getUserById(question.author.id);
  }

  return {
    ...question,
    author: author || null,
  };
}

const question = await getQuestion("Iahbvfkg5H86a6KL8yBD");

console.log(question);

*/

/* 📌 Output

author is declared with const inside the if block, so accessing it outside gives an error.

*/

/* // 2️⃣3️⃣ --------------------------------------------------

How the comparison happens with switch cases in JavaScript?

A: Both the expression's value and datatype are matched
B: Only the datatype of the expression is compared
C: Only the value of the expression is compared
D: None of the above

*/

/* 📌 Output

A 

JavaScript switch uses strict equality (===) for comparison.

And === means:

✅ value must match
✅ datatype must also match

*/

/* // 2️⃣4️⃣ --------------------------------------------------

const isMinGreater = Math.min() > Math.max();
const isMaxGreater = Math.max() > Math.min();

console.log(isMinGreater, isMaxGreater);

*/

/* 📌 Output

true false

In Javascript Math.max() is lesser than Math.min() because Math.max() returns -Infinity and Math.min() returns Infinity.

*/

/* // 2️⃣5️⃣ --------------------------------------------------

What is the process in which an object or data structure is converted to series of bytes for easy storage or network transfer?

A: Object Encapsulation
B: Object Serialization
C: Object Inheritance
D: Object Polymorphism
E: None of the above

*/

/* 📌 Output

B

*/

/* // 2️⃣6️⃣ --------------------------------------------------

Which function is used to convert an object into a JSON string in Javascript?
Which function is used to convert a JSON into an object string in Javascript?

*/

/* 📌 Output

JSON.stringify()
JSON.parse()

*/

/* // 2️⃣7️⃣ --------------------------------------------------

What would be the output of the following code?

*/

/* 📌 Output

[3, 4]

*/

/* // 2️⃣8️⃣ --------------------------------------------------

Is Fetch API part of JavaScript Engine or JavaScript Runtime?

*/

/* 📌 Output

JavaScript Runtime

Different APIs like Fetch API, DOM API, Web Storage API are part of the JavaScript Runtime like Browser.

*/

/* // 2️⃣9️⃣ --------------------------------------------------

const name = { firstName: "devtools", lastName: "tech" };
const nameCopy = name;

nameCopy.firstName = "dev";

console.log(name);

*/

/* 📌 Output

{ firstname: 'dev', lastname: 'tech' }

*/

/* // 3️⃣0️⃣ --------------------------------------------------

function init() {
 try {
   return 1;
 } finally {
   return 2;
 }
}

console.log(init());

*/

/* 📌 Output

2

*/

/* // 3️⃣1️⃣ --------------------------------------------------

const user = {
  username: 'dev_master',
  points: 1200,

  printDetails() {
    console.log(`${this.username} has ${this.points} points`);
  },

  printDetailsArrow: () => {
    console.log(`${this.username} has ${this.points} points`);
  },

  delayedPrint() {
    setTimeout(() => {
      console.log(`(Delayed) ${this.username} has ${this.points} points`);
    }, 100);
  }
};

user.printDetails(); 

user.printDetailsArrow(); 

user.delayedPrint(); 


*/

/* 📌 Output

dev_master has 1200 points

undefined has undefined points

(Delayed) dev_master has 1200 points

*/

// ==========================================================================================

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   // 1
//   // console.log("#" + i + " " + this.species + ": " + this.name);

//   // 2
//   // print = function () {
//   //   console.log("#" + i + " " + this.species + ": " + this.name);
//   // };
//   // print();

//   // 3
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

// ------------------------------------------

// const char = ["a", "b", "c"];
// const num = [1, 2, 3];

// // char.push(...num);
// char.push.apply(char, num); // this gives control of "this"

// console.log(char);

// ------------------------------------------

// const obj = { length: 0 };
// Array.prototype.push.apply(obj, [1, 2, 3]);
// console.log(obj); // {0: 1, 1: 2, 2: 3, length: 3}

// ------------------------------------------

// const num = [1, 2, 3, 4, 5];

// console.log(Math.max(num));
// console.log(Math.max(...num));
// console.log(Math.max.apply(null, num));
// // concat() creates new array

// ----------------------------------------

// function f() {
//   console.log(this); // window
// }

// let user = {
//   g: f.bind(null),
//   // g: f,
// };

// user.g();

// ----------------------------------------

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" }).bind({ name: "Cody" });

// f(); // John

// Once a function is bound, you cannot re-bind its this

// ----------------------------------------

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password === "xyz") success();
//   else failed();
// }

// // ✅Fix: 1
// // function checkPassword(success, failed) {
// //   let password = prompt("Password?", "");
// //   if (password === "xyz") success.call(user);
// //   else failed.call(user);
// // }

// let user = {
//   name: "John",

//   loginSuccessful() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFailed() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// // You're passing method references, not calling them on user.
// checkPassword(user.loginSuccessful, user.loginFailed);

// // ✅Fix: 2
// // checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// // ✅Fix: 3
// // checkPassword(
// //   () => user.loginSuccessful(),
// //   () => user.loginFailed()
// // );

// ----------------------------------------

// function checkPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password === "xyz") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     console.log(this.name + (result ? " login successful" : " login failed"));
//   },
// };

// // checkPassword(?, ?)

// // ✅Fix: 1
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

// // ✅Fix: 2
// checkPassword(
//   () => user.login(true),
//   () => user.login(false)
// );

// ----------------------------------------

// const age = 10;
// // var age = 10;

// var person = {
//   name: "John",
//   age: 44,
//   getAge: function () {
//     console.log(this.age);
//   },
//   getAgeArrow: () => console.log(this.age),
// };

// var person2 = { age: 34 };
// person.getAge.call(person2); // 34
// person.getAgeArrow.call(person2); // undefined, 10 if declared with var

// ----------------------------------------

//  How to create an object without prototype?

/*

const obj = Object.create(null);

obj.name = "John";

console.log(obj); // {}
console.log(Object.getPrototypeOf(obj)); // null

console.log(obj.name); // John
console.log(obj.toString); // undefined
console.log(obj.hasOwnProperty); // undefined

*/

// Object.create(null) explicitly sets the prototype to null
// So the object does not inherit anything
