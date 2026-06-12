// 1. array.forEach(function(currentValue, index, arr), thisValue)

/*
const array = [1, 2, 3, 4, 5]

array.forEach(value => console.log(value))

// Implementation
Array.prototype.myForEach = function myForEach (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

array.myForEach(value => console.log(value))
*/

// -------------------------------------------------------------

// 2. array.map(function(currentValue, index, arr), thisValue)
// Note: 1. Returns new array
//       2. Doesn't change original array

/*
const array = [1, 2, 3, 4, 5]

const result = array.map(value => value * 2)

console.log(result)

// Implementation

Array.prototype.myMap = function myMap (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }

  return result
}

const myResult = array.myMap(value => value * 2)

console.log(myResult, array)
*/

// -------------------------------------------------------------

// 3. array.filter(function(currentValue, index, arr), thisValue)
// Note: 1. Returns new array
//       2. Doesn't change original array

/*const array = [1, 2, 3, 4, 5]

const result = array.filter(value => value > 2)

console.log(result)

Array.prototype.myFilter = function myFilter (callback) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }

  return result
}

const myResult = array.myFilter(value => value > 2)

console.log(myResult)*/

// -------------------------------------------------------------

// 4. array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Note: 1. Returns new array
//       2. Doesn't change original array

/*const array = [1, 2, 3, 4, 5]
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
]

const result = array.reduce((sum, value) => {
  //console.log(sum + value)
  return sum + value
}, 10)

console.log(result)

Array.prototype.myReduce = function myReduce (callback, initialValue) {
  let accumulator = initialValue
  let startAtIndex = 0

  if (initialValue === undefined) {
    accumulator = this[0]
    startAtIndex = 1
  }

  for (let i = startAtIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }

  return accumulator
}

const myResult = array.myReduce((sum, value) => {
  //console.log(sum + value)
  return sum + value
}, 10)

console.log(myResult)

const flattenedResult = flattened.myReduce((sum, value) => {
  return sum.concat(value)
})

console.log(flattenedResult)*/

// -------------------------------------------------------------

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
