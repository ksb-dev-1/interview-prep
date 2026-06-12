/* 🟢 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
==========

Input: s = "egg", t = "add"
Output: true
Explanation: The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
==========

Input: s = "f11", t = "b23"
Output: false
Explanation: The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:
==========

Input: s = "paper", t = "title"
Output: true

Constraints:
============

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

*/

/*

function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const c1 = "c1_" + s[i];
    const c2 = "c2_" + t[i];

    if (map.get(c1) !== map.get(c2)) {
      return false;
    }
    map.set(c1, i);
    map.set(c2, i);
  }
  return true;
}

*/

function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (sToT.has(charS) && sToT.get(charS) !== charT) ||
      (tToS.has(charT) && tToS.get(charT) !== charS)
    ) {
      return false;
    }

    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }
  return true;
}

const s = "egg";
const t = "add";

// const s = "f11";
// const t = "b23";

// const s = "paper";
// const t = "title";

console.log(isIsomorphic(s, t));
