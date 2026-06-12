/*

Kadane’s Algorithm

🧠 Core Idea (Very Simple)

At every index:

You decide:

👉 Should I

Continue the previous subarray?

OR

Start a new subarray from here?

That’s it.

*/

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // if(nums[i] > currSum + nums[i]){
    //     currSum = nums[i];
    // }
    // else {
    //     currSum += nums[i];
    // }

    // if(currSum > maxSum){
    //     maxSum = currSum;
    // }

    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums));
