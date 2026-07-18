// export function findMissingNumber(arr) {
//   if (arr.length === 0) return 1;

//   arr.sort((a, b) => a - b);

//   let item = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - item > 1) {
//       return item + 1;
//     }
//     item = arr[i];
//   }
//   return undefined;
// }

export function findMissingNumber(arr) {
  const n = arr.length + 1;

  const expected = (n * (n + 1)) / 2;

  const actual = arr.reduce((sum, num) => sum + num, 0);

  return expected - actual;
}
