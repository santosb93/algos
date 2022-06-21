/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  // create a stack
  const stack = [];
  // create a map for pairs
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  // iterate through s
  for (let i = 0; i < s.length; i++) {
    // if s is in the map, add to stack
    if (pairs[s[i]]) stack.push(s[i]);
    else if (pairs[stack.pop()] !== s[i]) return false;
  }
  return stack.length === 0;
};
