function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

const nums = [0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));

//   const set = new Set(nums);
//   let count = 0;

//   for (let i = 0; i < set.size; i++) {
//     nums[count++] = [...set][i];
//   }

//   for (let i = count; i < nums.length; i++) {
//     nums[count++] = "_";
//   }
