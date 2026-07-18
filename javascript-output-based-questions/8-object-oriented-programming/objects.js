// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.greet = function () {
//   console.log("Hello!");
// };

// person.greet();

// ----------------------------------------

// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// function greet() {
//   console.log("Hello, World!");
// }

// person.greet = greet;

// person.greet();

// ----------------------------------------

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   greet: function () {
//     console.log("Hello, World!");
//   },
// };

// person.greet();

// ----------------------------------------

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet() {
//         console.log('Hello, World!');
//     }
// };

// person.greet();

// ----------------------------------------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.getFullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// let person = new Person("John", "Doe");
// console.log(person.getFullName());

// let p = Person("John", "Doe");
// console.log(p.firstName);
// console.log(p.getFullName());

// ----------------------------------------

// let obj = { id: 10 };

// console.log(Object.getPrototypeOf(obj));

// -------------------------------------

// function myfun() {}

// let obj1 = new myfun();

// console.log(Object.getPrototypeOf(obj1));

// -------------------------------------

// let person = { name: "Kedar" };

// const object = Object.getPrototypeOf(person);
// const descriptor = Object.getOwnPropertyDescriptor(object, "toString");
// //console.log(descriptor);

// Object.defineProperty(person, "name", {
//   writable: false,
// });

// person.name = "John";

// console.log(person);

// ----------------------------------------

// const personProto = {
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const p1 = Object.create(personProto);
// p1.firstName = "John";
// p1.lastName = "Doe";

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// const p2 = new Person("John", "Doe");

// -----------------------------------------------------------

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Employee extends Person {
//   constructor(firstName, lastName, role) {
//     super(firstName, lastName);
//     this.role = role;
//   }
// }

// -------------------------------------------------------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// function Employee(firstName, lastName, role) {
//   Person.call(this, firstName, lastName);
//   this.role = role;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// console.log(Person.prototype);
// console.log(Employee.prototype);

// ----------------------------------------------------------

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// function Employee(firstName, lastName, role) {
//   Person.call(this, firstName, lastName);

//   this.role = role;
// }

// // inheritance manually
// Employee.prototype = {};

// Object.setPrototypeOf(Employee.prototype, Person.prototype);

// Employee.prototype.constructor = Employee;
