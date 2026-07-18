/*
The new keyword does 4 things

1. Creates an empty object
2. Sets the keyword this to be that object
3. Returns the object - returns this
4. Creates a link to objects prototype

 */

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

// console.log(Dog("Milo"));
// console.log("------------");
// console.log(new Dog("Milo"));

// ---------------------------------------

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const c1 = new Circle(1);

// const Circle1 = new Function(
//   "radius",
//   `
// this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// `
// );

// const c2 = new Circle1(1);

// ------------------------------------------
