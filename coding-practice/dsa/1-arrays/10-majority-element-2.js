/* 🟡 229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:
==========

Input: nums = [3,2,3]
Output: [3]

Example 2:
==========

Input: nums = [1]
Output: [1]

Example 3:
==========

Input: nums = [1,2]
Output: [1,2]
 
Constraints:
============

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 
Follow up: Could you solve the problem in linear time and in O(1) space?

*/

/*

function majorityElement(nums) {
  let candidate1 = null;
  let candidate2 = null;

  let count1 = 0;
  let count2 = 0;

  // First pass: find possible candidates
  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Second pass: verify counts
  count1 = 0;
  count2 = 0;

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  const result = [];
  const limit = nums.length / 3;

  if (count1 > limit) {
    result.push(candidate1);
  }

  if (count2 > limit) {
    result.push(candidate2);
  }

  return result;
}

*/

function majorityElement2(nums) {
  const map = new Map();
  const times = nums.length / 3;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (!res.includes(nums[i]) && map.get(nums[i]) > times) {
      res.push(nums[i]);
    }
  }
  return res;
}

/*

function majorityElement(nums) {
  let candidate1 = null;
  let candidate2 = null;

  let count1 = 0;
  let count2 = 0;

  // Find possible candidates
  for (let num of nums) {
    if (candidate1 === num) {
      count1++;
    } else if (candidate2 === num) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Verify candidates
  count1 = 0;
  count2 = 0;

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  const result = [];

  if (count1 > nums.length / 3) {
    result.push(candidate1);
  }

  if (count2 > nums.length / 3) {
    result.push(candidate2);
  }

  return result;
}

*/

const nums = [3, 2, 3];
// const nums = [1];
// const nums = [1, 2];

console.log(majorityElement2(nums));
