function asyncRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve).catch(reject);
    }
  });
}

const p1 = new Promise((resolve) => setTimeout(() => resolve("p1"), 100));
const p2 = new Promise((resolve) => setTimeout(() => resolve("p2"), 50));
const p3 = new Promise((_, reject) => setTimeout(() => reject("p3 error"), 70));

asyncRace([p1, p2, p3])
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.log("Rejected:", error));
// Output: "Resolved: p2" (because p2 settles first)
