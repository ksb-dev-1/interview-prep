/*

--> In an object method, this refers to the object.
--> Alone, this refers to the global object.
--> In a function, this refers to the global object.
--> In a function, in strict mode, this is undefined.
--> In an event, this refers to the element that received the event.

*/

/*
Implicit Binding :

Implicit Binding is applied when you invoke a function in an Object using the dot notation. 
this in such scenarios will point to the object using which the function was invoked. 
Or simply the object on the left side of the dot.

*/

// ---------------------------------------

/*
let a = 5

console.log(this)
console.log(this.a) //undefined

*/

// ---------------------------------------

/*
this.a = 10

function display1 () {
  console.log(this.a)
}

display1()

const display2 = () => {
  console.log(this.a)
}

display2()
*/

// ---------------------------------------

/*

let user = {
  name: 'John',
  age: 30,

  getDetails1 () {
    console.log(this.name) //John
  },

  getDetails2: () => {
    console.log(this.name)
  }
}

user.getDetails1() // John
user.getDetails2() // empty

*/

// ---------------------------------------

/*

let user = {
  name: 'John',
  age: 28,

  childObj: {
    newName: 'James',

    getDetails1 () {
      console.log(this.newName, 'and', this.name) // James and undefined
    },

    getDetails2: () => {
      console.log(this.newName, 'and', this.name) // undefined 'and' ''
    },

    getDetails3 () {
      const nestedArrow = () => console.log(this.newName) // James
      nestedArrow()
    }
  }
}

user.childObj.getDetails1()
user.childObj.getDetails2()
user.childObj.getDetails3()

*/

// ---------------------------------------

/*

class user {
  constructor (n) {
    this.name = n
  }
  getName () {
    console.log(this.name)
  }
}

const User = new user('John Wick')
User.getName()

*/

/*

const user = {
  firstName: 'John',

  getName () {
    const firstName = 'Jen'
    return this.firstName
  }
}

console.log(user.getName()) // John

*/

// ---------------------------------------

/*

// IMPORTANT

function makeUser () {
  return {
    name: 'John',
    ref: this
  }
}

let user = makeUser() // It is pointing to window object

console.log(user) // {name: 'John', ref: Window}
console.log(user.ref.name) // empty

*/

/*

function makeUser () {
  return {
    name: 'John Wick',

    ref () {
      return this
    }
  }
}

let user = makeUser()

console.log(user.ref().name)

*/

// ---------------------------------------

/*

// VERY VERY IMPORTANT

const user = {
  name: 'John Wick',

  logMessage () {
    console.log(this.name)
  }
}

setTimeout(user.logMessage, 1000) // empty

setTimeout(function () {
  user.logMessage()
}, 1000) // John Wick

*/

// ---------------------------------------

/*

// VERY VERY IMPORTANT

let calculator = {
  sum () {
    return this.a + this.b
  },

  mul () {
    return this.a * this.b
  },

  read () {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  }
}

calculator.read()
alert(calculator.sum())
alert(calculator.mul())

*/

// ---------------------------------------

/*

var length = 4

function callback () {
  console.log(this.length) // 4
}

const object = {
  length: 5,

  method (callback) {
    callback()
  }
}

object.method(callback, 1, 2)

*/

// ---------------------------------------

/*

var length = 4

function callback () {
  console.log(this.length) // 3
}

const object = {
  length: 5,

  method () {
    //console.log(arguments.length)
    arguments[0]()
  }
}

object.method(callback, 1, 2)

*/

// ---------------------------------------

//  Write the implementation of this calc()

/*

var calc = {
  total: 0,

  add (a) {
    this.total += a
    return this
  },

  subtract (a) {
    this.total -= a
    return this
  },

  multiply (a) {
    this.total *= a
    return this
  }
}

const result = calc
  .add(10)
  .multiply(5)
  .subtract(30)
  .add(10)
console.log(result.total)

*/
