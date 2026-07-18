// // Track all timeout IDs
const timeoutIds = [];

// Custom wrapper for setTimeout
function setTrackedTimeout(callback, delay) {
  const id = setTimeout(() => {
    // Remove the timeout ID once it executes
    const index = timeoutIds.indexOf(id);
    if (index !== -1) timeoutIds.splice(index, 1);
    callback();
  }, delay);

  timeoutIds.push(id);
  return id;
}

function clearAllTimeouts() {
  for (const id of timeoutIds) {
    clearTimeout(id);
  }
  timeoutIds.length = 0; // Reset the array
}

// Set some timeouts
setTrackedTimeout(() => console.log("Timeout 1"), 1000);
setTrackedTimeout(() => console.log("Timeout 2"), 2000);
setTrackedTimeout(() => console.log("Timeout 3"), 3000);

// Clear all before they run
setTimeout(() => {
  clearAllTimeouts();
  console.log("All timeouts cleared!");
}, 1500);

// ---------------------------------------------------

// Array to store timeout IDs
// let timeoutIds = [];

// // Backup original setTimeout
// const originalSetTimeout = window.setTimeout;

// // Override window.setTimeout
// window.setTimeout = function (callback, delay) {
//   const timeoutId = originalSetTimeout(callback, delay);
//   timeoutIds.push(timeoutId);
//   return timeoutId;
// };

// // Function to clear all timeouts
// function clearAllTimeout() {
//   for (let id of timeoutIds) {
//     clearTimeout(id);
//   }
//   timeoutIds = [];
//   console.log("All timeouts cleared");
// }

// // Set some timeouts
// setTimeout(function () {
//   console.log("timeout-1");
// }, 1000);

// setTimeout(function () {
//   console.log("timeout-2");
// }, 5000);

// setTimeout(function () {
//   console.log("timeout-3");
// }, 10000);

// // Clear all timeouts after 1.5 seconds
// setTimeout(clearAllTimeout, 6000);
