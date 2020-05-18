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

    if (this.head === null) {
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
console.log("--------");
