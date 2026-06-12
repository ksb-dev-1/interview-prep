function moveZeroes(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[count++] = nums[i];
  }

  for (let i = count; i < nums.length; i++) {
    nums[count++] = 0;
  }
  return nums;
}

// const nums = [0, 1, 0, 3, 12];
const nums = [0];

console.log(moveZeroes(nums));
