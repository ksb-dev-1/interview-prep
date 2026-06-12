export function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const s = str[i].toLowerCase();
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
      count++;
    }
  }
  return count;
}
