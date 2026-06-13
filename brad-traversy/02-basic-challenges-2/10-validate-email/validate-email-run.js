import { validateEmail } from "./validate-email.js";

const result1 = validateEmail("brad@gmail.com");
const result2 = validateEmail("bradgmailcom");

console.log(result1);
console.log(result2);
