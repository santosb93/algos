/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 *
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // create two pointers initiliazed to head
  let left = head,
    right = head;
  // create a counter
  let counter = 0;
  // iterate until right === null
  while (right) {
    // increment counter
    // right = right.next
    counter++;
    right = right.next;
  }
  while (left) {
    if (counter === k) return left.value;
    left = left.next;
    counter--;
  }
}

//Do not delete!
module.exports = { Node, kthToLastNode };
