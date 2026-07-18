function productExceptSelfBruteForce(nums) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let product = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    result.push(product);
  }

  return result;
}

console.log(productExceptSelfBruteForce(nums));

// ------------------------------------------------------------------

function productExceptSelfOptimal(nums) {
  const n = nums.length;

  const prefix = new Array(n);
  const suffix = new Array(n);
  const result = new Array(n);

  prefix[0] = 1;
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

console.log(productExceptSelfOptimal(nums));

// ------------------------------------------------------------------

function productExceptSelfMoreOptimal(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelfMoreOptimal(nums));
