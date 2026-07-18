export function flattenArray(arr) {
  const result = [];

  function process(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        process(item);
      } else {
        result.push(item);
      }
    }
  }
  process(arr);
  return result;
}
