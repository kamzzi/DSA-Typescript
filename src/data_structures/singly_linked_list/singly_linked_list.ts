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
}

const sll = new SinglyLinkedList();

sll.push(3);
sll.push(5);
sll.push(7);

sll.pop();
sll.shift();
sll.unshift(350);
sll.unshift(650);

console.log(sll);
