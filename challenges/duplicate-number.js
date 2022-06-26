/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = (array) => {
  const cache = {};
  for (let i = 0; i < array.length; i++) {
    if (cache[array[i]]) return array[i];
    cache[array[i]] = 1;
  }
};

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to (k + n - 1), with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6

[ 3 , 4 , 5 , 6 , 6 , 7 , 8]
n + 1 numbers 
n = 6
min = 3
max < 9

3 , 4, 5 , 6 , 7, 8 , 

*/

// n is 6
// k is 3
// range 3 to 8
const duplicateNumberAdvanced = (array) => {
  let min = Infinity;
  let max = -Infinity;
  let res = 0;
  const calculate = (min, max) => {
    let res = 0;
    for (let i = min; i <= max; i++) {
      res += i;
    }
    return res;
  };
  for (let i = 0; i < array.length; i++) {
    min = Math.min(min, array[i]);
    max = Math.max(max, array[i]);
    res += array[i];
  }
  return res - calculate(min, max);
};

module.exports = { duplicateNumber, duplicateNumberAdvanced };
