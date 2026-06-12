// 1️ ==============================================================================================================================

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();

/* 🟢 Output:

undefined
Reference error

*/

/* 📌 Explanation:

var name is hoisted to the top of the function and initialized with undefined.
So when console.log(name) runs, it prints undefined.

let age is also hoisted, but not initialized (it stays in the Temporal Dead Zone).
Accessing it before its declaration causes a ReferenceError.

TDZ is the phase where a let or const variables are hoisted but not initialized, so accessing it before declaration throws a ReferenceError.

*/

// 2️⃣ ==============================================================================================================================

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// // Fix without changing var to let
// for (var i = 0; i < 3; i++) {
//   (function (capturedI) {
//     setTimeout(() => console.log(capturedI), 1);
//   })(i);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

/* 🟢 Output:

3,3,3
0,1,2

*/

/* 📌 Explanation:

This question involves closures, event loop, and the difference between var and let scoping.

- In the first loop, var is used. Since var is function-scoped, there is only one shared variable i across all iterations.
- The loop runs synchronously and schedules 3 setTimeout callbacks. However, setTimeout is asynchronous, so those callbacks execute only after the loop finishes.
- By the time the callbacks execute, the loop has already completed and i has become 3. Since all callbacks reference the same variable, they all print 3.

- In the second loop, let is block-scoped. JavaScript creates a new binding of i for each iteration.
- So each setTimeout callback closes over its own copy of i — 0, 1, and 2 respectively.
That’s why the output is 0, 1, and 2.

With var, all callbacks share the same variable so they print the final value (3). With let, each iteration gets its own scoped variable, so it prints 0, 1, 2

*/

// 3️⃣ ==============================================================================================================================

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

/* 🟢 Output:

10
NaN

*/

/* 📌 Explanation:

- diameter() is a normal function, so this refers to the shape object → this.radius = 10 → 10 * 2 = 20.
- perimeter is an arrow function, and arrow functions do NOT have their own this.
- They take this from the surrounding (global) scope → here this.radius is undefined.
- So calculation becomes: 2 * Math.PI * undefined = NaN.

- "this" is a special keyword that refers to the object that is currently executing the function.
- The value of "this" is not fixed — it depends on how a function is called, not where it is written.

*/

// 4️⃣ ==============================================================================================================================

// +true;
// !"Lydia";

/* 🟢 Output:

1
false

*/

/* 📌 Explanation:

The unary plus tries to convert an operand to a number. true is 1, and false is 0.

The string 'Lydia' is a truthy value. What we're actually asking, is "Is this truthy value falsy?". This returns false

*/

// 5️⃣ ==============================================================================================================================

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };

/*
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid
*/

/* 🟢 Output:

A: mouse.bird.size is not valid

*/

/* 📌 Explanation:

In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

*/

// 6️⃣ ==============================================================================================================================

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

/* 

🟢 Output:
-----------
Hello

📌 Explanation:
----------------
- In JavaScript, objects are assigned by reference, not by value.
- d = c does NOT create a copy.
- Both c and d point to the same object in memory

*/

// 7️⃣ ==============================================================================================================================

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

/* 

🟢 Output:
-----------
true
false
false

📌 Explanation:
----------------

a == b → true

- == does type coercion
- b (object) is converted to primitive → 3
- 3 == 3 → true

a === b → false

- === checks value + type
- a is number, b is object → different types
- so false

b === c → false

- again object vs primitive
- even though value is 3, types differ → false

*/

// 8️⃣ ==============================================================================================================================

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

/* 

🟢 Output:
-----------
TypeError

📌 Explanation:
----------------
- Static methods are called on the class, not on instances

*/

// 9️⃣ ==============================================================================================================================

// let greeting;

// greetign = {};
// console.log(greetign);

/* 

🟢 Output:
-----------
{}

📌 Explanation:
----------------
- greetign is not declared, so JavaScript (in non-strict mode) creates it as a global variable.

*/

// 🔟 ==============================================================================================================================

// function bark() {
//   console.log("Woof!");
// }

// bark.animal = "dog";

/*
A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: "Woof" gets logged.
D: ReferenceError
*/

/* 

🟢 Output:
-----------
A: Nothing, this is totally fine!

📌 Explanation:
----------------
In JavaScript, functions are objects.

👉 That means you can:

- call them
- AND also add properties to them

*/

// 1️⃣1️⃣ ==============================================================================================================================

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣2️⃣ ==============================================================================================================================

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣3️⃣ ==============================================================================================================================

// What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣4️⃣ ==============================================================================================================================

// All object have prototypes.
// A: true
// B: false

// 1️⃣5️⃣ ==============================================================================================================================

// function sum(a, b) {
//   return a + b;
// }

// sum(1, "2");

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣6️⃣ ==============================================================================================================================

// let number = 0;

// console.log(number++);
// console.log(++number);
// console.log(number);

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣7️⃣ ==============================================================================================================================

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣8️⃣ ==============================================================================================================================

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 1️⃣9️⃣ ==============================================================================================================================

// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 2️⃣0️⃣ ==============================================================================================================================

// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }

// getAge();

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/

// 2️⃣1️⃣ ==============================================================================================================================

/* 

🟢 Output:
-----------

📌 Explanation:
----------------

*/
