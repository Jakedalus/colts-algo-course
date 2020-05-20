class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }
}

console.log("========");
console.log("Initialize List");
console.log("--------");
const list = new DoublyLinkedList();
console.log(list);

console.log();
console.log("========");
console.log("Push nodes onto list");
console.log("--------");
list.push(15);
console.log(list);
list.push(11);
console.log(list);
list.push(-9);
console.log(list);
list.push(99);
console.log(list);

console.log();
console.log("========");
console.log("Pop nodes off list");
console.log("--------");
console.log(list.pop());
console.log(list);

console.log();
console.log("========");
console.log("Shift nodes off list");
console.log("--------");
console.log(list.shift());
console.log(list);
