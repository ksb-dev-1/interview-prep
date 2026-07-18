function Person(name) {
  this.name = name;
}

console.log(Person);
console.log("Person.prototype : ", Person.prototype);
console.log("Person.prototype.constructor : ", Person.prototype.constructor);
console.log(
  "Person.prototype.constructor === Person : ",
  Person.prototype.constructor === Person,
);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));

Person.prototype.greet = function () {
  // console.log("this :", this);
  return "Hi, I'm " + this.name + "!";
};

let p1 = new Person("John");
console.log("p1 : ", p1);
console.log("p1.greet() : ", p1.greet());
console.log("p1.toString() : ", p1.toString());

console.log(p1.constructor === Person);
console.log(personalbar.prototype); // undefined - prototype exists on FUNCTIONS, not on normal OBJECTS.

console.log(p1.hasOwnProperty("greet")); // false
console.log(p1.hasOwnProperty("constructor")); // false
console.log(Object.getOwnPropertyDescriptors(Person.prototype));

// let p2 = new Person("Jane");

// p1.greet = function () {
//   return "Hello";
// };

// p2.draw = function () {
//   return "I can draw.";
// };

// // p1.draw(); // Error
// console.log("p1.greet() : ", p1.greet());
// console.log("p2.draw() : ", p2.draw());

// console.log(p1.constructor);
// console.log(p1.constructor === Person);

// console.log("p1 : ", p1);
// console.log("p2 : ", p2);
// console.log(Person.prototype);
// console.log(p1.__proto__);
// console.log(p2.__proto__);

// console.log(p1.__proto__ === Person.prototype); // true
// console.log(p1.__proto__ === p2.__proto__); // true

// // Recommended
// console.log(Object.getPrototypeOf(p1) === Person.prototype); // true
// console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2)); // true

// console.log(p1.constructor.prototype);
// console.log(p1.constructor.prototype === Person.prototype);
