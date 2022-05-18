/** Description
Given a string s with a-z. We want to change s into a palindrome with following operations:

1. change 'z' to 'y';
2. change 'y' to 'x';
3. change 'x' to 'w';
................
24. change 'c' to 'b';
25. change 'b' to 'a';
Returns the number of operations needed to change s to a palindrome at least.

Example
Example 1:

Input: "abc"
Output: 2
Explanation: 
  1. Change 'c' to 'b': "abb"
  2. Change the last 'b' to 'a': "aba"
Example 2:

Input: "abcd"
Output: 4
**/

class Solution {
  /**
   * @param s: the string s
   * @return: the number of operations at least
   */
  numberOfOperations(s) {
    let numOperations = 0;
    // iterate through the string
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i])
        numOperations += Math.abs(
          s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i)
        );
    }
    return numOperations;
  }
}

const test = new Solution();
console.log(test.numberOfOperations('abc'));
console.log(test.numberOfOperations('abcd'));
