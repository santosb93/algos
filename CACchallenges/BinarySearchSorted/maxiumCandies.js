/**
 * You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.

You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can take at most one pile of candies and some piles of candies may go unused.

Return the maximum number of candies each child can get.

 

Example 1:

Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.
Example 2:

Input: candies = [2,5], k = 11
Output: 0
Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.
 */

// want to split each pile to the maximum amount

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  // trying to find the number of candies such that the each children (k children)
  // recieve the maximum amount of candies of eqaul value
  // use binary search on the number of possible candies with
  // minimum 1 max of 1e7 + 1
  let left = 1,
    right = 1e7 + 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    // use helper function to check validity of mid
    const res = divideIntoPiles(mid);
    if (res < k) right = mid;
    else if (res > k) left = mid;
    else left = mid;
  }
  //divideIntoPiles(left || right) is less than k, not enough candy to split
  if (divideIntoPiles(left) < k || divideIntoPiles(right) === k) return 0;
  // check left first otherwise return right
  return divideIntoPiles(left) >= k ? left : right;

  /**
   * This helper function calculates the number of piles that can be made from
   * the candies given the guessed candy amount (candyAmount)
   * @param {num} candyAmount
   * @returns num
   */
  function divideIntoPiles(candyAmount) {
    let piles = 0;
    for (let i = 0; i < candies.length; i++) {
      const count = candies[i];
      piles += Math.floor(count / candyAmount);
    }
    return piles;
  }
};

console.log(maximumCandies([2, 5], 11));
console.log(maximumCandies([5, 8, 6], 3));
//console.log(maximumCandies([2, 5], 11));
