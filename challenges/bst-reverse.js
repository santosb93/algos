function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstReverse = (root) => {
  if (!root) return;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  bstReverse(root.left);
  bstReverse(root.right);
  return root;
};

/*

Extension:

Given an array where elements are sorted in ascending order, convert it to a
height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Ex:

Given the sorted array: [0, 3, 4, 6, 8, 9], the output is:

     6 
   /   \
  3     9
 / \   /
0   4 8

Whenever you have two elements in the middle like [1, 4, 7, 8], always
prioritize the rightmost value to place at the top of the tree/subtree,
giving us:

    7
   / \
  4   8
 /
1

(i.e. choose the 7 over the 4 to place at the top of the entire tree, and then
the 4 over the 1 to place at the top of the left subtree. Hint: look up the
Math.ceil function)

*/

const sortedArrayToBST = (arr) => {
  if (arr.length === 0) return null;
  // remove the middle element of the array and create a new instance of BST with the middle element of the array
  const root = new BinarySearchTree(
    ...arr.splice(Math.ceil(arr.length / 2), 1)
  );
  const BSTadd = (value) => {
    const node = new BinarySearchTree(value);
    const queue = [root];
    while (queue.length > 0) {
      const el = queue.shift();
      if (el.left) queue.push(el.left);
      if (el.right) queue.push(el.right);
      if (el.left === null && value < el.value) el.left = node;
      else if (el.right === null && value > el.value) el.right = node;
    }
  };
  // iterate through the array adding the elements to the BST
  while (arr.length > 1) {
    const left = arr.splice();
    BSTadd(...arr.splice(arr.length / 2, 1));
  }

  console.log(root);
};
sortedArrayToBST([0, 3, 4, 6, 8, 9]);
module.exports = { BinarySearchTree, bstReverse, sortedArrayToBST };
