/**
 * Description
Given a binary tree, return all root-to-leaf paths.

Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)


Example
Example 1:

Input：{1,2,3,#,5}
Output：["1->2->5","1->3"]
Explanation：
   1
 /   \
2     3
 \
  5
Example 2:

Input：{1,2}
Output：["1->2"]
Explanation：
   1
 /   
2     
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
   * @param root: the root of the binary tree
   * @return: all root-to-leaf paths
   *          we will sort your return value in output
   */
  binaryTreePaths(root) {
    // write your code here
    // if root is falsy return an empty array
    if (!root) return [];
    // if leaf, return the root.val
    if (!root.left && !root.right) return [`${root.val}`];
    // get the left result
    const leftResult = this.binaryTreePaths(root.left);
    // get the right result
    const rightResult = this.binaryTreePaths(root.right);
    // return the contents of the left result and the right result
    return [
      ...leftResult.map((el) => root.val + '->' + el),
      ...rightResult.map((el) => root.val + '->' + el),
    ];
  }
}
