// 1. Function Declaration

/*

function multiply (num) {
  return num * num
}

console.log(multiply(5))

*/

// -------------------------------------------------------------------

// 2. Function Expression (Storing function inside a variable)

/*

var add = function (num) {
  return num + num
}

console.log(add(5))

*/

/* 

Note: 

Anonymous function

function (num) {
  return num + num
}

*/

// -------------------------------------------------------------------

// 3. First class function

// A programming language is said to have First-class functions when functions in that language are treated like any other variable

/*

function cube (num) {
  return num * num * num
}

function displayCube (fn) {
  console.log(fn(3))
}

displayCube(cube)

*/

// -------------------------------------------------------------------

// 4. IIFE (Immediately invoked function expression)

/*

;(function square (num1) {
  console.log(num1 * num1)
  return (function cube (num2) {
    console.log(num1 * num1 * num1)
  })(5)
})(4)

*/

// -------------------------------------------------------------------

// 5. Function Scope

/*

var a = 10,
  b = 20,
  c = 20

function display () {
  let a = 40
  const b = 50

  console.log(a, b, c)
}

display()

*/

/*

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}

*/

/*

for (var i = 0; i < 5; i++) {
  function wrap (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  wrap(i)
}

*/

/*

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}

*/

// -------------------------------------------------------------------

// 6. Hoisting

/*

var num = 10

var add = function () {
  console.log(num) // undefined

  var num = 20
}

add()

*/

// -------------------------------------------------------------------

// 7. Arguments VS Parameters

// function display (num /*parameter*/) {
//   console.log(num)
// }

// display(5) // argument

// -------------------------------------------------------------------

// 8. REST & SPREAD operator

/*

function multiply (num1, num2) {
  console.log(num1 * num2)
}

var arr = [2, 4]

multiply(...arr) // spread

*/

/*

function rest (...num) {
  console.log(num[0])
}

var arr = [2, 4]

rest(...arr)

*/

// -------------------------------------------------------------------

// 9. Normal vs Arrow Function

// --> syntax

/*

function normal() {
    console.log("Normal Function")
}

const arrow = () => {
  console.log('Normal Function')
}

*/

// --> Arrow function has Implicit return for one liner

//const arrow = (a, b) => a + b

// --> Normal function have "arguments" keyword

/*function normal () {
  console.log(arguments)
}

normal(1, 2, 3)*/

// Different behaviour with "this"

const bike = {
  bikeName: 'Splendour',

  normal () {
    console.log(this.bikeName)
  },

  arrow: () => {
    console.log(this.bikeName)
  }
}

bike.normal()
bike.arrow()
