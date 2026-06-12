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
// p.dance();
// const fn = p.dance;
// fn();
