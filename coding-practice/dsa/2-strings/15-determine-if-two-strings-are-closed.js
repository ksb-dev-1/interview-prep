/* 🟡 1657. Determine if Two Strings Are Close

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
==========

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
==========

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
==========

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 
Constraints:
============

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

*/

/*

function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  const w1 = new Array(26).fill(0);
  const w2 = new Array(26).fill(0);

  for (const ch of word1) {
    w1[ch.charCodeAt(0) - 97]++;
  }

  for (const ch of word2) {
    w2[ch.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if ((w1[i] === 0) !== (w2[i] === 0)) return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (const count of w1) {
    if (count > 0) {
      map1.set(count, (map1.get(count) || 0) + 1);
    }
  }

  for (const count of w2) {
    if (count > 0) {
      map2.set(count, (map2.get(count) || 0) + 1);
    }
  }

  if (map1.size !== map2.size) return false;

  for (const entry of map1) {
    const key = entry[0];
    const value = entry[1];

    if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

*/

function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  const w1 = new Array(26).fill(0);
  const w2 = new Array(26).fill(0);

  for (const ch of word1) {
    w1[ch.charCodeAt(0) - 97]++;
  }

  for (const ch of word2) {
    w2[ch.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if ((w1[i] === 0) !== (w2[i] === 0)) {
      return false;
    }
  }

  w1.sort((a, b) => b - a);
  w2.sort((a, b) => b - a);

  for (let i = 0; i < 26; i++) {
    if (w1[i] !== w2[i]) {
      return false;
    }
  }
  return true;
}

// const word1 = "abc";
// const word2 = "bca";

// const word1 = "a";
// const word2 = "aa";

// const word1 = "ab";
// const word2 = "aa";

const word1 = "cabbba";
const word2 = "abbccc";

console.log(closeStrings(word1, word2));

/*

  for (const [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }

*/
