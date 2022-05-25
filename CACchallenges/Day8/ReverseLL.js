/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // create two pointers
  let prev = null,
    curr = head;
  // iterate through the linked list
  while (curr) {
    // save currents next pointer
    const temp = curr.next;
    // assign current.next to prev
    curr.next = prev;
    // assign prev to curr
    prev = curr;
    // assign current to the saved pointer
    curr = temp;
  }
  return prev;
};
