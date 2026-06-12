export function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;

  //   const result = new Set(arr);
  //   return [...result];
  //   return Array.from(new Set(arr));
}
