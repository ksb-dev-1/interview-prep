function get(key, object) {
  if (object === null || typeof object !== "object") {
    return undefined;
  }

  if (object.hasOwnProperty(key)) {
    return object[key];
  }

  for (let item in object) {
    const nestedObject = object[item];

    if (typeof nestedObject === "object" && nestedObject !== null) {
      const result = get(key, nestedObject);
      if (result !== undefined) {
        return result;
      }
    }
  }
  return undefined;
}

const obj = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

console.log(get("name", obj)); // "John"
console.log(get("city", obj)); // "Anytown"
console.log(get("zipCode", obj)); // undefined
console.log(get("state", obj)); // "CA"
console.log(get("age", null)); // undefined
