/*
The bind method creates a copy of the function 
and sets the this keyword, while the call 
and apply methods sets the this keyword and 
calls the function immediately.
*/

const person1 = {
  name: "Kedar",
  getName: function (age) {
    console.log(`My name is ${this.name} and I am ${age} Years old`);
  },
};

const person2 = {
  name: "John",
};

person1.getName("37");
person1.getName.call(person2, "65");
const fn = person1.getName.bind(person2, "45");
fn();

// -----------------------------

// const person1 = {
//   name: "Kedar",
//   getName: function () {
//     console.log(this);
//     console.log(`My name is ${this.name}`);
//   },
// };

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", person1.getName);
// btn.addEventListener("click", person1.getName.bind(person1));

// -----------------------------

// class Counter {
//   constructor(count = 1, increment = 1) {
//     this.count = count;
//     this.increment = increment;
//   }

//   startCounter() {
//     const interval = setInterval(
//       function () {
//         console.log(this.count);
//         this.count += this.increment;

//         if (this.count > 5) clearInterval(interval);
//       }.bind(this),
//       1000
//     );
//   }

//   fn() {
//     console.log(this.count);
//     this.count += this.increment;
//   }
// }

// const counter = new Counter();
// counter.startCounter();
