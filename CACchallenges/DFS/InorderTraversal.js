/**
 * Example
Example 1:

Input:

binary tree = {1,2,3}
Output:

[2,1,3]
Explanation:

      1
    /   \
  2       3
It will be serialized as {1,2,3} inorder traversal

Example 2:

Input:

binary tree = {1,#,2,3}
Output:

[1,3,2]
Explanation:

     1
       \
        2
       /
      3
It will be serialized as {1,#,2,3} inorder traversal
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
   * @return: Inorder in ArrayList which contains node values.
   */
  inorderTraversal(root) {
    // if root is falsy return an empty array
    if (!root) return [];
    // get the left answer
    const leftRes = this.inorderTraversal(root.left);
    // get the right answer
    const rightRes = this.inorderTraversal(root.right);
    // return left , root ,right
    return [...leftRes, root.val, ...rightRes];
  }
}
