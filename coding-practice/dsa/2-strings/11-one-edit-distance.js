/* 🟡 16. One Edit Distance

Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

A string s is said to be one distance apart from a string t if you can:

Insert exactly one character into s to get t.
Delete exactly one character from s to get t.
Replace exactly one character of s to get t.

Example 1:
==========
Input: s = ab, t= acb
Output: true
Explanation: We can insert 'c' into s to get t.

Example 2:
==========
Input: s = , t= 
Output: true
Explanation: We cannot make them equal with exactly one edit. They are already equal, which means zero edits, not one.

Example 3:
==========
Input: s = a, t=
Output: true
Explanation: We can delete 'a' from s to get t.

Constraints:
============

0 <= s.length, t.length <= 10^4
s and t consist of lowercase letters, uppercase letters, and/or digits.

*/

function isOneEditDistance(s, t) {
  const m = s.length;
  const n = t.length;

  if (Math.abs(m - n) > 1) return false;

  for (let i = 0; i < Math.min(m, n); i++) {
    if (s[i] !== t[i]) {
      if (m === n) {
        return s.slice(i + 1) === t.slice(i + 1);
      }

      if (m < n) {
        return s.slice(i) === t.slice(i + 1);
      }
      return s.slice(i + 1) === t.slice(i);
    }
  }
  return Math.abs(m - n) === 1;
}

const s = "ab";
const t = "acb";

// const s = "";
// const t = "";

// const s = "a";
// const t = "";

console.log(isOneEditDistance(s, t));
