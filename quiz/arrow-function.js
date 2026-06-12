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

// console.log(obj.a());

// console.log(obj.b());

// console.log(obj.c());

// console.log(obj.d());

// console.log(obj.e());

// console.log(obj.f());

// const b = obj.f();
// console.log(b);
// console.log(b());
//console.log(obj.f()()); // this code equals to const b = obj.f() then b()

// console.log(obj.g());

// console.log(obj.h()());
// const i = obj.i();
// console.log(i);
// console.log(i());

// console.log(obj.i());

// console.log(obj.i()());

/*

bfe

bfe

undefined 

bfe

bfe 

fn b()

undefined

undefined

undefined

()

bfe

*/
