// var, let & const

// JAVASCRIPT IS "DYNAMICALLY TYPED" LANGUAGE

// Variable is one which holds a value & value has a type (Primitive / Reference)

// Primitive value types

// 1. Null
// 2. Undefined
// 3. Number
// 4. String
// 5. Boolean
// 6. Symbol

// Reference value type

// There is only one reference type & that is "Object"

// You can declare variables using var, let & const (let & const are introduced in ES6)

// let a; --> Variable declaration
// const c = 10; Variable declaration & assignment

// ---------------------------------------------------------------------------------------------------------

// DECLARATION

//var a
//var a

//let b
//let b; // Cannot redeclare block-scoped variable 'b'

//const c = 0
//const c = 1; // // Cannot redeclare block-scoped variable 'c'

// ---------------------------------------------------------------------------------------------------------

// DECLARATION WITHOUT INITIALIZATION

//var a
//let b
//const c // const declaration must be initialized

// ---------------------------------------------------------------------------------------------------------

// RE-INITIALIZATION (You can reassign values to var & let but not for const)

/*
var a = 10;
a = 20
console.log(a); // 20

let b = 10;
b = 20
console.log(b);

const c = 10; // 20
c = 20
console.log(c); // Error
*/

// ---------------------------------------------------------------------------------------------------------

// IF YOU TRY TO ACCESS VARIABLES THAT ARE UNDECLARED / DECLARED LATER USING "let" or "const"
// YOU WILL GET ERROR & FOR "var" YOU WILL GET "undefined"

//console.log(d) // ReferenceError: d is not defined

//console.log(e) // ReferenceError: Cannot access 'e' before initialization
//let e = 10

//console.log(g) // ReferenceError: Cannot access 'g' before initialization
//const g = 20

//console.log(f) // undefined
//var f = 10 // or var f

// ---------------------------------------------------------------------------------------------------------

// IF YOU TRY TO ACCESS VARIABLES THAT ARE DECLARED BUT NOT ASSIGNED USING "var" or "let"
// IT'S VALUE WIIL BE AUTOMATICALLY SET TO "undefined"

//let f;
//console.log(f)

//const h;  // must be initialized

//var g;
//console.log(g)

// YOU CAN'T DECLARE IDENTIFIER WITH THE SAME NAME MORE THAN ONCE

/*var kd;
let kd;
console.log(kd);*/

// ---------------------------------------------------------------------------------------------------------

// SCOPE --> SCOPE REFERS TO THE AVAILABILITY OF VARIABLES AND FUNCTIONS IN CERTAIN PARTS OF THE CODE

// --> Global scope -- If variable can be accessed anywhere in the program, then we can say that that variable has a global scope.

/*var firstName = 'Kedar'

function greet () {
  //console.log('Hi ' + firstName) // Hi Kedar
}

greet()*/

//console.log(firstName) // Kedar

// --> Function Scope (Local Scope) -- If variable can be accessed only within the function then we can say that that variable has a
//                                     function / local scope.

/*function ride () {
  let vehicle = 'bike'
  var horse = 'horse'

  //console.log('Riding ' + vehicle) // Riding Bike
}

ride()*/

// console.log('Riding ' + vehicle) // Reference Error Vehicle is not defined
// console.log('Riding ' + horse) // Reference Error horse is not defined
//console.log('Riding ' + typeof vehicle) // Riding undefined

// --> Block Scope
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

/*{
  const x = 2
  var y = 5
}*/

//console.log(x) // Reference Error x is not defined
//console.log(y) // 5

//

// ---------------------------------------------------------------------------------------------------------

// VARIABLE SHADOWING

/* function shadowing () {
  var a = 'main'
  let b = 'main'

  if (true) {
    //let a = 'shadow' // ok
    //var a = 'shadow' // ok

    //let b = 'shadow' // ok
    //var b = 'shadow' // not ok (Cannot redeclare block-scoped variable 'b')

    console.log(a) // shadow
    console.log(b) // shadow
  }
  console.log(a) // main
}

shadowing()*/

// HOISTING

console.log(a) // error
console.log(b) // undefined

let a = 10 // Temporal dead zone --> Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
var b = 20 // Global context
