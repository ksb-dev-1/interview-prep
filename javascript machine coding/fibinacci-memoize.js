// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

const memo = {};

function fibonacci(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

console.log(fibonacci(6));

/*
fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1  
fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2  
fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3  
fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5  
fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8 ✅
*/
