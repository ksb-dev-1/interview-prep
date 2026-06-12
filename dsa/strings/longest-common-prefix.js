function longestCommonPrefix(strs) {
  if (strs.length === 0) return 0;

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

const strs = ["flower", "flow", "flight"];
// const strs = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strs));
