const compose = function (functions) {
  if (functions.length === 0) {
    return (x) => x;
  }

  return function (x) {
    let result = x;

    // Apply functions from right to left
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));

// fn(x) = f1(f2(x))

// Start with x = 4
// Apply right-to-left:
// First: (x) => 2 * x → 2 * 4 = 8
// Then: (x) => x + 1 → 8 + 1 = 9
