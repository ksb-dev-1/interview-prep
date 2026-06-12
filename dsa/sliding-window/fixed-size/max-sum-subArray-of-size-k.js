function maxSumSubArrayOfSizeK(nums, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum -= nums[i - k];
    windowSum += nums[i];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}
const nums1 = [100, 200, 300, 400];
const k = 2;

// const nums1 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// const k = 4;

console.log(maxSumSubArrayOfSizeK(nums1, k));

// ------------------------------------------------------------------------------

function maxAvgSumSubArrayOfSizeK(nums, k) {
  let windowSum = 0;
  let n = nums.length;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum -= nums[i - k];
    windowSum += nums[i];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum / k;
}

const nums2 = [1, 12, -5, -6, 50, 3];
const k1 = 4;

// const nums2 = [5]
// const k1 = 1

// console.log(maxAvgSumSubArrayOfSizeK(nums2, k1));
