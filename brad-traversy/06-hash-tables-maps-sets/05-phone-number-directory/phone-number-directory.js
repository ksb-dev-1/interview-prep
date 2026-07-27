export function phoneNumberDirectory(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const entry = arr[i].split(":");
    const key = entry[0];
    const value = entry[1];

    map.set(key, value);
  }
  return map;
}
