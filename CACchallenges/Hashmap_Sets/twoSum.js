/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//use reduce to iterate through the numbers
//the accumulator of reduce will contain a mapping of each number the reducer has iterated through
//the mapper will have the number as its key and its index as its value
//at each iteration we will check if target - thisNum is in the mapper
//if it is in the mapper it will return the current index i and the value of the key into the 2nd accumulator index

var twoSum = function (nums, target) {
  // define a cache
  const cache = {};
  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    // check if nums - target exists in the cache
    // return an array with the index of the compliment and the current element
    if (cache.hasOwnProperty(target - nums[i]))
      return [cache[target - nums[i]], i];
    // add the current element as key with index as value to the cache
    cache[nums[i]] = i;
  }
};
