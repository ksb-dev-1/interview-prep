export function displayLikes(arr) {
  if (arr.length === 0) {
    return "no one likes this";
  } else if (arr.length === 1) {
    return arr[0] + " likes this";
  } else if (arr.length === 2) {
    return arr[0] + " and " + arr[1] + " like this";
  } else if (arr.length === 3) {
    return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
  }

  let result = "";

  for (let i = 0; i < arr.length - (arr.length - 2); i++) {
    if (i === 0) result += arr[i] + ", ";
    else {
      result += arr[i];
    }
  }
  result += " and " + (arr.length - 2) + " others like this";
  return result;
}
