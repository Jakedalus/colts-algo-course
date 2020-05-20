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

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current;

    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    nextNode.prev = newNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    this.length++;

    return true;
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

console.log();
console.log("========");
console.log("Unshift nodes onto list");
console.log("--------");
console.log(list.unshift("unshfited node"));
console.log(list.unshift("unshfited node #two"));

console.log();
console.log("========");
console.log("Get node at index");
console.log("--------");
console.log(list.get(-10));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.get(4));
console.log(list.get(100));

console.log();
console.log("========");
console.log("Set node at index");
console.log("--------");
console.log(list.set(0, "SETTING THE HEAD!!"));
console.log(list);
console.log(list.set(3, "SETTING THE TAIL!!"));
console.log(list);
console.log(list.set(10, "WON'T WORK!!"));
console.log(list);

console.log();
console.log("========");
console.log("Insert node at index");
console.log("--------");
console.log(list.insert(0, "INSERT NEW HEAD!!"));
console.log(list);
console.log(list.insert(5, "INSERT NEW TAIL!!"));
console.log(list);
console.log(list.insert(10, "WON'T WORK!!"));
console.log(list);
console.log(list.insert(2, "INSERT IN MIDDLE"));
console.log(list);
console.log(list.get(2));
