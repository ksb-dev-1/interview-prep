/* 🟢 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
==========

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
==========

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
==========

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:
============

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

*/

/*

function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const ranMap = new Map();
  const magMap = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    ranMap.set(ransomNote[i], (ranMap.get(ransomNote[i]) || 0) + 1);
  }

  for (let i = 0; i < magazine.length; i++) {
    magMap.set(magazine[i], (magMap.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];

    console.log(ranMap.get(char) <= magMap.get(char));

    if (magMap.has(char) && ranMap.get(char) > magMap.get(char)) return false;
  }

  return true;
}

*/

/*

function canConstruct(ransomNote, magazine) {
  const map = new Map();

  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!map.get(char)) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }
  return true;
}

*/

function canConstruct(ransomNote, magazine) {
  const count = new Array(26).fill(0);

  for (const char of magazine) {
    count[char.charCodeAt(0) - 97]++;
  }

  for (const char of ransomNote) {
    const index = char.charCodeAt(0) - 97;

    if (count[index] === 0) {
      return false;
    }
    count[index]--;
  }
  return true;
}

// const ransomNote = "a";
// const magazine = "b";

// const ransomNote = "aa";
// const magazine = "ab";

// const ransomNote = "aa";
// const magazine = "aab";

const ransomNote = "bg";
const magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";

console.log(canConstruct(ransomNote, magazine));
