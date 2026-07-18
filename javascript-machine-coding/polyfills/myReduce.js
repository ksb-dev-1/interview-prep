Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let accumulator;
  let startIndex = 0;

  // ❗ Handle no initial value
  if (arguments.length < 2) {
    // Find first valid element (skip holes)
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }

    // If no valid element → throw error
    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = this[startIndex];
    startIndex++;
  } else {
    accumulator = initialValue;
  }

  // ❗ Main loop (skip holes)
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];

const result = arr.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 2);

console.log(result);
