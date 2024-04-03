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

  pop() {
    if (!this.head) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let prev = current;

      while (current?.next) {
        prev = current;
        current = current.next;
      }

      this.tail = prev;
      this.tail!.next = null;
    }

    this.length--;
    return true;
  }

  shift() {
    if (!this.head) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head!.next;
      this.head = newHead;
    }

    this.length--;

    return this.head;
  }

  unshift(value: T) {
    const newNode = new SinglyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      this.head!.next = currentHead;
    }

    this.length++;
    return newNode;
  }

  get(index: number) {
    if (index < 0 || index > this.length) return null;

    let tempIndex = 0;
    let current = this.head;

    if (!current) return null;

    while (tempIndex !== index) {
      tempIndex++;
      current = current!.next;
    }

    return current;
  }

  set(value: T, index: number) {
    if (index < 0 || index > this.length) return false;

    const item = this.get(index);

    if (!item) return false;

    item.value = value;

    return true;
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const finded = this.get(index - 1);

    if (!finded) return null;

    const newNode = new SinglyLinkedListNode(value);

    newNode.next = finded.next;
    finded.next = newNode;
    this.length++;
    return newNode;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return null;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const previousElement = this.get(index - 1);
    const removed = previousElement!.next;
    previousElement!.next = removed!.next;

    this.length--;

    return removed;
  }

  reverse() {
    if (this.length === 0) return null;

    [this.tail, this.head] = [this.head, this.tail];

    let prev = null;
    let next = null;
    let current = this.tail;

    for (let i = 0; i < this.length; i++) {
      next = current!.next;
      current!.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

const sll = new SinglyLinkedList();

sll.push(1);
sll.push(2);
sll.push(3);
sll.push(311);

sll.reverse();
