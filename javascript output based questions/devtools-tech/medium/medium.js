// 1️⃣ --------------------------------------------------

/*

"use strict";

let foo = {
  barX: function () {
    console.log(this);
  },
  barY: () => {
    console.log(this);
  },
};

let barX = foo.barX;
let barY = foo.barY;

foo.barX(); // foo
foo.barY(); // window
barX(); // undefined in strict mode window
barY(); // window in strict mode widow

*/

// 2️⃣ --------------------------------------------------

/*

let saiyan = {
  name: "Vegeta",
  chiBlasts: {
    low: "Big bang attack",
    med: "Gallic gun",
    high: "Final flash",
  },
};

let anotherSaiyan = { ...saiyan };
anotherSaiyan.name = "Goku";
anotherSaiyan.chiBlasts.high = "Spirit Bomb";

let sonOfSaiyan = Object.assign({}, saiyan);
sonOfSaiyan.name = "Trunks";
sonOfSaiyan.chiBlasts.high = "Finish Buster";

let sonOfAnotherSaiyan = JSON.parse(JSON.stringify(anotherSaiyan));
sonOfAnotherSaiyan.name = "Gohan";
sonOfAnotherSaiyan.chiBlasts.high = "Kamehameha";

console.log(
  saiyan.name, // Vegeta
  anotherSaiyan.name, // Goku
  sonOfSaiyan.name, // Trunks
  sonOfAnotherSaiyan.name // Gohan
);
console.log(
  saiyan.chiBlasts.high, // Finish Buster
  anotherSaiyan.chiBlasts.high, // Finish Buster
  sonOfSaiyan.chiBlasts.high, // Finish Buster
  sonOfAnotherSaiyan.chiBlasts.high // Kamehameha
);

*/

// 3️⃣ --------------------------------------------------

/*

function processing() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject("Failed");
    resolve(2);
  });
}

function init() {
  processing()
    .then((v) => console.log(v + 1))
    .catch((err) => console.log(err));
}

init();

*/

// 4️⃣ --------------------------------------------------

/*

function processing() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject("Failed");
    resolve(2);
    console.log("After resolve/reject");
  });
}

function init() {
  processing()
    .then((v) => console.log(v + 1))
    .catch((err) => console.log(err));
}

init();

// resolve and reject doesn't work like return. Even if they are called, the function completes its execution. Hence, console.log will be called even though resolve/reject is already invoked before and .then callback will be called after that. Yes, resolve/reject will be called once as per order of invocation.

*/

// 5️⃣ --------------------------------------------------

/*

function kidsLove(x) {
  console.log(x);
}
["JavaScript","Python"].forEach(num=>kidsLove(num));

const menLove = function(x) {
  console.log(x);
};
["C++","Java"].forEach(num=>menLove(num));

const legendsLove = (x) => {
  console.log(x);
};
["01010"].forEach(num=>legendsLove(num));

*/

// 6️⃣ --------------------------------------------------

/*

var first = [1, , 3];

var second = [...first];

first.forEach((value, index) => {
  console.log(index, value);
});

console.log("------------------")

second.forEach((value, index) => {
  console.log(index, value);
});

// forEach SKIPS holes.
// The spread operator converts holes into actual undefined values.Now index 1 truly exists.

// | Operation      | Hole Behavior         |
// | -------------- | --------------------- |
// | `forEach`      | skips                 |
// | `map`          | skips                 |
// | `filter`       | skips                 |
// | `for...of`     | treats as undefined   |
// | spread `...`   | converts to undefined |
// | `Array.from()` | converts to undefined |

*/

// 7️⃣ --------------------------------------------------

/*

var nums1 = [1, 2, 3, 4];
var squared1 = nums1.map(x => x * x);

var nums2 = new Array(4);
nums2 = nums2.map((x, i) => i + 1);
var squared2 = nums2.map(x => x * x);

console.log(squared1, squared2);

*/


// 8️⃣ --------------------------------------------------

/*

// "use strict"

function sayName() {
  setTimeout(() => {
    console.log(this.name); 
  }, 1000);

  // setTimeout(function() {
  //   console.log(this.name); 
  // }, 2000);
}

sayName.call({
  name: 'John'
});

*/

// 9️⃣ --------------------------------------------------

/*

function sum(first, ...middle, last) {
  return first + middle.reduce((acc, num) => acc + num, 0) + last;
}

console.log(sum(1, 2, 3, 4, 5));

// Uncaught SyntaxError: Rest parameter must be last formal parameter

*/

// 1️⃣0️⃣ --------------------------------------------------

/*

let items = [];

items[null] = "foo";
console.log(items.length);
items[100] = "bar";
console.log(items.length);

*/

// 1️⃣1️⃣ --------------------------------------------------

/*

// <div>Hello World</div>
// <div>How are you?</div> 

var divs = document.getElementsByTagName("div");

for ( var i = 0; i<divs.length; i++ ) {
	divs[i].appendChild(document.createElement("div"));
}

console.log(divs.length); // Infinite

// - DOM node added
// - browser updates live collection
// - divs.length changes

*/

// 1️⃣2️⃣ --------------------------------------------------

/*

var name = "John";

function Engineer() {
	this.name = "Jane";
}

console.log(new Engineer().name);
Engineer.prototype.name = "Cody";
Engineer.prototype.channel = "https://bit.ly/devtools-yt";
console.log(new Engineer().channel);
console.log(new Engineer().name);

// JavaScript property lookup order:

// - check object itself
// - if not found → check prototype

*/


// 1️⃣3️⃣ --------------------------------------------------

/*

function performNextTick() {
  process.nextTick(() => {
    console.log("Inside nextTick | outside setTimeout");
    setTimeout(() => {
      console.log("Inside nextTick | Inside setTimeout");
      process.exit();
    }, 0);
  });
}

setInterval(() => {
  console.log("setInterval");
}, 0);

performNextTick();

// In node.js nextTrick has highest proiority. It will execute before setTimeout and setInterval. setTimeout and setInterval have same priority but setTimeout will execute before setInterval as it is called first.

*/
