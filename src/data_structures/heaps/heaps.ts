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
}

const mbp = new MaxBinaryHeap();

mbp.insert(55);

mbp.insert(13);

console.log(mbp.values);
