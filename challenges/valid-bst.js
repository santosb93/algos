/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const validBST = (tree, min = null, max = null) => {
  if (!tree) return true;
  if (max !== null && tree.value > max) {
    return false;
  }
  if (min !== null && tree.value < min) {
    return false;
  }
  const leftSide = validBST(tree.left, min, tree.value);
  const rightSide = validBST(tree.right, tree.value, max);
  return leftSide && rightSide;
};

module.exports = { BinaryTree, validBST };
