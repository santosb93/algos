/**
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // use binary search to find the row that could possibly return the target
  const findRow = () => {
    let left = 0,
      right = matrix.length - 1;
    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);
      if (matrix[mid][0] < target) left = mid;
      else if (matrix[mid][matrix[mid].length - 1] > target) right = mid;
      else left = mid;
    }
    const resIndex =
      matrix[left][0] <= target &&
      matrix[left][matrix[left].length - 1] >= target
        ? left
        : right;
    return matrix[resIndex];
  };
  // use binary search to find the target in the row
  const findTarget = (row) => {
    let left = 0;
    right = row.length - 1;
    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);
      if (row[mid] < target) left = mid;
      else if (row[mid] > target) right = mid;
      else left = mid;
    }
    return row[left] === target || row[right] === target;
  };
  return findTarget(findRow());
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
