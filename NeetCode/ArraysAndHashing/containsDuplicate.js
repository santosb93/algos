/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
Accepted
1,702,072
Submissions

 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // create a cache to store elements
  const cache = {};
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) return true;
    cache[nums[i]] = 1;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
