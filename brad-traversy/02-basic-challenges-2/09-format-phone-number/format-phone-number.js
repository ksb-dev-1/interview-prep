// export function formatPhoneNumber(arr) {
//   let res = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       res += `(${arr[i]}`;
//     } else if (i === 1) {
//       res += arr[i];
//     } else if (i === 2) {
//       res += `${arr[i]}) `;
//     } else if (i === 3 || i === 4) {
//       res += arr[i];
//     } else if (i === 5) {
//       res += `${arr[i]}-`;
//     } else {
//       res += arr[i];
//     }
//   }
//   return res;
// }

export function formatPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join("")}) ${arr
    .slice(3, 6)
    .join("")}-${arr.slice(6).join("")}`;
}
