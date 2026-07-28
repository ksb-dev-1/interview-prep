export function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];

  for (const value of set1) {
    if (!set2.has(value)) {
      result.push(value);
    }
  }

  for (const value of set2) {
    if (!set1.has(value)) {
      result.push(value);
    }
  }

  return result;
}
