/*Remove all elements from a linked list of integers that have value val.

Example
Example 1:

Input: head = 1->2->3->3->4->5->3->null, val = 3
Output: 1->2->4->5->null
Example 2:

Input: head = 1->1->null, val = 1
Output: null
*/

/**
 * Definition of ListNode:
 * class ListNode {
 *  constructor(val, next=null) {
 *   this.val = val;
 *   this.next = next;
 *  }
 * }
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param head: a ListNode
   * @param val: An integer
   * @return: a ListNode
   */
  removeElements(head, val) {
    // create a dummy Node
    const dummyNode = new ListNode(0);
    // assign the dummy node next the head
    dummyNode.next = head;
    // create a pointer intialized to the dummy node
    let p = dummyNode;
    // iterate through the list
    while (p) {
      // link p to p.next.next
      if (p.next && p.next.val === val) {
        p.next = p.next.next;
      } else p = p.next;
    }
    return dummyNode.next;
  }
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(3);
const node5 = new ListNode(4);
const node6 = new ListNode(5);
const node7 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
const test = new Solution();
console.log(test.removeElements(node1, 3));
