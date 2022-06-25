/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
//     * ( 5 spaces 1 star) i = 1 interation (n - 1) spaces (i stars)
//    ** (4 spaces 2 stars)
//   *** (3 spaces 3 starts)
//  **** (2 spaces 4 star)
// ***** (1 spaces 1 star)
//****** (0 spaces 6 stars)

const drawStairs = (n) => {
  if (n < 0) return '';
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += j <= n - i ? ' ' : '*';
    }
    console.log(row);
  }
};

drawStairs(6);

/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = (n) => {};

module.exports = { drawStairs, drawStar };
