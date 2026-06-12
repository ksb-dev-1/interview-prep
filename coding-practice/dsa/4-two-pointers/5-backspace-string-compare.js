/* 🟢 844. Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
==========

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
==========

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
==========

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 
Constraints:
============

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 
Follow up: Can you solve it in O(n) time and O(1) space?

*/

/*

function build(s) {
  const stack = [];

  for (let ch of s) {
    if (ch === "#") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join("");
}

function backspaceCompare(s, t) {
  return build(s) === build(t);
}

*/

function backspaceCompare(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    let skipS = 0;
    while (i >= 0) {
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    let skipT = 0;
    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    const charS = i >= 0 ? s[i] : "";
    const charT = j >= 0 ? t[j] : "";

    if (charS !== charT) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}

// const s = "ab#c";
// const t = "ad#c";

const s = "ab##";
const t = "c#d#";

// const s = "bxj##tw";
// const t = "bxo#j##tw";

console.log(backspaceCompare(s, t));

// ============================================

// const users = [
//   { id: 1, name: "Jack", isActive: true },
//   { id: 2, name: "John", isActive: true },
//   { id: 3, name: "Mike", isActive: false },
// ];

// let result = [];

// for (let i = 0; i < users.length; i++) {
//   result.push(users[i].name);
// }

// console.log(result);

// ============================================

// let var1;
// console.log(var1);
// console.log(typeof var1);

// let var2 = null;
// console.log(var2);
// console.log(typeof var2);

// ============================================

// console.log(foo);
// foo = 1;

// console.log(foo);
// var foo = 2;

// var foo;
// foo = 3;
// console.log(foo);

// ============================================

// function privateCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//     },

//     getValue() {
//       return count;
//     },
//   };
// }

// const counter = privateCounter();
// console.log(counter.getValue()); // 0
// counter.increment();
// console.log(counter.getValue()); // 1

// ============================================

// function privateSecret() {
//   const secret = "I am Batman";

//   return function () {
//     return secret;
//   };
// }

// const getSecret = privateSecret();

// console.log(getSecret()); // I am Batman

// ============================================
// ============================================
// ============================================
// ============================================
// ============================================
