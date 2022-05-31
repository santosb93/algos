/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root, depth = 0) {
  // basecase: if root is falsy return
  if (!root) return depth;
  // check left
  const leftDepth = maxDepth(root.left, depth);
  // check right
  const rightDepth = maxDepth(root.right, depth);
  // return the max of the two plus 1
  return 1 + Math.max(leftDepth, rightDepth);
};
