// Global variables can be made local (private) with closures.

/*

Advantages of closures

--> Closure allows us private variables that are available even after a function task is finished.
--> Closure enables us to store data in a separate scope and share it only where necessary.
--> They allow you to attach variables to an execution context.
--> Variables in closures can help you maintain a state that you can use later.
--> They provide data encapsulation.
--> They help remove redundant code.
--> They help maintain modular code.


Disadvantages of closures

--> The variables declared inside a closure are not garbage collected.
--> Too many closures can slow down your application. This is actually caused by 
    duplication of code in the memory.

*/

/*

let counter = 0


function add () {
  counter += 1
}

// There is a problem with the solution above: Any code on the page can change the counter, 
// without calling add().

*/

// -----------------------------------------------------

/*

let counter = 0

function add () {
  let counter = 0
  counter += 1
}

console.log(add()) // undefined
console.log(add()) // undefined
console.log(add()) // undefined

// It did not work because we display the global counter instead of the local counter.

*/

// -----------------------------------------------------

/*


function add () {
  let counter = 0

  counter += 1

  return counter
}


console.log(add()) // 1
console.log(add()) // 1
console.log(add()) // 1

// It did not work because we reset the local counter every time we call the function.

*/

// -----------------------------------------------------

/*

function add () {

  let counter = 0

  function plus () {
    counter += 1
  }

  plus()

  return counter
}

console.log(add()) // 1
console.log(add()) // 1
console.log(add()) // 1

// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
//We also need to find a way to execute counter = 0 only once.

*/

// -----------------------------------------------------

/*

const add = (function () {
  let counter = 0
  return function () {
    counter += 1
    return counter
  }
})()

console.log(add()) // 1
console.log(add()) // 2
console.log(add()) // 3

//The variable add is assigned to the return value of a self-invoking function.

//The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

//This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

//This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

//The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// -----> A closure is a function having access to the parent scope, even after the parent function has closed.

// -----------------------------------------------------

*/

/*

function init1 () {
  var name = 'Mozilla'

  function displayName () {
    console.log(name) // Mozilla
  }

  displayName()
}

init1()

var userName = "Kedar"

function init2 () {
  var name = 'Mozilla'

  function displayName (num) {
    console.log(name, num, userName) // Mozilla, 2, Kedar
  }

  return displayName
}

init2()(2)

*/

// -----------------------------------------------------

/*

function makeAdder (x) {
  return function (y) {
    return x + y
  }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2)) // 7
console.log(add10(2)) // 12

*/

// -----------------------------------------------------

/*

// Closure scope chain

const e = 10

function sum (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)) // 20

*/

// -----------------------------------------------------

/*

let count = 0

;(function printCount () {
  if (count == 0) {
    let count = 1
    console.log(count) // 1
  }
  console.log(count) // 0
})()

*/

// -----------------------------------------------------

/*

function createBase (num1) {
  return function (num2) {
    return num1 + num2
  }
}

var addSix = createBase(6)

console.log(addSix(10)) // returns 16
console.log(addSix(21)) // returns 27

*/

// -----------------------------------------------------

/*

console.log('\n')
console.log('Before using closure')
console.log('\n')

function find1 (index) {
  let a = []

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }

  console.log(a[index])
}

console.time('6')
find1(6) // this takes 37ms
console.timeEnd('6')
console.time('12')
find1(12) // this takes 135ms
console.timeEnd('12')

console.log('\n')
console.log('After using closure')
console.log('\n')

function find2 (index) {
  let a = []

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }

  return function (index) {
    console.log(a[index])
  }
}

const closure = find2()
console.time('6')
closure(6) // this takes 37ms
console.timeEnd('6')
console.time('12')
closure(12) // this takes 135ms
console.timeEnd('12')

*/

// -----------------------------------------------------

/*

// Private counter
function counter () {
  var _counter = 0

  function increment (value) {
    _counter += value
  }

  function decrement (value) {
    _counter -= value
  }

  function reset () {
    _counter = 0
  }

  function getCounter () {
    return 'The counter is currently at = ' + _counter
  }

  return {
    increment,
    decrement,
    reset,
    getCounter
  }
}

const c = counter()

c.increment(5)
c.increment(10)
console.log(c.getCounter())

c.decrement(10)
console.log(c.getCounter())

c.reset()
console.log(c.getCounter())

*/

// -----------------------------------------------------

// Module Pattern

var Module = (function () {
  function privateMethod () {
    // do something
  }

  return {
    publicMethod: function () {
      // can call privateMethod();
    }
  }
})()
