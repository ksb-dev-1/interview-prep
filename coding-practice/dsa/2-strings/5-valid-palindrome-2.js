/* 🟢 680. Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
==========

Input: s = "aba"
Output: true

Example 2:
==========

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
==========

Input: s = "abc"
Output: false
 
Constraints:
============

1 <= s.length <= 105
s consists of lowercase English letters.
 
*/

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;

    l++;
    r--;
  }
  return true;
}

function validPalindrome2(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

const s = "aba";
// const s = "abca";
// const s = "abc";

console.log(validPalindrome2(s));
