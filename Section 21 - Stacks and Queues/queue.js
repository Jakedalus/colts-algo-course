class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return null;
        const temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;

        return temp;
    }
}

const q = new Queue();

console.log(q.enqueue('FIRST'));
console.log(q);
console.log(q.enqueue('SECOND'));
console.log(q);
console.log(q.enqueue('THIRD'));
console.log(q);

console.log()
console.log('---------');
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);

