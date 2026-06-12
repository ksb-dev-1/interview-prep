function mapAsyncLimit(iterable, callbackFn, size) {
  if (size === undefined) {
    return Promise.all(iterable.map(callbackFn));
  }

  const results = Array.from(iterable.length);
  let index = 0;
  let running = 0;

  const promise = new Promise((resolve, reject) => {
    function runNext() {
      if (index === iterable.length && running === 0) {
        resolve(results);
      }

      while (index < iterable.length && running < size) {
        const currentIndex = index;
        index++;
        running++;

        callbackFn(iterable[currentIndex])
          .then((data) => {
            results[currentIndex] = data;
            running--;
            runNext();
          })
          .catch(reject);
      }
    }
    runNext();
  });
  return promise;
}

// Fake async API
async function fetchUpperCase(str) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 500;

    setTimeout(() => {
      console.log(`Finished: ${str}`);
      resolve(str.toUpperCase());
    }, delay);
  });
}

// Only a maximum of 2 pending requests at any one time.
(async () => {
  const results = await mapAsyncLimit(
    ["foo", "bar", "qux", "quz"],
    fetchUpperCase,
    2,
  );

  console.log(results);
})();
