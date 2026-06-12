// ----- EXERCISE-1 -----

// const obj = {
//   a: 1,
//   b: function () {
//     console.log(this.a);
//   },
//   c() {
//     console.log(this.a);
//   },
//   d: () => {
//     console.log(this.a);
//   },
//   e: (function () {
//     return () => {
//       console.log(this.a);
//     };
//   })(),
//   f: function () {
//     return () => {
//       console.log(this.a);
//     };
//   },
// };

// console.log(obj.a);
// obj.b();
// obj.b();
// const b = obj.b;
// b();
// obj.b.apply({ a: 2 });
// obj.c();
// obj.d();
// obj.d();
// obj.d.apply({ a: 2 });
// obj.e();
// obj.e();
// obj.e.call({ a: 2 });
// obj.f()();
// obj.f()();
// obj.f().call({ a: 2 });

// ________________________________________________________

// ----- EXERCISE-1 -----

const obj = {
  dev: "bfe",

  a: function () {
    return this.dev;
  },

  b() {
    return this.dev;
  },

  c: () => {
    return this.dev;
  },

  d: function () {
    return (() => {
      return this.dev;
    })();
  },

  e: function () {
    return this.b();
  },

  f: function () {
    return this.b;
  },

  g: function () {
    return this.c();
  },

  h: function () {
    return this.c;
  },

  i: function () {
    return () => {
      return this.dev;
    };
  },
};

console.log(obj.a());

console.log(obj.b());

console.log(obj.c());

console.log(obj.d());

console.log(obj.e());

console.log(obj.f());

const b = obj.f();
console.log(obj.f()());

console.log(obj.g());

console.log(obj.h()());

console.log(i());

console.log(obj.i());

console.log(obj.i()());
