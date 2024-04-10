import { describe, expect, test } from "vitest";
import { Tree } from "./tree";

describe("Binary Search Trees tests coverage", () => {
  test("Insert method withour root", () => {
    const tree = new Tree();

    tree.insert(30);

    expect(tree.root!.value).toBe(30);
  });

  test("Insert method with root and new node smaller than current.", () => {
    const tree = new Tree();

    tree.insert(30);

    expect(tree.root!.value).toBe(30);

    tree.insert(15);

    expect(tree.root!.left!.value).toBe(15);

    tree.insert(11);

    expect(tree.root!.left!.left!.value).toBe(11);
  });

  test("Insert method with root and new node higher than current.", () => {
    const tree = new Tree();

    tree.insert(30);

    expect(tree.root!.value).toBe(30);

    tree.insert(35);

    expect(tree.root!.right!.value).toBe(35);

    tree.insert(44);

    expect(tree.root!.right!.right!.value).toBe(44);
  });

  test("Insert method with root and new node custom than current.", () => {
    const tree = new Tree();

    tree.insert(30);

    expect(tree.root!.value).toBe(30);

    tree.insert(35);

    expect(tree.root!.right!.value).toBe(35);

    tree.insert(44);

    expect(tree.root!.right!.right!.value).toBe(44);

    tree.insert(10);
    tree.insert(31);

    expect(tree.root!.left!.value).toBe(10);
    expect(tree.root!.right!.left!.value).toBe(31);
  });
});
