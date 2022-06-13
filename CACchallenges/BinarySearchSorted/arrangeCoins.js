/**
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 1,
    right = n;
  // iterate until left is adjacent to right
  while (left + 1 < right) {
    // calculate mid
    const mid = Math.floor((left + right) / 2);
    // calculate res from mid
    const res = ((mid + 1) * mid) / 2;
    if (res < n) left = mid;
    else if (res > n) right = mid;
    else left = mid;
  }
  return left <= ((n + 1) * n) / 2 ? left : right;
};
