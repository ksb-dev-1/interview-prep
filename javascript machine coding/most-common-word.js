function mostCommon(arr) {
  const map = new Map();

  for (let word of arr) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  let maxCount = 0;
  let mostFrequent = null;

  for (let [word, count] of map.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = word;
    }
  }
  return mostFrequent;
}

const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const mostCommonWord = mostCommon(words);
console.log(mostCommonWord); // "apple"
