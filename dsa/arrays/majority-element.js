// Boyer-Moore Majority Voting Algorithm

// Majority element appears more than n/2 times

// All other elements combined appear less than n/2 times

// So even if every non-majority element tries to cancel one majority elemen, The majority element will still survive

function majorityElement(nums) {
  let count = 0;
  let candidate = -1;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

// const nums = [3, 2, 3];
// const nums = [2, 2, 1, 1, 1, 2, 2];
const nums = [1, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 1, 3, 2];

console.log(majorityElement(nums));
