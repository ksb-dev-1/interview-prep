// export function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// -------------------------------------------------------------------

// export function fibonacci(n, memo = {}) {
//   if (n in memo) return memo[n];

//   if (n <= 1) return n;

//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

//   return memo[n];
// }

// -------------------------------------------------------------------

export function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
