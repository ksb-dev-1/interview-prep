export function wordFrequencyCounter(str) {
  const words = str
    .replace(/[^a-zA-Z\s]+/g, "")
    .toLowerCase()
    .trim()
    .split(/\s+/);

  const map = new Map();

  for (const word of words) {
    if (!word) continue;
    map.set(word, (map.get(word) ?? 0) + 1);
  }

  return map;
}
