export function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  let [part1, part2] = email.split("@");

  if (part1.length === 0 || part2.length < 2) {
    return false;
  }

  part2 = part2.split(".");

  if (part2.length < 2 || part2[1].length < 2) {
    return false;
  }
  return true;
}
