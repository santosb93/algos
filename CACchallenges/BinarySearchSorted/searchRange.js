/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

/**
 * /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findOuter = (direction) => {
    let left = 0,
      right = nums.length - 1;
    while (left + 1 < right) {
      // calculate mid
      let mid = Math.floor((left + right) / 2);
      // if nums[mid] < target move left to mid
      if (nums[mid] < target) left = mid;
      // if nums[mid] > target move right to mid
      else if (nums[mid] > target) right = mid;
      // otherwise nums === mid
      // if direction is left keep moving the right to mid
      // otherwise keep moving left to mid
      else {
        if (direction === 'left') right = mid;
        else left = mid;
      }
    }

    // if nums[left] && nums[right] !== target return -1
    if (nums[left] !== target && nums[right] !== target) return -1;

    // if direction is left check left first
    if (direction == 'left') return nums[left] === target ? left : right;
    // if direction is right, check right first
    return nums[right] === target ? right : left;
  };
  return [findOuter('left'), findOuter('right')];
};

/**
 * O(n) approach
 */
// let left = 0,
//   right = nums.length - 1;
// // iterate until pointers are next to each other or till mid === target
// while (left + 1 < right) {
//   const mid = Math.floor((left + right) / 2);
//   if (nums[mid] < target) {
//     left = mid;
//     continue;
//   } else if (nums[mid] > target) {
//     right = mid;
//     continue;
//   }
//   left = right = mid;
// }
// // if both nums at left and right dont equal target return [-1,-1]
// if (nums[left] !== target && nums[right] !== target) return [-1, -1];
// // iterate left and right outward till they dont equal target
// while (nums[left] === target || nums[right] === target) {
//   if (nums[left] === target) left--;
//   if (nums[right] === target) right++;
// }
// return [left + 1, right - 1];

// input full of the target
console.log('res', searchRange([8, 8, 8, 8, 8, 8], 8));
//
console.log('res', searchRange([5, 7, 7, 8, 8, 10], 8));
console.log('res', searchRange([5, 7, 7, 8, 8, 10], 6));
console.log('res', searchRange([5, 7, 7, 8, 8, 10], 5));
