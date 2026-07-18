export function highestScoringWord(str) {
  const words = str.split(" ");
  let highestScore = 0;
  let result = "";

  for (const word of words) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }

    if (score > highestScore) {
      highestScore = score;
      result = word;
    }
  }

  return result;
}
