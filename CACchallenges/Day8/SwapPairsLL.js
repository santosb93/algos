/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
 */

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
var swapPairs = function (head) {
  // if head is falsy return null
  if (!head) return null;
  // create two pointers
  let prev = head;
  let cur = head.next;
  // assign head the 2nd node
  const newHead = prev && cur ? cur : prev;
  // iterate
  while (prev && cur) {
    // store cur's next
    const temp = cur.next;
    // assign curs next to prev
    cur.next = prev;
    // assign previous next to either next next or next
    prev.next = temp && temp.next ? temp.next : temp;
    // move prev to temp
    prev = temp;
    // move cur to temp.next or null if at the end
    cur = temp ? temp.next : temp;
  }
  return newHead;
};
