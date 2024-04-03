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
  test("Shift method without head", () => {
    const sll = new SinglyLinkedList();

    expect(sll.shift()).toBeNull();
  });
  test("Shift method with 1 item", () => {
    const sll = new SinglyLinkedList();
    sll.push(5);
    expect(sll.head!.value).toBe(5);
    expect(sll.tail!.value).toBe(5);
    expect(sll.length).toBe(1);

    sll.shift();

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);
  });
  test("Shift method with more than 1 item", () => {
    const sll = new SinglyLinkedList();
    sll.push(5);
    expect(sll.head!.value).toBe(5);
    expect(sll.tail!.value).toBe(5);
    expect(sll.length).toBe(1);
    sll.push(6);
    sll.push(7);

    sll.shift();

    expect(sll.head!.value).toBe(6);
    expect(sll.length).toBe(2);
  });
  test("Unshift method without head", () => {
    const sll = new SinglyLinkedList();
    sll.unshift(5);
    expect(sll.head!.value).toBe(5);
    expect(sll.tail!.value).toBe(5);
    expect(sll.length).toBe(1);
  });

  test("Unshift method with head", () => {
    const sll = new SinglyLinkedList();
    sll.push(5);
    expect(sll.head!.value).toBe(5);
    expect(sll.tail!.value).toBe(5);
    expect(sll.length).toBe(1);
    sll.push(6);
    sll.unshift(350);
    expect(sll.head!.value).toBe(350);
    expect(sll.head!.next!.value).toBe(5);
    expect(sll.length).toBe(3);
  });
  test("Get method with invalid index", () => {
    const sll = new SinglyLinkedList();

    expect(sll.get(-1)).toBeNull();
    expect(sll.get(11)).toBeNull();
  });

  test("Get method with valid index", () => {
    const sll = new SinglyLinkedList();

    sll.push(3);
    sll.push(4);

    const finded = sll.get(1);

    expect(finded!.value).toBe(4);
  });
  test("Set method with invalid index", () => {
    const sll = new SinglyLinkedList();

    sll.push(35);

    expect(sll.set(550, -1)).toBeFalsy();
    expect(sll.set(550, 11)).toBeFalsy();
  });

  test("Set method with valid index", () => {
    const sll = new SinglyLinkedList();

    sll.push(35);
    sll.push(500);

    sll.set(359, 0);

    expect(sll.get(0)!.value).toBe(359);
  });

  test("Insert method with invalid index", () => {
    const sll = new SinglyLinkedList();

    sll.insert(35, 0);

    expect(sll.set(550, -1)).toBeFalsy();
    expect(sll.set(550, 11)).toBeFalsy();
  });

  test("Insert method with valid index and without head", () => {
    const sll = new SinglyLinkedList();

    sll.insert(35, 0);

    expect(sll.head!.value).toBe(35);
    expect(sll.tail!.value).toBe(35);
    expect(sll.length).toBe(1);
  });

  test("Insert method with valid index and items", () => {
    const sll = new SinglyLinkedList();

    sll.push(35);

    expect(sll.head!.value).toBe(35);
    expect(sll.tail!.value).toBe(35);
    expect(sll.length).toBe(1);

    sll.push(355);
    sll.push(100);

    sll.insert(250, 1);

    expect(sll.get(1)!.value).toBe(250);
    expect(sll.get(1)!.next!.value).toBe(355);
  });

  test("Remove method with invalid index", () => {
    const sll = new SinglyLinkedList();

    expect(sll.remove(-2)).toBeFalsy();
    expect(sll.remove(500)).toBeFalsy();
  });

  test("Remove method with valid index and without head", () => {
    const sll = new SinglyLinkedList();

    expect(sll.remove(0)).toBeNull();
  });

  test("Remove method with valid index and items", () => {
    const sll = new SinglyLinkedList();

    sll.push(35);

    expect(sll.head!.value).toBe(35);
    expect(sll.tail!.value).toBe(35);
    expect(sll.length).toBe(1);

    sll.push(355);
    sll.push(100);

    sll.remove(1);

    expect(sll.get(1)!.value).toBe(100);
  });
});
