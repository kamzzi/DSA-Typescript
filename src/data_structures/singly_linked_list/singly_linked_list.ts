export class SinglyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null
  ) {}
}

export class SinglyLinkedList<T> {
  head: SinglyLinkedListNode<T> | null = null;
  tail: SinglyLinkedListNode<T> | null = null;
  length = 0;

  push(value: T) {
    const newNode = new SinglyLinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }
}
