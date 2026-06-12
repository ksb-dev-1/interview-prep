/*

const user = {
  name: 'Kedar',
  age: 30
}

console.log(user.name)
console.log(user['age'])

user.name = 'John'

console.log(user.name)

delete user.age

console.log(user)

*/

// --------------------------------------------

/*

const func = (function (a) {
  delete a
  return a
})(5)

console.log(func)

*/

// --------------------------------------------

/*

const user = {
  'first name': 'Kedar'
}

console.log(user['first name'])

delete user['first name']

*/

// --------------------------------------------

/*

// Computed Properties
// While creating objects, we can use square brackets in an object literal which are computed properties.

let property = 'firstName'
let value = 'Kedar'

let person = {
  [property]: value
}

console.log(person)
console.log(person.firstName) // Kedar
console.log(person[property]) //Kedar

*/

// --------------------------------------------

/*

let user = {
  name: 'Kedar',
  age: 30
}

for (let key in user) {
  console.log(key) // name, age
  console.log(user[key]) // Kedar, 30
}

*/

// --------------------------------------------

/*

const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj) // {a: 'three', b: 'two'}

*/

// --------------------------------------------

/*

// Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
  a: 100,
  b: 200,
  title: 'My nums'
}

function multiplyByTwo (obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}


multiplyNumeric(nums)

*/

// --------------------------------------------

/*

const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123

console.log(a)

a[c] = 456

console.log(a)
console.log(a[b])

// Object keys are automatically converted into strings.

*/

// --------------------------------------------

/*

const user = {
  name: 'Kedar',
  age: 30
}

const objectToString = JSON.stringify(user)

console.log(objectToString)
console.log(typeof objectToString)

const stringToObject = JSON.parse(objectToString)

console.log(stringToObject)
console.log(typeof stringToObject)

// We use stringify to store value in local storage (bacause we can't store objects directly)

*/

// --------------------------------------------

/*

// spread operator
console.log([...'Kedar'])

const user = { name: 'Lydia', age: 21 }
const admin = { admin: true, ...user }

console.log(admin) // 

*/

// --------------------------------------------

/*
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90
}

const data = JSON.stringify(settings, ['level', 'health'])
console.log(data) // "{"level":19, "health":90}"
*/

/*
function replacer (key, value) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
}

var user = {
  name: 'John Doe',
  occupation: 'gardener',
  age: 34,
  dob: new Date('1992-12-31')
}

console.log(JSON.stringify(user, replacer))
*/

/*
The second argument of JSON.stringify is the replacer. The replacer can either be a function or an array, 
and lets you control what and how the values should be stringified.

If the replacer is an array, only the property names included in the array will be added to the JSON string. 
In this case, only the properties with the names "level" and "health" are included, "username" is excluded. 
datais now equal to "{"level":19, "health":90}".

If the replacer is a function, this function gets called on every property in the object you're 
stringifying. The value returned from this function will be the value of the property when it's added 
to the JSON string. If the value is undefined, this property is excluded from the JSON string.
*/

// --------------------------------------------

/*
const shape = {
  radius: 10,
  diameter () {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

console.log(shape.diameter())
console.log(shape.perimeter())
*/

/*
Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

With arrow functions, the this keyword refers to its current surrounding scope, 
unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, 
but to its surrounding scope (window for example).

There is no value radius on that object, which returns NaN.
*/

// --------------------------------------------

/*
const { name } = { name: 'Lydia' }

console.log(name) //Lydia
*/

/*
const { name: myName } = { name: 'Lydia' }

console.log(name) //undefined
*/

// --------------------------------------------

/*

const value = { number: 10 }
//console.log({ ...value })

const multiply = (x = { ...value }) => {
  console.log(x.number)
  console.log((x.number *= 2))
  console.log('--------------')
}

multiply()
multiply()
multiply(value)
multiply(value)

*/

// --------------------------------------------

/*

function changeAgeAndReference (person) {
  person.age = 25

  person = {
    name: 'John',
    age: 50
  }

  return person
}

const personObj1 = {
  name: 'Alex',
  age: 30
}

const personObj2 = changeAgeAndReference(personObj1)

console.log(personObj1) // {name: 'Alex', age: 25}
console.log(personObj2) // {name: 'John', age: 50}

*/

// --------------------------------------------

/*

// Shallow Copy

const user = {
  name: 'Jen',
  age: 26
}

console.log('=========Shallow Copy========')
console.log('------------Before Modification-----------')

const copyOfUser = user
console.log('user => ', user) // { name: 'Jen', age: 26 }
console.log('copyOfUser => ', copyOfUser) // { name: 'Jen', age: 26 }

console.log('------------After Modification-----------')

copyOfUser.age = 24
console.log('user => ', user) // { name: 'Jen', age: 24 }
console.log('copyOfUser => ', copyOfUser) // { name: 'Jen', age: 24 }


*/

/*

// Deep Copy

const user = {
  name: 'Jen',
  age: 26
}
console.log('=========Deep Copy========')
console.log('------------Before Modification-----------')

const copyOfUser = JSON.parse(JSON.stringify(user))

console.log('user => ', user) // User=>  { name: 'Jen', age: 26 }
console.log('copyOfUser => ', copyOfUser) // copyOfUser=>  { name: 'Jen', age: 26 }

console.log('---------After modification---------')

copyOfUser.name = 'Kedar'
copyOfUser.age = 24

console.log('user => ', user) // user=>  { name: 'Jen', age: 26 }
console.log('copyOfUser => ', copyOfUser) // copyOfUser=>  { name: 'Kedar', age: 24 }

*/

// --------------------------------------------

// 3 ways to clone a object

const obj = { a: 1, b: 2 }

const objclone1 = Object.assign({}, obj)
const objclone2 = JSON.parse(JSON.stringify(obj))
const objclone3 = { ...obj }
