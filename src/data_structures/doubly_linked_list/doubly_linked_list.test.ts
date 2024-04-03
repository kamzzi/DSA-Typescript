import { describe, expect, test } from "vitest";
import { DoublyLinkedList } from "./doubly_linked_list";

describe("Singly Linked List testing", () => {
  test("Push method without head", () => {
    const dll = new DoublyLinkedList();
    dll.push(10);

    expect(dll.head!.value).toBe(10);
    expect(dll.tail!.value).toBe(10);
  });

  test("Push method with items", () => {
    const dll = new DoublyLinkedList();
    dll.push(10);

    expect(dll.head!.value).toBe(10);
    expect(dll.tail!.value).toBe(10);

    dll.push(30);
    dll.push(40);

    expect(dll.tail!.value).toBe(40);
    expect(dll.tail!.prev!.value).toBe(30);
  });
});
