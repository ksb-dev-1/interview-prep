// export function validAnagrams(s1, s2) {
//   if (s1.length !== s2.length) return false;

//   const map = new Map();

//   for (let i = 0; i < s1.length; i++) {
//     const c1 = s1[i];
//     const c2 = s2[i];

//     map.set(c1, (map.get(c1) || 0) + 1);
//     map.set(c2, (map.get(c2) || 0) - 1);
//   }

//   for (const value of map.values()) {
//     if (value !== 0) return false;
//   }

//   return true;
// }

export function validAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }
  return count.every((v) => v === 0);
}
