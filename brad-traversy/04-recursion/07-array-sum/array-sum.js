export function arraySum(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + arraySum(arr, index + 1);
}
