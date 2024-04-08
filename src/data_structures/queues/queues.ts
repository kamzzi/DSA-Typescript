class QueueNode<T> {
  constructor(public value: T, public next: QueueNode<T> | null = null) {}
}

class Queues<T> {
  constructor(
    public first: QueueNode<T> | null = null,
    public last: QueueNode<T> | null = null,
    public size: number = 0
  ) {}

  enqueue(value: T) {
    const newNode = new QueueNode(value);

    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return this;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return this;
  }
}
