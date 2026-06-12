// Iterative
function flattenIterative() {
  const stack = [...this];
  const res = [];

  while (stack.length) {
    const value = stack.pop();

    if (Array.isArray(value)) {
      stack.push(...value);
    } else {
      res.push(value);
    }
  }
  return res.reverse();
}

// Recursive
function flattenRecursive() {
  let result = [];

  function process(value) {
    for (let i = 0; i < value.length; i++) {
      if (Array.isArray(value[i])) {
        process(value[i]);
      } else {
        result.push(value[i]);
      }
    }
  }

  process(this);

  return result;
}

// Return based recursive
function flattenReturnBasedRecursive() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result.push(...flattenRecursive(this[i]));
    } else {
      result.push(this[i]);
    }
  }

  return result;
}

// Mutating original array
function flattenMutate() {
  let i = 0;

  while (i < this.length) {
    if (Array.isArray(this[i])) {
      this.splice(i, 1, ...this[i]);
    } else {
      i++;
    }
  }
  return this;
}

Array.prototype.flatten = flattenRecursive;

var arr = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

console.log(arr.flatten());

function flattenWithDepthIterative(arr, depth = 1) {
  let stack = arr.map((item) => [item, depth]);
  let result = [];

  while (stack.length) {
    const [item, d] = stack.pop();

    if (Array.isArray(item) && d > 0) {
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push([item[i], d - 1]);
      }
    } else {
      result.push(item);
    }
  }
  return result.reverse();
}

function flattenWithDepthRecursive(arr, depth = 1) {
  const result = [];

  function dfs(curr, d) {
    for (const item of curr) {
      if (Array.isArray(item) && d > 0) {
        dfs(item, d - 1);
      } else {
        result.push(item);
      }
    }
  }

  dfs(arr, depth);

  return result;
}

const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const depth = 1;

console.log(flattenWithDepthIterative(array, depth));

/*

✅ Key assumption (important)

Let:

N = total number of elements (including nested ones actually visited)
D = nesting depth limit (for depth-based flattening)
✅ 1. flattenIterative (this-based stack version)

⏱ Time Complexity → O(N)

Why:

Every element is:
pushed once
popped once
processed once

Even though arrays are expanded, each value is still handled a constant number of times overall.

✔️ Final: O(N)

💾 Space Complexity → O(N)

Breakdown:

Stack → worst case holds all elements → O(N)
Result array → O(N)

✔️ Final: O(N)

✅ 2. flattenRecursive (DFS with result array)

⏱ Time Complexity → O(N)

Each node visited once.

✔️ Final: O(N)

💾 Space Complexity → O(N)

Recursion stack → O(D) (worst O(N))
Result array → O(N)

✔️ Final: O(N)

👉 More precise version:

O(N + D) → simplifies to O(N)

⚠️ 3. flattenReturnBasedRecursive

This one is where your table needs correction.

Problem:
result.push(...flattenRecursive(this[i]));

This causes:

repeated recursion calls on overlapping subtrees
repeated array allocations

⏱ Time Complexity → ❌ O(N²) in worst case

Why:

Each nested call rebuilds arrays repeatedly
Spread operator copies arrays repeatedly
Heavy recomputation in deep nesting

✔️ Correct: O(N²) (worst case skewed trees)

💾 Space Complexity → O(N²) (can degrade)

Because:

many intermediate arrays created
recursion stack still O(N)

✔️ Better written as:

O(N × D) or worst-case O(N²)

⚠️ 4. flattenMutate (splice version)

⏱ Time Complexity → O(N²)

Why:

splice() is O(k) shifting elements
You do it repeatedly inside a loop

So overall:
✔️ O(N²)

💾 Space Complexity → O(1) extra

But:

modifies input array
not safe for production patterns

✔️ Extra space: O(1)

⚠️ 5. Depth-limited versions

✅ Iterative depth version

⏱ Time → O(N)

Each element processed once.

✔️ O(N)

💾 Space → O(N + D)
stack: O(N)
result: O(N)

✔️ O(N)

✅ Recursive depth version

⏱ Time → O(N)

Each element visited once.

✔️ O(N)

💾 Space → O(D + N)
recursion stack: O(D)
result: O(N)

✔️ O(N)

| Approach               | Time Complexity | Space Complexity | Mutation  | Verdict          |
| ---------------------- | --------------- | ---------------- | --------  | ---------------  |
| Iterative stack        | O(N)            | O(N)             | ❌        | 🥇 Best         |
| Recursive DFS          | O(N)            | O(N)             | ❌        | 🥈 Clean        |
| Return-based recursion | O(N²)           | O(N²)            | ❌        | 🚫 Bad          |
| Mutating splice        | O(N²)           | O(1)             | ✅        | 🚫 Worst        |
| Depth iterative        | O(N)            | O(N)             | ❌        | 🥇 Best variant |
| Depth recursive        | O(N)            | O(N)             | ❌        | 🥈 Good         |

🔥 Interview-level insight (what seniors say)

If asked:

“Which is best and why?”

You say:

- Iterative stack is safest for deep recursion (no stack overflow)
- Recursive is more readable but limited by call stack
- Mutating version is avoided in production due to O(N²) behavior and side effects

*/
