// === Promise Handling Lab ===

// ✅ 1. Create a simple Promise that resolves after a certain time
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms} ms`);
    }, ms);
  });
};

delay(1000).then((res) => console.log("1. Delay Promise:", res));

// ✅ 2. Use then() and catch() methods to handle the Promise
const simulateJob = (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Job successful");
      } else {
        reject("Job failed");
      }
    }, 500);
  });
};

simulateJob(true)
  .then((res) => console.log("2. Job Success:", res))
  .catch((err) => console.error("2. Job Error:", err));

// ✅ 3. Create a chain of Promises
const chainStep1 = () => Promise.resolve("Start");
const chainStep2 = (msg) => Promise.resolve(msg + " → Step 2");
const chainStep3 = (msg) => Promise.resolve(msg + " → Step 3");

chainStep1()
  .then(chainStep2)
  .then(chainStep3)
  .then((result) => console.log("3. Chained Result:", result));

// ✅ 4. Implement error handling in Promises
const riskyOperation = (value) => {
  return new Promise((resolve, reject) => {
    if (value > 0) {
      resolve("Positive value: " + value);
    } else {
      reject("Negative or zero value not allowed");
    }
  });
};

riskyOperation(-1)
  .then((res) => console.log("4. Risky Success:", res))
  .catch((err) => console.error("4. Risky Error:", err))
  .finally(() => console.log("4. Finished risky operation"));

// ✅ 5. Use Promise.all() to resolve multiple Promises
const p1 = delay(1000);
const p2 = delay(1500);
const p3 = delay(500);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("5. Promise.all results:");
    results.forEach((res, i) => console.log(`   Result ${i + 1}:`, res));
  })
  .catch((err) => console.error("5. Promise.all Error:", err));

// ✅ 6. Use Promise.race() to get the result of the fastest Promise
const fast = delay(400);
const slow = delay(1000);

Promise.race([fast, slow])
  .then((result) => console.log("6. Promise.race winner:", result))
  .catch((err) => console.error("6. Promise.race Error:", err));
