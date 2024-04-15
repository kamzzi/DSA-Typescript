import { describe, expect, test } from "vitest";
import { MaxBinaryHeap } from "./heaps";

describe("Max Binary Heap  testing", () => {
  test("Insert method", () => {
    const mbh = new MaxBinaryHeap();

    mbh.values = [41, 39, 33, 18, 27, 12];

    mbh.insert(55);

    expect(mbh.values[0]).toEqual(55);

    mbh.insert(10);

    expect(mbh.values[mbh.values.length - 1]).toEqual(10);
  });
});
