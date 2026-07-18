/* 🟡 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
==========

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
==========

Input: strs = [""]
Output: [[""]]

Example 3:
==========

Input: strs = ["a"]
Output: [["a"]]

Constraints:
============

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/*

function groupAnagrams(strs) {
  const map = {};

  for (let word of strs) {
    const key = word.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
}

// O(n * k log k) and O(n * K)

*/

/*

function groupAnagrams(strs) {
  const map = new Map();

  for (let word of strs) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
}

// O(n * k log k) and O(n * K) --> more cleaner

*/

function groupAnagrams(strs) {
  const map = new Map();

  for (const word of strs) {
    const count = new Array(26).fill(0);

    for (const ch of word) {
      count[ch.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return [...map.values()];
}

// O(n * K) and O(n * K) --> best

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));

/*

We iterate through all strings.
For every string we sort its characters to create a canonical anagram key.
Sorting each string takes O(k log k) where k is string length.
Doing this for n strings gives total time complexity O(n * k log k).
The hashmap stores all strings, so space complexity is O(nk).

*/
