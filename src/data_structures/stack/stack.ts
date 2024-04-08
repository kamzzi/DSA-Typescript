class StackNode<T> {
  constructor(public value: T, public next: StackNode<T> | null = null) {}
}

class Stack<T> {
  constructor(
    public first: StackNode<T> | null = null,
    public last: StackNode<T> | null = null,
    public size: number = 0
  ) {}

  add(value: T) {
    const newNode = new StackNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const current = this.first;
      this.first = newNode;
      this.first.next = current;
    }

    this.size++;
    return this;
  }

  pop() {
    if (!this.size) return null;

    const current = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current!.next;
    }

    this.size--;

    return this;
  }
}
