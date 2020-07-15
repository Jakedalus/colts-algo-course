class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[parentIndex] < this.values[index] && parentIndex >= 0) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this.values;
  }

  extractMax() {
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;

    const max = this.values.pop();

    let parentIndex = 0;
    let largestChildIndex =
      this.values[2 * parentIndex + 1] > this.values[2 * parentIndex + 2]
        ? 2 * parentIndex + 1
        : 2 * parentIndex + 2;

    // console.log(temp, parentIndex, largestChildIndex, this.values);

    while (this.values[parentIndex] < this.values[largestChildIndex]) {
      console.log(temp, parentIndex, largestChildIndex, this.values);
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[largestChildIndex];
      this.values[largestChildIndex] = temp;
      parentIndex = largestChildIndex;
      largestChildIndex =
        this.values[2 * parentIndex + 1] > this.values[2 * parentIndex + 2]
          ? 2 * parentIndex + 1
          : 2 * parentIndex + 2;
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(47));
console.log(heap.insert(49));
console.log(heap.insert(12));
console.log(heap.insert(102));
console.log(heap.insert(1));
console.log(heap.insert(35));
console.log(heap.insert(50));
console.log(heap.insert(350));

console.log("-------");
console.log(heap.extractMax());
console.log(heap);
