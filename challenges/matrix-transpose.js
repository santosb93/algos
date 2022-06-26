/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/

const matrixTranspose = (matrix) => {
  if (matrix.length === 0) return [...matrix];
  const newMatrix = [];
  // switch j to i
  for (let j = 0; j < matrix[0].length; j++) {
    const row = [];
    for (let i = 0; i < matrix.length; i++) {
      row.push(matrix[i][j]);
    }
    newMatrix.push(row);
  }
  return newMatrix;
};
const twoDimArray = [
  ['fred', 'barney'],
  [30, 40],
  [true, false],
];

/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/

const matrixRotate = (matrix) => {
  if (!matrix.length) return matrix;
  if (matrix.length !== matrix[0].length) return;
  let left = 0,
    right = matrix.length - 1;
  while (left < right) {
    for (let i = left; i < right; i++) {
      // store topRight
      const t1 = matrix[left + i][right];
      // assign topRight the value of topLeft
      matrix[left + i][right] = matrix[left][left + i];
      //store bottomRight
      const t2 = matrix[right][right - i];
      // assign bottomRight the value of t1
      matrix[right][right - i] = t1;
      // store bottomLeft
      const t3 = matrix[right - i][left];
      // assign bottomLeft t2
      matrix[right - i][left] = t2;
      // assign top left to t3
      matrix[left][left + i] = t3;
    }
    left++;
    right--;
  }
  return matrix;
};
// const matrix = [
//   [0, 1, 2, 3],
//   [4, 5, 6, 7],
//   [8, 9, 10, 11],
//   [12, 13, 14, 15],
// ];
// matrixRotate(matrix);
// console.log(matrix);

module.exports = { matrixTranspose, matrixRotate };
