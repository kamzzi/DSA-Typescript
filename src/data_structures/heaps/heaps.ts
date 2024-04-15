export class MaxBinaryHeap {
  values: number[] = [41, 39, 33, 18, 27, 12];

  insert(value: number) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      const parentElement = this.values[parentIndex];

      if (element > parentElement) {
        this.values[parentIndex] = element;
        this.values[idx] = parentElement;
        idx = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    this.values[0] = end!;

    this.sinkDown();

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild!)
        ) {
          swap = rightIdx;
        }
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }
  }
}
