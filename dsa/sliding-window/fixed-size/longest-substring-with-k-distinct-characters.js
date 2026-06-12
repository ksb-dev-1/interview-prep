function longestSubstring(s, k) {
  const set = new Set();
  let maxLength = 0;
  let count = 0;

  for (let j = 0; j < s.length; j++) {
    if (!set.has(s[j]) && count < k) {
      set.add(s[j]);
      count++;
      maxLength++;
    }

    if (set.has(s[j]) && count < k) {
      maxLength++;
    } else {
    }
  }
  console.log(set);
}

const s = "eceba";
const k = 2;

// const s = "araaci";
// const k = 1;
// const k = 2;

// const s = "cbbebi";
// const k = 3;

console.log(longestSubstring(s, k));
