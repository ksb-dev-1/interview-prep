import { useState } from "react";

export default function useArray(initialValue = []) {
  const [array, setArray] = useState(initialValue);

  function push(item) {
    setArray((prev) => [...prev, item]);
  }

  function update(index, value) {
    setArray((prev) => prev.map((item, i) => (index === i ? value : item)));
  }

  function remove(index) {
    setArray((prev) => prev.filter((_, i) => index !== i));
  }

  function filter(callback) {
    setArray((prev) => prev.filter(callback));
  }

  function set(newArray) {
    setArray(newArray);
  }

  function clear() {
    setArray([]);
  }

  return {
    array,
    push,
    update,
    remove,
    filter,
    set,
    clear,
  };
}
