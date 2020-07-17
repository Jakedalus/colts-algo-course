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
    let leftChildIndex = 2 * parentIndex + 1;
    let rightChildIndex = 2 * parentIndex + 2;
    let largestChildIndex;
    if (leftChildIndex > this.values.length - 1) {
      if (rightChildIndex > this.values.length - 1) {
        return max;
      }
      largestChildIndex = rightChildIndex;
    } else if (rightChildIndex > this.values.length - 1) {
      largestChildIndex = leftChildIndex;
    } else {
      largestChildIndex =
        this.values[leftChildIndex] > this.values[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
    }

    // console.log(temp, parentIndex, largestChildIndex, this.values);

    while (this.values[parentIndex] < this.values[largestChildIndex]) {
      // console.log(temp, parentIndex, largestChildIndex, this.values);
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[largestChildIndex];
      this.values[largestChildIndex] = temp;
      parentIndex = largestChildIndex;
      leftChildIndex = 2 * parentIndex + 1;
      rightChildIndex = 2 * parentIndex + 2;
      if (leftChildIndex > this.values.length - 1) {
        if (rightChildIndex > this.values.length - 1) {
          break;
        }
        largestChildIndex = rightChildIndex;
      } else if (rightChildIndex > this.values.length - 1) {
        largestChildIndex = leftChildIndex;
      } else {
        largestChildIndex =
          this.values[leftChildIndex] > this.values[rightChildIndex]
            ? leftChildIndex
            : rightChildIndex;
      }
    }

    return max;
  }
}

// const heap = new MaxBinaryHeap();
// console.log(heap.insert(47));
// console.log(heap.insert(49));
// console.log(heap.insert(12));
// console.log(heap.insert(102));
// console.log(heap.insert(1));
// console.log(heap.insert(35));
// console.log(heap.insert(50));
// console.log(heap.insert(350));

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(33);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log("-------");
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log("***");
console.log(heap.extractMax());
console.log(heap);
console.log("***");
console.log(heap.extractMax());
console.log(heap);
console.log("***");
console.log(heap.extractMax());
console.log(heap);
console.log("***");
console.log(heap.extractMax());
console.log(heap);
console.log("***");
console.log(heap.extractMax());
console.log(heap);
console.log("***");
console.log(heap.extractMax());
console.log(heap);
