function longestSubstringUsingSet(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      i++;
    }
    set.add(s[right]);

    // calculate current window length
    let currentLength = left - right + 1;

    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}

// -------------------------------------------------------------------------

function longestSubstringUsingMap(s) {
  let map = new Map();
  let i = 0;
  let maxLength = 0;

  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      // Jump i directly after previous occurrence
      i = Math.max(i, map.get(s[j]) + 1);
    }

    map.set(s[j], j);

    let currentLength = j - i + 1;

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
}

const s = "abcabcbb";
// const s = "bbbbb";
// const s = "pwwkew";
// const s = "dvdf";

console.log(longestSubstringUsingSet(s));
// console.log(longestSubstringUsingMap(s));

// windowLength = endIndex - startIndex + 1
