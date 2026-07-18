export function findFirstNonRepeatingCharacter(str) {
  const map = new Map();

  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}
