function rotate(nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);

  reverse(nums, 0, k - 1);

  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
  return nums;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log(rotate(nums, k));

// - % operator ensures k is never bigger than array length
// - Saves extra rotations
// - Always do this before rotating arrays
