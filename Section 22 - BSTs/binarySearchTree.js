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

  find(value) {
    if (this.root === null) return false;
    if (value === this.root.value) return true;

    let current = this.root;
    while (true) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        if (current.left !== null) {
          current = current.left;
        } else {
          return false;
        }
      } else {
        if (current.right !== null) {
          current = current.right;
        } else {
          return false;
        }
      }
    }
  }

  coltsFind(value) {
    if (this.root === null) return false;

    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
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

console.log("------- find -------");
console.log(bst.find(10));
console.log("----");
console.log(bst.find(17));
console.log("----");
console.log(bst.find(6));
console.log("----");
console.log(bst.find(160));
console.log("----");

console.log("------- colt's find -------");
console.log(bst.coltsFind(10));
console.log("----");
console.log(bst.coltsFind(17));
console.log("----");
console.log(bst.coltsFind(6));
console.log("----");
console.log(bst.coltsFind(160));
console.log("----");
