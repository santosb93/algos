/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // assign left, and right the beginning and end indices
  let left = 0,
    right = nums.length - 1;
  // check if left and right are already at the target
  if (nums[left] === target) return 0;
  if (nums[right] === target) return nums.length - 1;
  while (left + 1 < right) {
    // calculate mid
    const mid = Math.floor((left + right) / 2);
    // if nums[mid] is less than target move left to mid
    if (nums[mid] < target) left = mid;
    if (nums[mid] > target) right = mid;
    if (nums[mid] === target) return mid;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
