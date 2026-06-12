/*

export default function listFormat(items, options) {
  let { length = items.length, sorted = false, unique = false } = options || {};

  // Remove empty strings
  items = items.filter((item) => item);

  // Remove duplicates if unique=true
  if (unique) {
    items = [...new Set(items)];
  }

  // Sort if sorted=true
  if (sorted) {
    items = [...items].sort();
  }

  if (items.length === 0) return "";

  if (items.length === 1) return items[0];

  // If length option limits displayed items
  if (length < items.length) {
    const shown = items.slice(0, length);
    const others = items.length - length;

    return (
      shown.slice(0, -1).join(", ") +
      " and " +
      others +
      (others === 1 ? " other" : " others")
    );
  }

  return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
}
  
*/

export default function listFormat(items, options) {
  let { length = items.length, sorted = false, unique = false } = options || {};

  if (length <= 0 || length >= items.length) {
    length = items.length;
  }

  items = items.filter((item) => item);

  if (unique) {
    items = [...new Set(items)];
  }

  if (sorted) {
    items.sort();
  }

  if (items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  if (length < items.length) {
    let result = "";

    for (let i = 0; i < length; i++) {
      if (i < length - 1) {
        result += items[i] + ", ";
      } else {
        let others = items.length - length;

        result +=
          items[i] + " and " + others + (others === 1 ? " other" : " others");
      }
    }
    return result;
  }

  let result = "";

  for (let i = 0; i < items.length; i++) {
    if (i < items.length - 2) {
      result += items[i] + ", ";
    } else if (i === items.length - 2) {
      result += items[i] + " and ";
    } else {
      result += items[i];
    }
  }
  return result;
}

console.log(listFormat([])); // ''

console.log(listFormat(["Bob"])); // 'Bob'
console.log(listFormat(["Bob", "Alice"])); // 'Bob and Alice'

console.log(listFormat(["Bob", "Ben", "Tim", "Jane", "John"]));
// 'Bob, Ben, Tim, Jane and John'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
  }),
); // 'Bob, Ben, Tim and 2 others'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 4,
  }),
); // 'Bob, Ben, Tim, Jane and 1 other'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
    sorted: true,
  }),
); // 'Ben, Bob, Jane and 2 others'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
    length: 3,
    unique: true,
  }),
); // 'Bob, Ben, Tim and 2 others'

console.log(
  listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
    unique: true,
  }),
); // 'Bob, Ben, Tim and 2 others'

console.log(listFormat(["Bob", "Ben", "", "", "John"])); // 'Bob, Ben and John'
