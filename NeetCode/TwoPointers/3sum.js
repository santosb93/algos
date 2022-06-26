/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort();
  const result = [];
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // skip duplicates
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    // perform two sum on the rest of the array
    let left = i + 1;
    let right = sortedNums.length - 1;
    while (left !== right) {
      if (sortedNums[i] + sortedNums[left] + sortedNums[right] < 0) left++;
      else if (sortedNums[i] + sortedNums[left] + sortedNums[right] > 0)
        right--;
      else {
        console.log('found one');
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        while (sortedNums[left] === sortedNums[left - 1] && left !== right) {
          left++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
