// export function power(base, exponent) {
//   let result = 1;

//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

export function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
