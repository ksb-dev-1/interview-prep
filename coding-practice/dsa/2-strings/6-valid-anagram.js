/* 🟢 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
==========

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:
==========

Input: s = "rat", t = "car"

Output: false

Constraints:
============

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  const char_count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    char_count[s.charCodeAt(i) - 97]++;
    char_count[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < char_count.length; i++) {
    if (char_count[i] !== 0) return false;
  }
  return true;
}

// const s = "anagram";
// const t = "nagaram";

const s = "rat";
const t = "car";

console.log(validAnagram(s, t));
