export function areAllCharactersUnique(str) {
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false;
    }
    set.add(str[i]);
  }
  return true;
}
