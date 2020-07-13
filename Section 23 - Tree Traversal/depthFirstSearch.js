var BST = require("../Section 22 - BSTs/binarySearchTree");

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

function dfsPreOrder(tree) {
  const visited = [];

  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);

  return visited;
}

function dfsPostOrder(tree) {
  const visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  }

  traverse(tree.root);

  return visited;
}

console.log(dfsPreOrder(bst));
console.log(dfsPostOrder(bst));
