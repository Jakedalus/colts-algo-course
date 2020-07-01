class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log(bst.insert(10));
console.log(bst.insert(7));
console.log(bst.insert(6));
console.log(bst.insert(15));
console.log(bst.insert(19));
console.log(bst.insert(17));
console.log(bst.insert(16));
console.log(bst.insert(10));
console.log(bst);
