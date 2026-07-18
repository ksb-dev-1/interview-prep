// let person = { name: "John" };

// console.log(person);
// console.log(Object.getPrototypeOf(person));
// console.log(typeof Object);
// console.log(Object.prototype);
// console.log(Object.prototype.constructor === Object); // true

// -----------------------------------------------------------------------

function Person(name) {
  this.name = name;
}
/*
Internally
----------

Person = {
  prototype: {
    constructor: Person
  }
}
*/

console.log(Person.prototype);
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "constructor"));

Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + "!";
};

console.log(
  "---------------------------------------------------------------------",
);

console.log(Person.prototype);
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "greet"));

let p1 = new Person("John");
let p2 = new Person("Jane");

p2.draw = function () {
  return "I can draw.";
};

console.log(
  "---------------------------------------------------------------------",
);

console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor === Person);

console.log(p1);
console.log(Object.getPrototypeOf(p1) === Person.prototype);

console.log(p2);
console.log(Object.getPrototypeOf(p2) === Person.prototype);

// ------------------------------------------------------------

// const obj = {};

// Object.defineProperty(obj, "hidden", {
//   value: 123,
//   enumerable: false,
// });

// console.log(obj); // { hidden : 123 }
// console.log(Object.keys(obj));

// ------------------------------------------------------------------

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static welcome() {}

//   greet() {}
// }

// const p = new Person("John");
// console.log(p);
// console.log(Object.getPrototypeOf(p));
// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(p) === Person.prototype);

// constructor function
// function Dog(name) {
//   console.log("This is :", this);
//   this.name = name;

//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };

//   this.sleep = function () {
//     console.log(`${this.name} is sleeping!`);
//   };
// }

// const dog1 = new Dog("Milo");
// console.log(dog1);
// console.log("------------");
// const dog2 = new Dog("Jerry");
// console.log(dog2);
// console.log("------------");
// console.log(dog1.bark === dog2.bark);

// ----------------------------------------------

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   bark() {
//     console.log(`${this.name} says woof!`);
//   }

//   sleep() {
//     console.log(`${this.name} is sleeping!`);
//   }
// }

// const dog3 = new Dog("Milo");
// console.log(dog3);
// console.log("------------");
// const dog4 = new Dog("Jerry");
// console.log(dog4);
// console.log("------------");
// console.log(dog3.bark === dog4.bark);

// ----------------------------------------------

// function Dog(name) {
//   console.log("This is :", this);
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(`${this.name} says woof!`);
// };

// Dog.prototype.sleep = function () {
//   console.log(`${this.name} is sleeping!`);
// };

// const dog1 = new Dog("Milo");
// console.log(dog1);
// console.log("------------");
// const dog2 = new Dog("Jerry");
// console.log(dog2);
// console.log("------------");
// console.log(dog1.bark === dog2.bark);

// ----------------------------------------------
