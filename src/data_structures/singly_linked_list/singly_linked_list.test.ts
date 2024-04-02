import { describe, test, expect } from "vitest";
import { SinglyLinkedList, SinglyLinkedListNode } from "./singly_linked_list";

describe("Singly Linked List testing", () => {
  test("Create a SLL node with/without next element.", () => {
    const sllNode = new SinglyLinkedListNode(3);
    const sllNextNode = new SinglyLinkedListNode(10);

    expect(sllNode.value).toBe(3);
    expect(sllNode.next).toBe(null);

    sllNode.next = sllNextNode;

    expect(sllNode.next).toBe(sllNextNode);
  });

  test("Initial SLL properties.", () => {
    const sll = new SinglyLinkedList();

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);
  });

  test("Push method without head", () => {
    const sll = new SinglyLinkedList();

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);

    sll.push(50);

    expect(sll.head!.value).toBe(50);
    expect(sll.tail!.value).toBe(50);
    expect(sll.length).toBe(1);
  });

  test("Push method with head", () => {
    const sll = new SinglyLinkedList();

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);

    sll.push(50);

    expect(sll.head!.value).toBe(50);
    expect(sll.tail!.value).toBe(50);
    expect(sll.length).toBe(1);

    sll.push(150);

    expect(sll.head!.value).toBe(50);
    expect(sll.tail!.value).toBe(150);
    expect(sll.length).toBe(2);
  });

  test("Pop method without head", () => {
    const sll = new SinglyLinkedList();

    expect(sll.pop()).toBeNull();
  });
  test("Pop method with 1 item", () => {
    const sll = new SinglyLinkedList();
    sll.push(5);
    expect(sll.head!.value).toBe(5);
    expect(sll.tail!.value).toBe(5);
    expect(sll.length).toBe(1);

    sll.pop();

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);
  });
  test("Pop method with more than 1 item", () => {
    const sll = new SinglyLinkedList();
    sll.push(5);
    expect(sll.head!.value).toBe(5);
    expect(sll.tail!.value).toBe(5);
    expect(sll.length).toBe(1);
    sll.push(6);
    sll.push(7);

    sll.pop();

    expect(sll.tail!.value).toBe(6);
    expect(sll.length).toBe(2);
  });
});
