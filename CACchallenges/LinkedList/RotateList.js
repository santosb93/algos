/**
 * Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head;
  let newTail = null,
    newHead = null,
    curr = head,
    tail = null,
    length = 0;

  // iterate to find the length of the LL, get the last node
  while (curr) {
    length++;
    if (!curr.next) tail = curr;
    curr = curr.next;
  }

  // connect the last node to the head
  tail.next = head;
  // iterate through the linked list to length - (k % length times) node
  // this node will be the newTail
  for (let i = 0; i < length - (k % length); i++) {
    newTail = head;
    head = head.next;
  }
  // assign newHead to newTail.next
  // assign newTail.next to null
  newHead = newTail.next;
  newTail.next = null;
  return newHead;
};

const node1 = new ListNode(0);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
node1.next = node2;
node2.next = node3;

let result = rotateRight(node1, 4);
while (result) {
  console.log(result.val);
  result = result.next;
}
