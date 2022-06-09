/**
 * Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.
Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  if (nums.length < 1) return 0;
  // define a cache
  const cache = {};
  // define a variable to hold the number of pairs
  let numPairs = 0;
  // add the first element to the cache with a value of 1
  cache[nums[0]] = 1;
  // iterate through the rest of nums
  for (let i = 1; i < nums.length; i++) {
    // if num[i] +/- k exists in the cache add the value to the number of pairs
    if (cache.hasOwnProperty(nums[i] - k)) {
      numPairs += cache[Math.abs(nums[i] - k)];
    }
    if (cache.hasOwnProperty(nums[i] + k)) {
      numPairs += cache[Math.abs(nums[i] + k)];
    }
    // add the num to cache or increment
    cache[nums[i]] = (cache[nums[i]] || 0) + 1;
  }
  // return numPairs
  return numPairs;
};

console.log(countKDifference([1, 2, 2, 1], 1));
