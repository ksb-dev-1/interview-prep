function curry(fn) {
  return function curried(...args) {
    const context = this; // 👈 Capture `this` ONCE

    if (args.length >= fn.length) {
      return fn.apply(context, args); // ✅ Use preserved context
    }
    return function (...nextargs) {
      return curried.apply(context, [...args, ...nextargs]); // ✅ Use preserved context
    };
  };
}

function userInfo(name, age, role) {
  return `ID: ${this.id} NAME: ${name} AGE: ${age} ROLE: ${role}`;
}

const obj = {
  id: "#123",
  getInfo: curry(userInfo),
};

// const step1 = obj.getInfo("John");
// console.log(step1);
// const step2 = step1("33");
// console.log(step2);
// const step3 = step2("User");
// console.log(step3);

console.log(obj.getInfo("John")("33")("User"));
