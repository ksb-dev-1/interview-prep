function myPromise (executor) {
  let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value

  function resolve (val) {
    isFulfilled = true
    value = val

    if (typeof onResolve === 'function') {
      console.log('inside resolve')
      onResolve(value)
      isCalled = true
    }
  }

  function reject (val) {
    isRejected = true
    value = val

    if (typeof onReject === 'function') {
      console.log('inside reject')
      onReject(value)
      isCalled = true
    }
  }

  this.then = function (callback) {
    onResolve = callback

    if (isFulfilled && !isCalled) {
      // For synchronous operations
      console.log('inside then')
      isCalled = true
      onResolve(value)
    }

    return this
  }

  this.catch = function (callback) {
    onReject = callback

    if (isRejected && !isCalled) {
      // For synchronous operations
      console.log('inside catch')
      isCalled = true
      onReject(value)
    }

    return this
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

myPromise.resolve = val => {
  return new myPromise((resolve, reject) => {
    resolve(val)
  })
}

myPromise.reject = val => {
  return new myPromise((resolve, reject) => {
    reject(val)
  })
}

myPromise.resolve('Helper Resolve').then(res => console.log(res))
myPromise.reject('Helper Reject').catch(err => console.log(err))

const promise = new myPromise((resolve, reject) => {
  //resolve(2) // Sunchronous

  // Asynchronous
  setTimeout(() => {
    resolve('Async Resolve')
    //reject('Async Reject')
  }, 1000)
})

promise.then(res => console.log(res)).catch(err => console.log(err))
