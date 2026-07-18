import { test, expect } from "vitest";
import { arraySum } from "./array-sum.js";

test("Calculate Sum of Array Using Recursion", () => {
  expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
  expect(arraySum([-1, -2, -3, -4, -5])).toEqual(-15);
  expect(arraySum([])).toEqual(0);
});
