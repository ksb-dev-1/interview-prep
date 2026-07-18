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

function Dog(name) {
  console.log("This is :", this);
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says woof!`);
};

Dog.prototype.sleep = function () {
  console.log(`${this.name} is sleeping!`);
};

const dog1 = new Dog("Milo");
console.log(dog1);
console.log("------------");
const dog2 = new Dog("Jerry");
console.log(dog2);
console.log("------------");
console.log(dog1.bark === dog2.bark);
