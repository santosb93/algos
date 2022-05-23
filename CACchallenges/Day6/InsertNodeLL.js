/*
Description
Insert a node in a sorted linked list.

Example
Example 1:

Input: head = 1->4->6->8->null, val = 5
Output: 1->4->5->6->8->null
Example 2:

Input: head = 1->null, val = 2
Output: 1->2->null
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Definition of ListNode:
 * class ListNode {
 *  constructor(val, next=null) {
 *   this.val = val;
 *   this.next = next;
 *  }
 * }
 */

class Solution {
  /**
   * @param head: The head of linked list.
   * @param val: An integer.
   * @return: The head of new linked list.
   */
  insertNode(head, val) {
    // create a dummyNode
    const dummyNode = new ListNode(0);
    dummyNode.next = head;
    // create a pointer
    let p = dummyNode;
    // loop to get to the spot
    while (p.next && p.next.val < val) {
      p = p.next;
    }
    const temp = p.next;
    p.next = new ListNode(val, temp);
    return dummyNode.next;
  }
}

const node1 = new ListNode(1);
const node4 = new ListNode(4);
const node6 = new ListNode(6);
const node8 = new ListNode(8);

node1.next = node4;
node4.next = node6;
node6.next = node8;

const test = new Solution();
console.log(test.insertNode(node1, 5));
