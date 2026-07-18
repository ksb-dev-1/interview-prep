import { test, expect } from "vitest";
import { findFirstNonRepeatingCharacter } from "./first-non-repeating";

test("Find First Non-Repeating Character", () => {
  expect(findFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
  expect(findFirstNonRepeatingCharacter("aabbcc")).toBe(null);
  expect(findFirstNonRepeatingCharacter("hello world")).toBe("h");
});
