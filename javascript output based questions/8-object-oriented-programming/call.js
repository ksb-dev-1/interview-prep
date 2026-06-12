const person = {
  name: "Kedar",

  getName: function () {
    console.log(this);
    console.log(`Person name is ${this.name}`);
    console.log("-----------------");
  },
};

person.getName();
const fn = person.getName;
fn();
fn.call(person);

// -----------------------------------

// class Person {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }

//   dance(style = "tango", punctuation) {
//     console.log("This is", this);
//     console.log(`I am ${this.firstName} and I like to ${style} ${punctuation}`);
//     console.log("----------------");
//   }
// }

// const p = new Person("John");
// p.dance("");
// const fn = p.dance;
// //fn(); // error
// fn.call(p, "salsa", "!");

// ----------------------------------

// const person1 = {
//   name: "Kedar",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// const person2 = {
//   name: "John",
// };

// person1.getName();

// const fn = person1.getName;
// fn.call(person2);

// person1.getName.call(person2);
