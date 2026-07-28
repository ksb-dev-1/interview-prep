// export function longestConsecutiveSequence(arr) {
//   if (arr.length === 0) return 0;

//   //   const sorted = arr.sort((a, b) => a - b); // mutates original
//   const sorted = [...arr].sort((a, b) => a - b); // doesn't mutate original
//   let count = 1;
//   let maxCount = 1;

//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (sorted[i + 1] - sorted[i] === 1) {
//       count++;
//     } else if (sorted[i + 1] - sorted[i] === 0) {
//       continue;
//     } else if (sorted[i + 1] - sorted[i] > 1) {
//       count = 1;
//     }
//     if (count > maxCount) {
//       maxCount = count;
//     }
//   }
//   return maxCount;
// }

export function longestConsecutiveSequence(arr) {
  if (arr.length === 0) return 0;

  const set = new Set(arr);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}
