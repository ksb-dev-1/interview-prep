// Question-1

/*
console.log('Start')

const Promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

Promise1.then(res => {
  console.log(res)
})

console.log('Finish')

*/

/*

Start
1
3
Finish
2

if we comment resolve(2) then

Start
1
3
Finish

*/

//------------------------------------------
// Question-2

/*
console.log('Start')

function fn () {
  return new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
  })
}

console.log('Middle')

fn().then(res => {
  console.log(res)
})

console.log('Finish')
*/

/*

Start
Middle
1
3
Finish
2

*/

//------------------------------------------
// Question-3

/*
function job () {
  return new Promise((resolve, reject) => {
    reject()
  })
}

let promise = job()

promise
  .then(res => {
    console.log('Success-1')
  })
  .then(res => {
    console.log('Success-2')
  })
  .then(res => {
    console.log('Success-3')
  })
  .catch(err => {
    console.log('Error-1')
  })
  .then(res => {
    console.log('Success-4')
  })

  */

/*

Error-1
Success-4

*/

//------------------------------------------
// Question-4

/*
function job (state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('Success')
    } else {
      reject('Error')
    }
  })
}

let promise = job(true)

promise
  .then(res => {
    console.log(res)

    return job(false)
  })
  .catch(err => {
    console.log(err)

    return 'Error Caght'
  })
  .then(res => {
    console.log(res)

    return job(true)
  })
  .catch(err => {
    console.log(err)
  })

*/

/*

Success
Error 
Error Caught 
  
*/

//------------------------------------------
// Question-5

/*
function job (state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('Success')
    } else {
      reject('Error')
    }
  })
}

let promise = job(true)

promise
  .then(res => {
    console.log(res)

    return job(true)
  })
  .then(res => {
    if (res !== 'Victory') {
      throw 'Defeat'
    }
    return job(true)
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)

    return job(false)
  })
  .then(res => {
    console.log(res)

    return job(true)
  })
  .catch(err => {
    console.log(err)

    return 'Error Caught'
  })
  .then(res => {
    console.log(res)
    return new Error('test')
  })
  .then(res => {
    console.log('Success : ', res.message)
  })
  .catch(err => {
    console.log('Error : ', err.message)
  })

*/

/*

Success 
Defeat 
Error 
Error Caught
Success : test 

*/

//------------------------------------------
// Question-6

/*
--> Create a promise called firstPromise, which will resolve to a text called 'First'.
--> Create a promise called secondPromise, which will resolve to a firstPromise. 
--> Calling secondPromise print the text.

*/

/*
const firstPromise = new Promise((resolve, reject) => resolve('First'))

const secondPromise = new Promise((resolve, reject) => resolve(firstPromise))

secondPromise.then(res => res).then(res => console.log(res))
*/

//------------------------------------------
// Question-7 (Rewrite using async-await)

/*
function loadJson (url) {
  return fetch(url).then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      return new Error(res.status)
    }
  })
}
*/

/*
async function loadJson (url) {
  const data = await fetch(url)

  if (data.status === 200) {
    const res = await data.json()

    return res
  }
  return new Error(res.status)
}

loadJson('https://jsonplaceholder.typicode.com/posts')
  .then(res => console.log(res))
  .catch(err => console.log(err))
*/

//------------------------------------------
// Question-8 (solve promise recursively)

/*
function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value1)
      //resolve(value1)
    }, 1000)
  })
}

function display2 (value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2)
    }, 1000)
  })
}

function display3 (value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3)
    }, 1000)
  })
}

function promRecurse (promises) {
  if (promises.length === 0) return

  const currPromise = promises.shift()

  currPromise.then(res => console.log(res)).catch(err => console.log(err))

  promRecurse(promises)
}

promRecurse([display1('Start'), display2('Running'), display3('Finished')])
*/
