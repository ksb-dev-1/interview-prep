/* 🟢 1189. Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
==========

Input: text = "nlaebolko"
Output: 1

Example 2:
==========

Input: text = "loonbalxballpoon"
Output: 2

Example 3:
==========

Input: text = "leetcode"
Output: 0
 
Constraints:
============

1 <= text.length <= 104
text consists of lower case English letters only.
 
Note: This question is the same as 2287: Rearrange Characters to Make Target String.

*/

/*

function maximumBalloons(text) {
  const freq = {};

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (ch === "b" || ch === "a" || ch === "l" || ch === "o" || ch === "n") {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }

  const b = freq["b"] || 0;
  const a = freq["a"] || 0;
  const l = Math.floor((freq["l"] || 0) / 2);
  const o = Math.floor((freq["o"] || 0) / 2);
  const n = freq["n"] || 0;

  return Math.min(b, a, l, o, n);
}

*/

/*

function maximumBalloons(text) {
  const map = new Map();

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (ch === "b" || ch === "a" || ch === "l" || ch === "o" || ch === "n") {
      map.set(ch, (map.get(ch) || 0) + 1);
    }
  }

  const b = map.get("b") || 0;
  const a = map.get("a") || 0;
  const l = Math.floor((map.get("l") || 0) / 2);
  const o = Math.floor((map.get("o") || 0) / 2);
  const n = map.get("n") || 0;

  return Math.min(b, a, l, o, n);
}

*/

function maximumBalloons(text) {
  const count = new Array(26).fill(0);

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (ch === "b" || ch === "a" || ch === "l" || ch === "o" || ch === "n") {
      count[ch.charCodeAt(0) - 97]++;
    }
  }

  const b = count["b".charCodeAt(0) - 97];
  const a = count["a".charCodeAt(0) - 97];
  const l = Math.floor(count["l".charCodeAt(0) - 97] / 2);
  const o = Math.floor(count["o".charCodeAt(0) - 97] / 2);
  const n = count["n".charCodeAt(0) - 97];

  return Math.min(b, a, l, o, n);
}

// const text = "nlaebolko";
// const text = "loonbalxballpoon";
// const text = "leetcode";
text = "nllbblooon";
console.log(maximumBalloons(text));
