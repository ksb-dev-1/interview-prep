/* 🟢 163. Missing Ranges

You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the shortest sorted list of ranges that exactly covers all the missing numbers. That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.

Example 1:
==========

Input: 
nums = [0,1,3,50,75]
lower = 0
upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]
Explanation: The ranges [2,2], [4,49], [51,74], and [76,99] cover every missing number between 0 and 99 that isn't in nums.

Example 2:
==========

Input: 
nums = [-1]
lower = -1
upper = -1
Output: []
Explanation: There are no missing ranges since there are no missing numbers.

Constraints:
============

-10^9 <= lower <= upper <= 10^9
0 <= nums.length <= 100
lower <= nums[i] <= upper
All the values of nums are unique.

*/

function missingRanges(nums, lower, upper) {
  const ranges = [];
  let prev = lower;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < prev) continue;

    if (nums[i] > prev) {
      ranges.push([prev, nums[i] - 1]);
    }

    prev = nums[i] + 1;

    if (nums[i] > upper) break;
  }

  if (prev <= upper) {
    ranges.push([prev, upper]);
  }
  return ranges;
}

// const nums = [0, 1, 3, 50, 75];
// const lower = 0;
// const upper = 99;

const nums = [3, 5, 8];
const lower = 0;
const upper = 10;

console.log(missingRanges(nums, lower, upper));

// function findMissingRanges(nums, lower, upper) {
//   const result = [];

//   let prev = lower - 1;

//   // extra loop for upper boundary
//   for (let i = 0; i <= nums.length; i++) {

//     let curr;

//     if (i === nums.length) {
//       curr = upper + 1;
//     } else {
//       curr = nums[i];
//     }

//     // if gap exists
//     if (curr - prev >= 2) {
//       result.push([prev + 1, curr - 1]);
//     }

//     prev = curr;
//   }

//   return result;
// }
