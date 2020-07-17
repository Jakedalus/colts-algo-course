class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[parentIndex].priority > this.values[index].priority
    ) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this.values;
  }

  dequeue() {
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;

    const topPriority = this.values.pop();

    let parentIndex = 0;
    let leftChildIndex = 2 * parentIndex + 1;
    let rightChildIndex = 2 * parentIndex + 2;
    let topPriorityChildIndex;
    if (leftChildIndex > this.values.length - 1) {
      if (rightChildIndex > this.values.length - 1) {
        return topPriority;
      }
      topPriorityChildIndex = rightChildIndex;
    } else if (rightChildIndex > this.values.length - 1) {
      topPriorityChildIndex = leftChildIndex;
    } else {
      topPriorityChildIndex =
        this.values[leftChildIndex].priority <
        this.values[rightChildIndex].priority
          ? leftChildIndex
          : rightChildIndex;
    }

    // console.log(temp, parentIndex, topPriorityChildIndex, this.values);

    while (
      this.values[parentIndex].priority >
      this.values[topPriorityChildIndex].priority
    ) {
      // console.log(temp, parentIndex, topPriorityChildIndex, this.values);
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[topPriorityChildIndex];
      this.values[topPriorityChildIndex] = temp;
      parentIndex = topPriorityChildIndex;
      leftChildIndex = 2 * parentIndex + 1;
      rightChildIndex = 2 * parentIndex + 2;
      if (leftChildIndex > this.values.length - 1) {
        if (rightChildIndex > this.values.length - 1) {
          break;
        }
        topPriorityChildIndex = rightChildIndex;
      } else if (rightChildIndex > this.values.length - 1) {
        topPriorityChildIndex = leftChildIndex;
      } else {
        topPriorityChildIndex =
          this.values[leftChildIndex].priority <
          this.values[rightChildIndex].priority
            ? leftChildIndex
            : rightChildIndex;
      }
    }

    return topPriority;
  }
}

const pq = new PriorityQueue();

pq.enqueue("mild fever", 5);
pq.enqueue("concussion", 3);
pq.enqueue("gun shot wound", 1);
pq.enqueue("plasma rifle blast", 1);
pq.enqueue("tummy ache :(", 5);
pq.enqueue("bar fight", 2);
pq.enqueue("ankle sprain", 4);

console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
