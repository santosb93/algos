/**
 * Given a binary tree, return the preorder traversal of its nodes' values.

Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)


The first data is the root node, followed by the value of the left and right son nodes, and "#" indicates that there is no child node.
The number of nodes does not exceed 20.
Example
Example 1:

Input:

binary tree = {1,2,3}
Output:

[1,2,3]
Explanation:

      1
    /   \
  2       3
It will be serialized as {1,2,3} preorder traversal

Example 2:

Input:

binary tree = {1,#,2,3}
Output:

[1,2,3]
Explanation:

     1
       \
        2
       /
      3
It will be serialized as {1,#,2,3} preorder traversal
 */

/**
 * Definition of TreeNode:
 * class TreeNode {
 *   constructor(val, left=null, right=null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */

class Solution {
  /**
   * @param root: A Tree
   * @return: Preorder in ArrayList which contains node values.
   */
  preorderTraversal(root) {
    if (!root) return [];
    const leftRes = this.preorderTraversal(root.left);
    const rightRes = this.preorderTraversal(root.right);
    return [root.val, ...leftRes, ...rightRes];
  }
}
