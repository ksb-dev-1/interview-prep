// export function getUsers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: "John" },
//         { id: 2, name: "Jane" },
//       ]);
//     }, 1000); // Simulating API call with a delay of 2 seconds
//   });
// }

// export function getPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: "First post" },
//         { id: 2, title: "Second post" },
//       ]);
//     }, 1000); // Simulating API call with a delay of 2 seconds
//   });
// }

// Promise.all([getUsers(), getPosts()])
//   .then(([users, posts]) => {
//     console.log(users);
//     console.log(posts); // This will log an array containing the resolved data from both promises
//   })
//   .catch((err) => {
//     console.error(err); // Log any errors that occur during promise resolution
//   });

export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let completed = 0;

    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i])
        .then((value) => {
          results[i] = value;
          completed++;

          if (completed === iterable.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
}
