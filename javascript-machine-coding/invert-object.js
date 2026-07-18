const invertObject = (obj) => {
  const inverted = {};

  for (const key in obj) {
    const value = obj[key];

    // Convert value to string to ensure it's a valid object key
    inverted[String(value)] = key;
  }

  return inverted;
};

const originalObj = {
  name: "John",
  age: 30,
  city: "New York",
};

const invertedObj = invertObject(originalObj);
console.log(invertedObj); // Output: { John: 'name', '30': 'age', 'New York': 'city' }
