function powerSet(arr) {
  const result = [];

  function backtrack(index, currentSubset) {
    if (index === arr.length) {
      result.push([...currentSubset]); // Add a copy of current subset
      return;
    }

    // Exclude the current element
    backtrack(index + 1, currentSubset);

    // Include the current element
    currentSubset.push(arr[index]);
    backtrack(index + 1, currentSubset);

    // Backtrack (remove the last element to undo include)
    currentSubset.pop();
  }

  backtrack(0, []);
  return result;
}

const input = [1, 2, 3];
const subsets = powerSet(input);
console.log(subsets);
