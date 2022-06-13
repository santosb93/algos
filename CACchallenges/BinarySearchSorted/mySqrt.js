/**
 * Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1

*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // // smallest input is 0 , greatest is (2**31) - 1 (2147483647)
  // // this means greatest sqrt can be 46340
  // let left = 0,
  //   right = x,
  //   mid,
  //   res;
  // if (x === 0) return left;
  // while (left + 1 < right) {
  //   mid = Math.floor((right + left) / 2);
  //   let res = mid ** 2;
  //   if (res < x) left = mid;
  //   if (res > x) right = mid;
  //   if (res === x) break;
  // }
  // return res > x ? mid - 1 : mid;

  /** yankun template */
  let left = 0,
    right = x;
  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);
    const res = mid ** 2;
    if (res < x) left = mid;
    else if (res > x) right = mid;
    else left = mid;
  }
  return right ** 2 <= x ? right : left;
};
