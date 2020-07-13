var BST = require("../Section 22 - BSTs/binarySearchTree");

const bst = new BST();
bst.insert(10);
bst.insert(7);
bst.insert(6);
bst.insert(15);
bst.insert(19);
bst.insert(17);
bst.insert(16);
bst.insert(10);

console.log(bst);

function bfs(tree) {
  const queue = [];
  const visited = [];

  queue.push(tree.root);

  while (queue.length !== 0) {
    const current = queue.shift();
    visited.push(current.value);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return visited;
}

console.log(bfs(bst));
