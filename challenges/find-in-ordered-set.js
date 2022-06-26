/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

// iterate through half the array
// check beginning of array
// if element is > than target return false
// else if element === return true
// check end of array
// if element < target return true
// else if element ==== target return true

const findInOrderedSet = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const res = array[mid];
    if (res < target) left = mid;
    else if (res > target) right = mid;
    else return true;
  }
  return array[left] === target || array[right] === target;
};

/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
  const matrix = [
    [-3, -1,  2,  4,  5],
    [ 6,  7,  8, 13, 37],   
    [41, 49, 50, 61, 75]
  ];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

*/

const findIn2dMatrix = (matrix, target) => {
  const convert = (index) => {
    return {
      row: Math.floor(index / matrix[0].length),
      col: index % matrix[0].length,
    };
  };
  let left = 0,
    right = matrix.length * matrix[0].length;
  right--;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    const { row, col } = convert(mid);
    const res = matrix[row][col];
    if (res < target) left = mid;
    else if (res > target) right = mid;
    else return true;
  }
  const leftRes = convert(left);
  const rightRes = convert(right);
  return (
    matrix[leftRes.row][leftRes.col] === target ||
    matrix[rightRes.row][rightRes.col] === target
  );
};
const matrix = [
  [-3, -1, 2, 4, 5],
  [6, 7, 8, 13, 37],
  [41, 49, 50, 61, 75],
];
console.log(findIn2dMatrix(matrix));

module.exports = { findInOrderedSet, findIn2dMatrix };
