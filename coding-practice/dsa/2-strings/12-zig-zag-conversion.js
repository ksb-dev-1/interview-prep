/* 🟡 6. Zigzag Conversion

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 
Example 1:
==========

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
==========

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
==========

Input: s = "A", numRows = 1
Output: "A"
 
Constraints:
============

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

*/

function zigZagConversion(s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = true;

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];

    if (currentRow === 0) {
      goingDown = true;
    }

    if (currentRow === numRows - 1) {
      goingDown = false;
    }

    if (goingDown) {
      currentRow++;
    } else {
      currentRow--;
    }
  }
  return rows.join("");
}

// const s = "PAYPALISHIRING";
// const numRows = 3;

const s = "PAYPALISHIRING";
const numRows = 4;

// const s = "A";
// const numRows = 1;

console.log(zigZagConversion(s, numRows));
