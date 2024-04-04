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

  test("Pop method without head", () => {
    const dll = new DoublyLinkedList();

    expect(dll.pop()).toBeNull();
  });

  test("Pop method with head", () => {
    const dll = new DoublyLinkedList();

    dll.push(30);

    dll.pop();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(0);
  });

  test("Pop method with head and more items", () => {
    const dll = new DoublyLinkedList();

    dll.push(30);
    dll.push(40);
    dll.push(50);

    dll.pop();

    expect(dll.head!.value).toBe(30);
    expect(dll.tail!.value).toBe(40);
    expect(dll.tail!.next).toBeNull();
    expect(dll.tail!.prev!.value).toBe(30);
  });

  test("Shift method without head", () => {
    const dll = new DoublyLinkedList();

    expect(dll.shift()).toBeNull();
  });

  test("Shift method with head", () => {
    const dll = new DoublyLinkedList();

    dll.push(30);

    dll.shift();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(0);
  });

  test("Shift method with head and more items", () => {
    const dll = new DoublyLinkedList();

    dll.push(30);
    dll.push(40);
    dll.push(50);

    dll.shift();

    expect(dll.head!.value).toBe(40);
    expect(dll.head!.prev).toBeNull();
    expect(dll.head!.next!.value).toBe(50);
  });

  test("Unshift method without head", () => {
    const dll = new DoublyLinkedList();
    dll.unshift(10);

    expect(dll.head!.value).toBe(10);
    expect(dll.tail!.value).toBe(10);
  });

  test("Unshift method with items", () => {
    const dll = new DoublyLinkedList();
    dll.push(10);

    expect(dll.head!.value).toBe(10);
    expect(dll.tail!.value).toBe(10);

    dll.push(30);
    dll.push(40);

    dll.unshift(500);

    expect(dll!.head!.value).toBe(500);
    expect(dll!.head!.next!.value).toBe(10);
  });

  test("Get method with invalid index", () => {
    const dll = new DoublyLinkedList();
    expect(dll.get(-1)).toBeNull();
    expect(dll.get(300)).toBeNull();
  });

  test("Get method with valid index", () => {
    const dll = new DoublyLinkedList();

    dll.push(3);
    dll.push(4);
    dll.push(5);
    dll.push(6);

    expect(dll.get(2)!.value).toBe(5);
  });
});
