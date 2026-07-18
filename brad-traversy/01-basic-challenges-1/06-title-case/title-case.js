export function titleCase(str) {
  let strArray = str.split(" ");
  let result = "";

  for (let i = 0; i < strArray.length; i++) {
    result +=
      strArray[i][0].toUpperCase() +
      strArray[i].substring(1).toLowerCase() +
      " ";
  }
  return result.trim();
}
