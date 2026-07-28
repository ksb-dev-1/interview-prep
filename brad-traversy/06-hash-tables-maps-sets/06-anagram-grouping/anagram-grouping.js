export function anagramGrouping(arr) {
  const map = new Map();

  map.set(arr[0].split("").sort().join(""), [arr[0]]);

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i].split("").sort().join("");

    if (map.has(key)) {
      const value = map.get(key);
      value.push(arr[i]);
    } else {
      map.set(arr[i].split("").sort().join(""), [arr[i]]);
    }
  }
  return [...map.values()];
}
