// let person = { name: "John" };

// console.log(person);
// console.log(Object.prototype.constructor === Object);

// ----------------------------------------

/*

The Person() function has a property called prototype that references an anonymous object. The anonymous object has the constructor property that references the Person() function.

*/

// function Person(name) {
//   this.name = name;
// }
// console.log(Person);
// console.log(Person.prototype);
// console.log(Person.prototype.constructor);

// Person.prototype.greet = function () {
//   return "Hi, I'm " + this.name + "!";
// };

// console.log(Person.prototype);

// let p1 = new Person("John");

// console.log(p1);

// ----------------------------------------

// function start() {
//   try {
//     throw new Error("New error thrown");
//   } catch (error) {
//     return "Catch returned";
//   } finally {
//     return "Finally returned";
//   }
// }

// const res = start();

// console.log(res);

// ----------------------------------------
