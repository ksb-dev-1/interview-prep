function nthLargest(arr, n) {
  if (n < 1) {
    return null;
  }

  const uniqueValues = [...new Set(arr)];

  if (n > uniqueValues.length) {
    return null;
  }

  uniqueValues.sort((a, b) => b - a);

  return uniqueValues[n - 1];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthLargest(arr, highest));
