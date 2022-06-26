/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = (str) => {
  if (typeof str !== 'string') return false;
  const cache = {};
  let oneOdd = false;
  for (let i = 0; i < str.length; i++) {
    cache[str[i]] = (cache[str[i]] || 0) + 1;
  }
  const cacheArray = Object.values(cache);
  for (let i = 0; i < cacheArray.length; i++) {
    if (!oneOdd && cacheArray[i] % 2) oneOdd = true;
    else if (cacheArray[i] % 2 === 0) continue;
    else return false;
  }
  return true;
};
console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
/*
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = (str) => {};

module.exports = { permPalin };
