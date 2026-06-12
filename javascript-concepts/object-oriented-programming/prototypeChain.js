const grandParent = {
  name: "John",
  greet() {
    console.log("Hi there!");
  },
};

const parent = {
  name: "Mitchell",
  sing() {
    console.log("LA LA LA...");
  },
  __proto__: grandParent,
};

const child = {
  name: "Steve",
  __proto__: parent,
};

child.greet();
child.sing();

// console.log(child.__proto__);
// console.log(child.__proto__.__proto__);
// console.log(child.__proto__.__proto__.__proto__);
// console.log(child.__proto__.__proto__.__proto__.__proto__);

// ---------------------------------
