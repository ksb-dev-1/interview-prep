export function permutations(str) {
  const result = [];

  if (str.length <= 1) {
    return [str];
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    const innerPermutations = permutations(remainingChars);

    for (let j = 0; j < innerPermutations.length; j++) {
      result.push(char + innerPermutations[j]);
    }
  }
  return result;
}
