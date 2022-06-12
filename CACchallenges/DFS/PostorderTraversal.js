/**
 * Given a binary tree, return the postorder traversal of its nodes’ values.

Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)


The first data is the root node, followed by the value of the left and right son nodes, and "#" indicates that there is no child node.
The number of nodes does not exceed 20.
Example
Example 1:

Input:

binary tree = {1,2,3}
Output:

[2,3,1]
Explanation:

      1
    /   \
  2       3
It will be serialized to {1,2,3} followed by post-order traversal

Example 2:

Input:

binary tree = {1,#,2,3}
Output:

[3,2,1]
Explanation:

     1
       \
        2
       /
      3
It will be serialized to {1,#,2,3} followed by post-order traversal
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

export class Solution {
  /**
   * @param root: A Tree
   * @return: Postorder in ArrayList which contains node values.
   */
  postorderTraversal(root) {
    if (!root) return [];
    const leftRes = this.postorderTraversal(root.left);
    const rightRes = this.postorderTraversal(root.right);
    return [...leftRes, ...rightRes, root.val];
  }
}
