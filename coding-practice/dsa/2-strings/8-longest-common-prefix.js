/* 🟢 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
==========

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
==========

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
============

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

*/

function longestCommonPrefix(s) {
  if (s.length === 0) return "";

  let prefix = s[0];

  for (let i = 1; i < s.length; i++) {
    while (s[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") return "";
    }
  }
  return prefix;
}

const s = ["flower", "flow", "flight"];
// const s = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(s));
