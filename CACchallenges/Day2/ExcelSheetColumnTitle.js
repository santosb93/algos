/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
 */ /**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const BASE = 26;
  const LAST_LETTER = 'Z';
  let result = '';
  while (columnNumber > 0) {
    let rem = columnNumber % BASE;
    result =
      rem === 0
        ? LAST_LETTER + result
        : String.fromCharCode('A'.charCodeAt(0) + rem - 1) + result;
    columnNumber = Math.floor(columnNumber / BASE);
  }
  return result;
};
