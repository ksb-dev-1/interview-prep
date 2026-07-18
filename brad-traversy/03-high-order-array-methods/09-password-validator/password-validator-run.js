import { validatePassword } from "./password-validator.js";

const result1 = validatePassword("Abc12345");
const result2 = validatePassword("password");

console.log(result1, result2);
