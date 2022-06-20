/**
 * 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} curr
 * @return {ListNode}
 */
var reverseList = function (curr) {
  // create two pointers
  let prevNode = null;
  let currNode = curr;
  // iterate through the list assigning curr the prev
  while (currNode) {
    const temp = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = temp;
  }
  return prevNode;
};
