// let obj = { id: 10 };

// console.log(Object.getPrototypeOf(obj));

// -------------------------------------

// function myfun() {}

// let obj1 = new myfun();

// console.log(Object.getPrototypeOf(obj1));

// -------------------------------------

let person = { name: "Kedar" };

const object = Object.getPrototypeOf(person);
const descriptor = Object.getOwnPropertyDescriptor(object, "toString");
//console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false,
});

person.name = "John";

console.log(person);
