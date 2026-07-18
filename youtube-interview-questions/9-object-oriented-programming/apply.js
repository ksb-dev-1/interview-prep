//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

//const colors = ["red", "green", "blue"];

// class Person1 {
//   constructor(name) {
//     this.name = name;
//   }

//   printInfo(age, country) {
//     console.log(
//       `I am ${this.name} and I am ${age} years old. I live in ${country}.`
//     );
//   }
// }

// class person2 {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const person1 = new Person1("John");
// person1.printInfo("45", "Austrailia");

// const fn = person1.printInfo;
// //fn();
// fn.apply(new person2("Kedar"), ["31", "India"]);

// ----------------------------

// const nums = [1, 2, 3, 4, 5];
// console.log(Math.max(nums));
// console.log(Math.max.apply("null", nums));
// console.log(Math.max(...nums));
