function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    const clonedArray = [];

    for (const item of value) {
      clonedArray.push(deepClone(item));
    }

    return clonedArray;
  }

  const clonedObject = {};

  for (const key in value) {
    clonedObject[key] = deepClone(value[key]);
  }

  return clonedObject;
}
