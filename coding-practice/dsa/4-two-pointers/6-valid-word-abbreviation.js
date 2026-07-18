/* 🟢 408. Valid Word Abbreviation

A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" (replace "ubstitutio" with 10)
"sub4u4" (replace "stit" and "tion" with 4 each)
"12" (replace the entire string with 12)
"su3i1u2on" (replace "bst" with 3, "t" with 1, and "ti" with 2)
"substitution" (no replacement at all)
The following are not valid abbreviations:

"s55n" (the replaced substrings are adjacent)
"s010n" (has leading zeros)
"s0ubstitution" (the number 0 replaces an empty substring)
Given a string word and an abbreviation abbr, return true if the string matches the given abbreviation, and false otherwise.

Example 1:
==========

Input: word = "internationalization", abbr = "i12iz4n"
Output: true;

Example 2:
==========

Input: word = "apple", abbr = "a2e"
Output: false

Example 3:
==========

Input: word = "abbreviation", abbr = "abbreviation"
Output: true

Constraints:
============

1 <= word.length <= 20
word consists of only lowercase English letters.
1 <= abbr.length <= 10
abbr consists of lowercase English letters and digits.
All the integers in abbr will fit in a 32-bit integer.

*/

function validWordAbbreviation(word, abbr) {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (isNaN(abbr[j])) {
      if (word[i] !== abbr[j]) {
        return false;
      }

      i++;
      j++;
    } else {
      if (abbr[j] === "0") {
        return false;
      }

      let num = 0;

      while (j < abbr.length && !isNaN(abbr[j])) {
        num = num * 10 + Number(abbr[j]);
        j++;
      }
      i += num;
    }
  }
  return i === word.length && j === abbr.length;
}

const word = "internationalization";
const abbr = "i12iz4n";

// const word = "apple";
// const abbr = "a2e";

// const word = "abbreviation";
// const abbr = "abbreviation";

console.log(validWordAbbreviation(word, abbr));
