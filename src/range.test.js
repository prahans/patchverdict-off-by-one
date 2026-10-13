import { describe, expect, it } from "vitest";
import { range } from "./range.js";

describe("range", () => {
  it("includes the start and excludes the end", () => {
    expect(range(1, 4)).toEqual([1, 2, 3]);
  });

  it("returns an empty array when start equals end", () => {
    expect(range(5, 5)).toEqual([]);
  });

  it("supports negative values", () => {
    expect(range(-2, 1)).toEqual([-2, -1, 0]);
  });
});
