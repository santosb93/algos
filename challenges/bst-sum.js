function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

bst = new BinarySearchTree(10);
bst.left = new BinarySearchTree(2);
bst.left.left = new BinarySearchTree(1);
bst.left.right = new BinarySearchTree(3);
bst.left.right.right = new BinarySearchTree(4);

const bstSum = (root) => {
  // recursive divid and concuqer
  if (!root) return 0;
  return bstSum(root.left) + bstSum(root.right) + root.value;

  // // // DFS preorder
  // if (!root) return sum;
  // sum += root.value;
  // const leftSum = bstSum(root.left, sum);
  // const totalSum = bstSum(root.right, leftSum);
  // return totalSum;

  // // BFS
  // let total = 0;
  // const queue = [root];
  // while ((el = queue.shift())) {
  //   total += el.value;
  //   if (el.left) queue.push(el.left);
  //   if (el.right) queue.push(el.right);
  // }
  // return total;
};

console.log(bstSum(bst));

/*

Extension:
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
  // define the queues
  const queue1 = [root];
  const queue2 = [];
  // traverse the tree post-order
  while (queue1.length > 0) {
    const el = queue1.shift();
    if (el.right) queue1.push(el.right);
    if (el.left) queue1.push(el.left);
    queue2.push(el);
  }

  console.log(queue2);
  // // add to tree reversely
  // while(queue2.length > 0) {
  //   const el = queue2.shift();
  //   // if el is equal to the root continue
  //   if (el === root) continue;
  //   if ()

  // }

  const addReverse = (value) => {};
};

module.exports = { BinarySearchTree, bstSum, bstReverse };
