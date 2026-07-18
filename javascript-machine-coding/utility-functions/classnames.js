export default function classNames(...args) {
  const result = [];

  function process(value) {
    if (!value) {
      return;
    }

    if (typeof value === "string" || typeof value === "number") {
      result.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        process(value[i]);
      }
      return;
    }

    if (typeof value === "object") {
      for (const key in value) {
        if (value[key]) {
          result.push(key);
        }
      }
    }
  }

  for (let i = 0; i < args.length; i++) {
    process(args[i]);
  }

  return result.join(" ");
}

/*

export default function classNames(...args) {
  const result = [];

  function traverse(value) {
    if (!value) {
      return;
    }

    if (typeof value === "string" || typeof value === "number") {
      result.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(traverse);
      return;
    }

    if (typeof value === "object") {
      for (const key in value) {
        if (value[key]) {
          result.push(key);
        }
      }
    }
  }

  args.forEach(traverse);

  return result.join(" ");
}

*/

console.log(classNames("foo", "bar")); // 'foo bar'
console.log(classNames("foo", { bar: true })); // 'foo bar'
console.log(classNames({ "foo-bar": true })); // 'foo-bar'
console.log(classNames({ "foo-bar": false })); // ''
console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
console.log(classNames("a", ["b", { c: true, d: false }])); // 'a b c'
console.log(
  classNames(
    "foo",
    {
      bar: true,
      duck: false,
    },
    "baz",
    { quux: true },
  ),
); // 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, { baz: null }, "")); // 'bar'
