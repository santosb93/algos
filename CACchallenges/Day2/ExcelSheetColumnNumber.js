/**
 * Given a string columnTitle that represents the column title 
 * as appears in an Excel sheet, return its corresponding column number.
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 *
 * Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  const base = 26;
  let result = 0;
  let exp = 0;
  // iterate through until the last
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle.charCodeAt(i) - 'A'.charCodeAt(i) + 1) * base ** exp;
    exp++;
  }
  return result;
};
