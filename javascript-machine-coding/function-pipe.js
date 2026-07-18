const pipe = function (functions) {
  if (functions.length === 0) {
    return (x) => x;
  }

  return function (x) {
    let result = x;

    // Apply functions from left to right
    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }

    return result;
  };
};

const fn = pipe([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
