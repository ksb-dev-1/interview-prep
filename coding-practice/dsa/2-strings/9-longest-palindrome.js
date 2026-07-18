/* 🟢 409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:
==========

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
==========

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 
Constraints:
============

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

*/

function longestPalindrome(s) {
  const set = new Set();
  let length = 0;

  for (let char of s) {
    if (set.has(char)) {
      set.delete(char);

      length += 2;
    } else {
      set.add(char);
    }
  }

  if (set.size > 0) length += 1;

  return length;
}

const s = "abccccdd";
// const s = "a";

console.log(longestPalindrome(s));
