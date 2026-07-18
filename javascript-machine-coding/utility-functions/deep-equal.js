export default function deepEqual(valueA, valueB) {
  // Same primitive value or same reference
  if (valueA === valueB) {
    return true;
  }

  // Handle null
  if (valueA === null || valueB === null) {
    return valueA === valueB;
  }

  // If either isn't an object, they differ
  if (typeof valueA !== "object" || typeof valueB !== "object") {
    return false;
  }

  // One array and one object
  if (Array.isArray(valueA) !== Array.isArray(valueB)) {
    return false;
  }

  const keysA = Object.keys(valueA);
  const keysB = Object.keys(valueB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false;
    }

    if (!deepEqual(valueA[key], valueB[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual("foo", "foo")); // true
// console.log(deepEqual({ id: 1 }, { id: 1 })); // true
// console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(deepEqual([{ id: "1" }], [{ id: "2" }])); // false
