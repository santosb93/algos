/**
 * We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

 

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1
 

Constraints:

1 <= n <= 2^31 - 1
1 <= pick <= n
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const pick = 6;
const guess = (n) => {
  if (n > pick) return -1;
  if (n < pick) return 1;
  if (n === pick) return 0;
};
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // let left = 1,
  //   right = n,
  //   mid;
  // if (guess(left) === 0) return left;
  // if (guess(right) === 0) return right;
  // while (left + 1 < right) {
  //   mid = Math.floor((left + right) / 2);
  //   const res = guess(mid);
  //   if (res === -1) right = mid;
  //   else if (res === 1) left = mid;
  //   else if (res === 0) return mid;
  // }
  let left = 1,
    right = n;
  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);
    const res = guess(mid);
    if (res === 0) return mid;
    else if (res === 1) left = mid;
    else right = mid;
  }
  return guess(left) === 0 ? left : right;
};

console.log(guessNumber(10));
