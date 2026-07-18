import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { countDown } from "./count-down";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

describe("countDown", () => {
  beforeEach(() => {
    logSpy.mockClear();
  });

  afterEach(() => {
    logSpy.mockClear();
  });

  it('should log numbers in reverse order and print "All done!"', () => {
    countDown(3);

    expect(logSpy).toHaveBeenNthCalledWith(1, 3);
    expect(logSpy).toHaveBeenNthCalledWith(2, 2);
    expect(logSpy).toHaveBeenNthCalledWith(3, 1);
    expect(logSpy).toHaveBeenNthCalledWith(4, "All done!");
  });

  it("should handle num <= 0", () => {
    countDown(0);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("All done!");
  });
});
