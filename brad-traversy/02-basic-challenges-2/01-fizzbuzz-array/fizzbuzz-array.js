export function fizzBuzzArray(num) {
  const result = Array.from(num).fill(0);

  for (let i = 0; i < num; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      result.push("FizzBuzz");
    } else if ((i + 1) % 3 === 0) {
      result.push("Fizz");
    } else if ((i + 1) % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i + 1);
    }
  }
  return result;
}
