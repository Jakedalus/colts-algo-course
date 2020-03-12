

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

let first = new Node('hi');
first.next = new Node('hello there');
first.next.next = new Node('another one');
first.next.next.next = new Node('how are you');

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

}



let list = new SinglyLinkedList();
console.log(list.push('hello!'));
console.log(list.push('middle node!'));
console.log(list.push('goodbye!'));
console.log(list.head.next);






