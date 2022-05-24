/**
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const queue = [];
  const ans = [];
  queue.push(root);
  while (queue.length) {
    const depth = queue.length,
      values = [];
    for (let i = 0; i < depth; i++) {
      const curr = queue.shift();
      values.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    ans.unshift(values);
  }
  return ans;
};

const testRoot = new TreeNode(3);
testRoot.left = new TreeNode(9);
testRoot.right = new TreeNode(20);
testRoot.right.left = new TreeNode(15);
testRoot.right.right = new TreeNode(7);

console.log(levelOrderBottom(testRoot));
