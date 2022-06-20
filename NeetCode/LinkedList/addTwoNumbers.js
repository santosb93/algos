/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // define a carry
  let carry = 0;
  let currL1 = l1;
  let currL2 = l2;
  let head = null;
  let newCurr = null;
  while (currL1 || currL2 || carry) {
    let sum = 0;
    // add the value from L1 to sum
    if (currL1) {
      sum += currL1.val;
      currL1 = currL1.next;
    }
    // add the value from L2 to sum
    if (currL2) {
      sum += currL2.val;
      currL2 = currL2.next;
    }
    // add the carry if it exists
    if (carry) {
      sum += carry;
    }
    carry = Math.floor(sum / 10);
    //create a new LL
    const newNode = new ListNode(sum % 10);
    if (!head) {
      head = newNode;
      newCurr = newNode;
    } else {
      newCurr.next = newNode;
      newCurr = newCurr.next;
    }
  }
  return head;
};

// // check if l1 and l2 are truthy
// if (!l1 || !l2) return [];
// // define a function this function will take in the LL
// const convertLL = (ll) => {
//   // define a variable string
//   let res = '';
//   // iterate through the list
//   while (ll) {
//     // reverse concat the str with the val
//     res = ll.val + res;
//     ll = ll.next;
//   }
//   // return the number
//   return parseInt(res);
// };
// // call the function passing in L1 and L2
// const res = convertLL(l1) + convertLL(l2);
// // convert the number to a string, then split into an array, then reverse into a LL
// let head = undefined;
// let curr = undefined;
// res
//   .toString()
//   .split('')
//   .reverse()
//   .forEach((el) => {
//     if (!head) {
//       head = new ListNode(el);
//       curr = head;
//     } else {
//       curr.next = new ListNode(el);
//       curr = curr.next;
//     }
//   });
// return head;
const l1_3 = new ListNode(3);
const l1_4 = new ListNode(4, l1_3);
const l1_2 = new ListNode(2, l1_4);

const l2_4 = new ListNode(4);
const l2_6 = new ListNode(6, l2_4);
const l2_5 = new ListNode(5, l2_6);

console.log(l1_2);
console.log(l2_5);

console.log(addTwoNumbers(l1_2, l2_5));
