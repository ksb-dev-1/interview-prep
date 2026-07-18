function convert(str, rows) {
  if (rows === 1 || str.length <= rows) return str;

  const res = new Array(rows).fill("");

  let currRow = 0;
  let direction = -1;

  for (let i = 0; i < str.length; i++) {
    res[currRow] += str[i];

    if (currRow === 0 || currRow === rows - 1) {
      direction *= -1;
    }

    currRow += direction;
  }
  return res.join("");
}

const str = "PAYPALISHIRING";
const rows = 3;

console.log(convert(str, rows));
