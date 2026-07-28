import { HashTable } from "./HashTable.js";

// export function wordInstanceCounter(str, word) {
//   const words = str
//     .replace(/[^a-zA-Z\s]+/g, "")
//     .toLowerCase()
//     .trim()
//     .split(/\s+/);

//   let count = 0;
//   word = word.toLowerCase();

//   for (const w of words) {
//     if (w === word) {
//       count++;
//     }
//   }
//   return count;
// }

export function wordInstanceCounter(str, word) {
  const map = new HashTable();

  const words = str
    .replace(/[^a-zA-Z\s]+/g, "")
    .toLowerCase()
    .trim()
    .split(/\s+/);

  for (const w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  return map.get(word.toLowerCase()) || 0;
}
