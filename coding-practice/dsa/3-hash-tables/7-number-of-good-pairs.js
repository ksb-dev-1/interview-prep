/* 🟢 1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
==========

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
==========

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
==========

Input: nums = [1,2,3]
Output: 0
 
Constraints:
============

1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

// Brute Force
/*

function goodPairs(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
}
  
*/

// optimized

/*

function goodPairs(nums) {
  const map = new Map();
  let count = 0;

  for (let num of nums) {
    count += map.get(num) || 0;

    map.set(num, (map.get(num) || 0) + 1);
  }
  return count;
}

*/

function goodPairs(nums) {
  const freq = {};
  let count = 0;

  for (let num of nums) {
    count += freq[num] || 0;
    freq[num] = (freq[num] || 0) + 1;
  }
  return count;
}

// Every new same number pairs with ALL previous same numbers.

// const nums = [1, 2, 3, 1, 1, 3];
const nums = [1, 1, 1, 1];
// const nums = [1, 2, 3];

console.log(goodPairs(nums));
