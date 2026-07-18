/*
console.log('1-Start')

setTimeout(() => {
  console.log('2-Starting')
}, 0)

console.log('3-Finish')
*/

// ------------------------------------------

/*
console.log('1-Start')

function display (value) {
  setTimeout(() => {
    return value
  }, 0)
}

const message = display('Starting')

console.log(message) // undefined

console.log('3-Finish')
*/

// ------------------------------------------

/*
console.log('1-Start')

function display (value, cb) {
  setTimeout(() => {
    cb(value)
  }, 0)
}

const message = display('Starting', function cb (value) {
  console.log("2-"+value)
})

console.log('3-Finish')
*/

// ------------------------------------------

/*
console.log('1-Start')

function display1 (value1, cb1) {
  setTimeout(() => {
    cb1(value1)
  }, 0)
}

function display2 (value2, cb2) {
  setTimeout(() => {
    cb2(value2)
  }, 0)
}

function display3 (value3, cb3) {
  setTimeout(() => {
    cb3(value3)
  }, 0)
}

const message = display1('Starting', function cb1 (value1) {
  console.log('2-' + value1)

  display2('Started', value2 => {
    console.log('3-' + value2)

    display3('Finishing', value3 => {
      console.log('4-' + value3)
    })
  })
})

console.log('5-Finish')
*/

// ------------------------------------------

/*
console.log('1-Start')

function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1)
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

display1('Starting')
  .then(res => {
    console.log('2-' + res)
    return display2('Started')
  })
  .then(res => {
    console.log('3-' + res)
    return display3('Finishing')
  })
  .then(res => {
    console.log('4-' + res)
  })
  .catch(err => {
    console.log(err)
  })

console.log('5-Finish')
*/

// ------------------------------------------

// Promise Combinator (all, race, allSettled, any)
// 1. all

/*
console.log('1-Start')

function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1)
    }, 1000)
  })
}

function display2 (value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2)
      //reject(value2)
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

Promise.all([
  display1('2-Starting'),
  display2('3-Started'),
  display3('4-Finishing')
])
  .then(res => {
    for (let i = 0; i < res.length; i++) {
      console.log(res[i])
    }
  })
  .catch(err => {
    console.log('Rejected : ', err)
  })

console.log('5-Finish')
*/

// ------------------------------------------
// 2. race

/*
console.log('1-Start')

function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value1)
    }, 3000)
  })
}

function display2 (value2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value2)  
      //reject(value2)
    }, 1000)
  })
}

function display3 (value3) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value3)
    }, 2000)
  })
}

Promise.race([
  display1('2-Starting'),
  display2('3-Started'),
  display3('4-Finishing')
])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('Rejected : ', err)
  })

console.log('5-Finish')
*/

// ------------------------------------------
// 3. allSetteled

/*
console.log('1-Start')

function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value1)
    }, 3000)
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
    }, 2000)
  })
}

Promise.allSettled([
  display1('2-Starting'),
  display2('3-Started'),
  display3('4-Finishing')
])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

console.log('5-Finish')
*/

// ------------------------------------------
// 4. any

/*
console.log('1-Start')

function display1 (value1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value1)
      //resolve(value1)
    }, 3000)
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
    }, 2000)
  })
}

Promise.any([
  display1('2-Starting'),
  display2('3-Started'),
  display3('4-Finishing')
])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('Rejected : ', err)
  })

console.log('5-Finish')
*/

// ------------------------------------------
// Async-Await
