import helloWorld from "./hello-world";
import { expect, test } from "vitest";

test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello, World!");
});
