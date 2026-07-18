/* 🟢 387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
==========

Input: s = "leetcode"
Output: 0

Explanation: The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
==========

Input: s = "loveleetcode"
Output: 2

Example 3:
==========

Input: s = "aabb"
Output: -1

Constraints:
============

1 <= s.length <= 105
s consists of only lowercase English letters.

*/

/*

function firstUniqueCharacter(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
}

*/

/*

function firstUniqueCharacter(s) {
  const freq = {};

  // count frequency
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  // find first unique character
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

*/

function firstUniqueCharacter(s) {
  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }
  return -1;
}

// const s = "leetcode";
// const s = "loveleetcode";
const s = "LOVELEETCODE";
// const s = "aabb";
console.log(firstUniqueCharacter(s));

// ================================================
// Only for lowercase letters (97) or upper case letters (65)
// ================================================
