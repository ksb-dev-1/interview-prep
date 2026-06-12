const findLongestWord = (sentence) => {
  // Write your code here
  if (!sentence) return null;

  const words = sentence.trim().split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }
  return longestWord;
};

const sentence = "Welcome to reacterry";
console.log(findLongestWord(sentence));
