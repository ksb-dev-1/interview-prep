export function sumUpTo(n) {
  if (n <= 1) {
    return n;
  }

  return n + sumUpTo(n - 1);
}
