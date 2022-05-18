/**
 * Given an input string, reverse the string word by word.
 * ex: s = 'the sky is blue'
 * output 'blue is sky the'
 */
class Solution {
  /**
   * @param s: A string
   * @return: A string
   */
  reverseWords(s) {
    return s
      .split(' ')
      .filter((el) => el !== '')
      .reverse()
      .join(' ');
  }
}

const test = new Solution();
console.log(
  test.reverseWords(
    "  Life  doesn't  always    give     us  the       joys we want."
  )
);
