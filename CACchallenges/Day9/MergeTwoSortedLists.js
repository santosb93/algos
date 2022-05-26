/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let curr = new ListNode();
  const head = curr;
  while (list1 && list2) {
    // get the smallest of the two lists add to curr
    if (list1.val < list2.val) {
      curr.next = new ListNode(list1.val);
      // assign list1 the next list item
      list1 = list1.next;
    } else {
      curr.next = new ListNode(list2.val);
      // assign list2 the next list item
      list2 = list2.next;
    }
    curr = curr.next;
  }

  // add remaining list items
  if (list1) curr.next = list1;
  if (list2) curr.next = list2;

  return head.next;
};

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

const node4 = new ListNode(1);
const node5 = new ListNode(3);
const node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

console.log(mergeTwoLists(node1, node4));
