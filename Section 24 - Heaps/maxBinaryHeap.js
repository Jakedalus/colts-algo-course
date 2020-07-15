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
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(47));
console.log(heap.insert(49));
console.log(heap.insert(12));
console.log(heap.insert(102));
console.log(heap.insert(1));
console.log(heap.insert(35));
console.log(heap.insert(350));
