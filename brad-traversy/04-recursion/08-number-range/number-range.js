export function numberRange(n1, n2) {
  if (n1 === n2) {
    return [n1];
  }

  const numbers = numberRange(n1 + 1, n2);

  return [n1, ...numbers];
}
