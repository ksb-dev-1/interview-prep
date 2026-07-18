export function validatePassword(str) {
  const isValidLength = str.length >= 8;

  const hasUppecaseLetter = str
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercaseLetter = str
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = str.split("").some((char) => !isNaN(parseInt(char, 10)));

  return isValidLength && hasUppecaseLetter && hasLowercaseLetter && hasDigit;
}
