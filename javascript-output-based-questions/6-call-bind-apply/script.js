/*

You can use these methods (call, bind & apply) to tie a function into an object and call the function as 
if it belonged to that object

*/

/*

NOTE: 

The call() method takes arguments separately.

The apply() method takes arguments as an array.

*/

// -----------------------------------------------

/*

var obj = { name: 'Kedar' }

function sayHello () {
  return 'Hello ' + this.name
}

console.log(sayHello()) // Hello

// With the call() method, you can write a method that can be used on different objects.
console.log(sayHello.call(obj)) // Hello Kedar
// With the apply() method, you can write a method that can be used on different objects.
console.log(sayHello.apply(obj)) // Hello Kedar

*/

// -----------------------------------------------

/*

const person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe'
}

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe'
}

// With call(), an object can use a method belonging to another object.
console.log(person.fullName.call(person1)) // John Doe
console.log(person.fullName.call(person2)) // Mary Doe

// With apply(), an object can use a method belonging to another object.
console.log(person.fullName.apply(person1)) // John Doe
console.log(person.fullName.apply(person2)) // Mary Doe


*/

// -----------------------------------------------

// The call() Method with Arguments

/*

const person = {
  fullName: function (country, state, city) {
    return (
      this.firstName +
      ' ' +
      this.lastName +
      ',' +
      country +
      ',' +
      state +
      ',' +
      city
    )
  }
}

const person1 = {
  firstName: 'Kedar',
  lastName: 'Babaleshwar'
}

console.log(person.fullName.call(person1, ' India', ' Karnataka', ' Belagavi'))

// console.log(person.fullName.apply(person1, ' India', ' Karnataka', ' Belagavi')) // error

// The apply() method is very handy if you want to use an array instead of an argument list.
console.log(
  person.fullName.apply(person1, [' India', ' Karnataka', ' Belagavi'])
)

*/

// -----------------------------------------------

/*

const person = { name: 'Hector' }

function sayHi (age) {
  return `${this.name} is ${age} years`
}

console.log(sayHi.call(person, 35)) // Hector is 35 years
console.log(sayHi.bind(person, 38)) // ƒ sayHi (age) {
                                    //     return `${this.name} is ${age} years`
                                    // }

*/

// -----------------------------------------------

/*

const age = 10

var person = {
  name: 'Radhe',
  age: 20,
  getAge: function () {
    return this.age
  }
}

var person2 = { age: 24 }

console.log(person.getAge.call(person2)) // 24
console.log(person.getAge.apply(person2)) // 24
console.log(person.getAge.bind(person2)()) // 24 extra () because bind returns getAge function

*/

// -----------------------------------------------

/*

var status = '😎'

setTimeout(function () {
  const status = '😍'

  const data = {
    status: '🥑',
    getStatus () {
      return this.status
    }
  }

  console.log(data.getStatus()) // 🥑
  console.log(data.getStatus.call(this)) // 😎
  console.log(data.getStatus.bind(this)()) // 😎
}, 0)

*/

// -----------------------------------------------

/*

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
]

function printAnimals (i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species + ': ' + this.name)
  }
  this.print()
}

// write printAnimals() in such a way that it prints all animals in object below.

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i)
}

*/

// -----------------------------------------------

/*

const array = ['a', 'b']
const elements = [0, 1, 2]

//array.push(elements)
array.push.apply(array, elements)

console.log(array)

*/

// -----------------------------------------------

/*

// Find min/max in an array and use apply to enhance a built-in function.

const numbers = [5, 6, 2, 3, 7]

let max = Math.max.apply(null, numbers)

let min = Math.min.apply(null, numbers)

console.log('Maximum : ' + max + ' & Minimum : ' + min)

*/

// -----------------------------------------------

/*

// IMPORTANT

function f () {
  console.log(this) // window object
}

let user = {
  g: f.bind(null)
}

user.g()

*/

// -----------------------------------------------

/*

// IMPORTANT (Bind Chaining)

function f () {
  console.log(this.name)
}

f = f.bind({ name: 'Kedar' }).bind({ name: 'John' })

f()

*/

// -----------------------------------------------

/*

const person = {
  firstName: 'John',
  lastName: 'Doe',
  display: function () {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

setTimeout(person.display, 1000) // undefined undefined

setTimeout(function () {
  person.display()
}, 1000) // John Doe

let f = person.display.bind(person)
setTimeout(f, 1000) // John Doe

*/

// -----------------------------------------------

/*

let user = {
  name: 'Kedar Babaleshwar',

  loginSuccessful () {
    console.log(`${this.name} logged in`)
  },

  loginFailed () {
    console.log(`${this.name} failed to logged in`)
  }
}

function checkPassword (success, failed) {
  let password = prompt('Password ?', '')

  if (password === 'Kedar') success()
  else failed()
}

//checkPassword(user.loginSuccessful, user.loginFailed) // Fix this code

checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user))

*/

// -----------------------------------------------

/*

// IMPORTANT

let user = {
  name: 'Kedar Babaleshwar',

  login (result) {
    console.log(this.name + (result ? ' login successful' : ' login failed'))
  }
}

function checkPassword (success, failed) {
  let password = prompt('Password ?', '')

  if (password === 'Kedar') success()
  else failed()
}

checkPassword(user.login.bind(user, true), user.login.bind(user, false))

*/

// -----------------------------------------------

/*
const age = 10

let user = {
  name: 'Thor',
  age: 20,

  getAge () {
    console.log(this.age)
  },

  getAgeArror: () => {
    console.log(this.age)
  }
}

const person = { age: 30 }

user.getAge.call(person) // 30
user.getAgeArror.call(person) // undefined

// IMPORTANT
let arr = [1, 2, 3]
let res = { ...arr }

console.log(arr)
console.log(res)

*/

// -----------------------------------------------

// Polyfill for call

/*

const employee = {
  name: 'John'
}

function detail (designation, company) {
  console.log(`${this.name} works in ${company} as a ${designation}`)
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'Not callable')
  }
  console.log(this)
  //console.log((context.function = this))
  context.function = this
  context.function(...args)
}

//detail.call(employee, 'Full Stack Developer', 'Google')
detail.myCall(employee, 'Full Stack Developer', 'Google')

*/

// -----------------------------------------------

// Polyfill for apply

/*

const employee = {
  name: 'John'
}

function detail (designation, company) {
  console.log(`${this.name} works in ${company} as a ${designation}`)
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + 'Not callable')
  }

  if (!Array.isArray(args)) {
    throw new Eroor('CreatelistFromArrayLike called on non-object')
  }
  context.function = this
  context.function(...args)
}

//detail.apply(employee, ['Full Stack Developer', 'Google'])
detail.myApply(employee, ['Full Stack Developer', 'Google'])

*/

// Polyfill for bind

/*
const employee = {
  name: 'John'
}

function detail (designation, company) {
  console.log(`${this.name} works in ${company} as a ${designation}`)
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'Not callable')
  }

  context.fn = this

  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

//const newFunc = detail.bind(employee)
//console.log(newFunc('Full Stack Developer', 'Google'))

const newFunc = detail.myBind(employee)
console.log(newFunc)
console.log(newFunc('Full Stack Developer', 'Google'))
*/
