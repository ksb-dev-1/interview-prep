function findAnagrams(s, p) {
  const result = [];
  if (s.length < p.length) return result;

  const base = "a".charCodeAt(0);
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - base]++;
    sCount[s.charCodeAt(i) - base]++; // build first window
  }

  if (pCount.toString() === sCount.toString()) {
    result.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    sCount[s.charCodeAt(i - p.length) - base]--;
    sCount[s.charCodeAt(i) - base]++;

    if (pCount.toString() === sCount.toString()) {
      result.push(i - p.length + 1);
    }
  }
  return result;
}

// const s = "cbaebabacd";
// const p = "abc";

const s = "abab";
const p = "ab";

console.log(findAnagrams(s, p));
