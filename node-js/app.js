// import getGreetings from "./greetings.js";

// const firstName = process.argv[2];
// const hours = new Date().getHours();

// const greeting = getGreetings(hours);

// console.log(`${greeting}, ${firstName}!`)

// ----------------------------------------------

import os from "node:os"

console.log("CPU's : ", os.cpus().length)
console.log("Total Memory : ", os.totalmem()/1024/1024/1024, "GB")
console.log("Free Memory : ", os.freemem()/1024/1024/1024, "GB")
console.log("Uptime : ", os.uptime()/60/60, "Hours")
console.log("Hostname : ", os.hostname())
console.log("User info : ", os.userInfo())
console.log("Machine architecture : ", os.machine())