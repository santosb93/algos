/**
 * Description
Write code to remove duplicates from an unsorted linked list, retaining the first occurrence of the node.

Example
Example 1:

Input: 1->2->1->3->3->5->6->3->null
Output: 1->2->3->5->6->null
Example 2:

Input: 2->2->2->2->2->null
Output: 2->null
Challenge
(hard) How would you solve this problem if a temporary buffer is not allowed?
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
   * @param head: The first node of linked list.
   * @return: Head node.
   */
  removeDuplicates(head) {
    // create a cache
    const cache = {};
    // create a dummy Node
    const dummyNode = new ListNode(0);
    // assign the dummy node next the head
    dummyNode.next = head;
    // create a pointer intialized to the dummy node
    let p = dummyNode;
    // iterate through the list while p.next is truthy
    while (p.next) {
      // if it exists in the cache reassign
      if (cache.hasOwnProperty(p.next.val)) {
        p.next = p.next.next;
      } else {
        cache[p.next.val] = true;
        p = p.next;
      }
    }
    return dummyNode.next;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(1);
const node4 = new ListNode(3);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
const test = new Solution();
console.log(test.removeDuplicates(node1));
