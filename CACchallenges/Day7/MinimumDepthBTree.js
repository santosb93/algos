/**
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  // create a queue
  const queue = [];
  // create a variable nodes
  let nodes = 1;
  queue.push(root);
  // iterate while queue.length
  while (queue.length) {
    const depth = queue.length;
    // iterate through the queue length
    for (let i = 0; i < depth; i++) {
      // shift queue assign to a variable
      const curr = queue.shift();
      // check to see if we reached a leaf
      if (!curr.left && !curr.right) return nodes;
      // if curr.left is truthy add to queue
      if (curr.left) queue.push(curr.left);
      // else if curr.right is truthy add to queue
      if (curr.right) queue.push(curr.right);
    }
    // increment nodes
    nodes++;
  }
};

const testRoot = new TreeNode(3);
testRoot.left = new TreeNode(9);
testRoot.right = new TreeNode(20);
testRoot.right.left = new TreeNode(15);
testRoot.right.right = new TreeNode(7);

console.log(minDepth(testRoot));
