/*
Currying :

Currying is a function that takes one argument at a time and returns a new function 
expecting the next argument. It is a conversion of functions from callable as f(a,b,c) 
into callable as f(a)(b)(c).
*/

/*function f (a) {
  return function (b) {
    return `${a} ${b}`
  }
}

console.log(f(5))
console.log(f(5)(3))*/

/*
Advantages :

✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.
*/

// -----------------------------------------

/*function sum (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(sum(1)(2)(3))*/

// -----------------------------------------

/*function evaluate (operation) {
  return function (a) {
    return function (b) {
      if (operation === 'sum') return a + b
      else if (operation === 'subtract') return a - b
      else if (operation === 'multiply') return a * b
      else if (operation === 'divide') return a % b
      else return 'Invalid Operation'
    }
  }
}

console.log(evaluate('multiply')(2)(4))*/

// -----------------------------------------

// Write a currying function that takes infinite arguments.

/*function add (a) {
  return function (b) {
    if (b) return add(a + b)
    else return a
  }
}

console.log(add(1)(2)(3)(4)(5)())*/

// -----------------------------------------

/*
// Currying vs Partial Application

// currying
function add (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

// partial application
function add (a) {
  return function (b, c) {
    return a + b + c
  }
}

*/

// -----------------------------------------

// Manipulating DOM using currying

/*function updateHeadingText (id) {
  return function (text) {
    document.querySelector('#' + id).textContent = text
  }
}

const updateHeading = updateHeadingText('heading')

updateHeading('Hello Kedar Balaleshwar')*/

// -----------------------------------------

// Curry Implementation

function curry (func) {
  // args takes arguments in the form of array eg - [a, b, c]
  return function curriedFunc (...args) {
    //check if current args passed equals the number of args function expects
    if (args.length >= func.length) {
      // if yes, we spread args elements to pass into func (spread). This is our base case.
      return func(...args)
    } else {
      /* if not, we return a function that collects the next arguments passed in next and 
      we recursively call curriedFunc, accumulating and spreading the values of args first and then
      the values of next. next will take into consideration a variable amount of next arguments
      e.g (1, 2) (1) (1,2,3) */
      return function (...next) {
        return curriedFunc(...args, ...next)
      }
    }
  }
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
