/**
 * Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // create a cache to store the substrings
  let cache = {};
  // create a left and right pointer to create a window
  let left = 0,
    right = 0;
  let longest = 0;
  // iterate while right is less than s.length
  while (right < s.length) {
    // if element exists in cache it is a repeated element, move left 1 and reset
    if (cache[s[right]]) {
      left++;
      right = left;
      cache = {};
    } else {
      // add to cache increment cache, calculate longest
      cache[s[right]] = 1;
      right++;
      longest = Math.max(longest, right - left);
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcacbcbb'));
