import { wordInstanceCounter } from "./word-instance-counter.js";

const result = wordInstanceCounter(
  "The quick! brown  fox jumps over the lazy dog.",
  "brown",
);

// const result = wordInstanceCounter("Hello, Hello, Hello!", "hello");

console.log(result);
