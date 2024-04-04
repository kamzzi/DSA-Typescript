export class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: DoublyLinkedListNode<T> | null = null,
    public prev: DoublyLinkedListNode<T> | null = null
  ) {}
}

export class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null = null;
  tail: DoublyLinkedListNode<T> | null = null;
  length = 0;

  push(value: T) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  pop() {
    if (!this.head) return null;
    const removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    }

    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) return null;
    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }

    this.length--;
    return removed;
  }

  unshift(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    const currentHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head!.next = currentHead;
      currentHead!.prev = newNode;
    }

    this.length++;
    return newNode;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    const middleOfLength = Math.floor(this.length / 2);
    const isIndexHigherThanMiddle = index > middleOfLength;

    if (isIndexHigherThanMiddle) {
      let maxLength = this.length;
      let current = this.tail;

      while (maxLength !== index) {
        current = current!.prev;
        maxLength--;
      }

      return current;
    }
    if (!isIndexHigherThanMiddle) {
      let tempIndex = 0;
      let current = this.head;

      while (tempIndex !== index) {
        current = current!.next;
        tempIndex++;
      }

      return current;
    }
    return null;
  }

  set(index: number, value: T) {
    if (index < 0 || index >= this.length) return null;

    const findedNode = this.get(index);

    if (!findedNode) return null;

    findedNode.value = value;

    return findedNode;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const findedNode = this.get(index - 1);

    if (!findedNode) return null;

    const newNode = new DoublyLinkedListNode(value);

    const previousElementOfFinded = findedNode!.prev;

    previousElementOfFinded!.next = newNode;
    newNode!.prev = previousElementOfFinded;
    newNode!.next = findedNode;
    findedNode!.prev = newNode;

    this.length++;

    return newNode;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const findedNode = this.get(index);

    if (!findedNode) return null;

    const previous = findedNode!.prev;

    previous!.next = findedNode!.next;
    findedNode!.next!.prev = previous;

    this.length--;

    return findedNode;
  }
}
