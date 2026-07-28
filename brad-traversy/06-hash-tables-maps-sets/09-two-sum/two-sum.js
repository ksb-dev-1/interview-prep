export function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const remainder = target - arr[i];

    if (map.has(remainder)) {
      return [map.get(remainder), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
