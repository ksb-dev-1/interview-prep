function reverseWords(s) {
  //   const strs = s.split(" ");
  //   let reversed = "";
  //   for (let i = strs.length - 1; i >= 0; i--) {
  //     if (strs[i]) {
  //       reversed += strs[i] + " ";
  //     }
  //   }
  //   return reversed.trim();
  // ---------------------------------------------
  //   const strs = s.split(" ");
  //   const result = [];
  //   for (let i = strs.length - 1; i >= 0; i--) {
  //     if (strs[i]) result.push(strs[i]);
  //   }
  //   return result.join(" ");
  // ---------------------------------------------
  let result = "";
  let end = s.length - 1;

  while (end >= 0) {
    if (s[end] === " ") {
      end--;
      continue;
    }

    let start = end;

    while (start >= 0 && s[start] !== " ") {
      start--;
    }

    const word = s.substring(start + 1, end + 1);

    result += (result.length > 0 ? " " : "") + word;

    end = start;
  }
  return result;
}

const s = "the sky is blue";
// const s = "  hello world  ";
// const s = "a good   example";

console.log(reverseWords(s));
