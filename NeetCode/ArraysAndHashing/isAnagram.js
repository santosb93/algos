/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // create a cache for s
  const cache = {};
  // itereate through s and add to the cache storing the number of times it appears
  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = (cache[s[i]] || 0) + 1;
  }
  // iterate through t and check the cache
  for (let i = 0; i < t.length; i++) {
    // on each check we want to decrement the value of the cache
    if (cache.hasOwnProperty(t[i])) cache[t[i]] = cache[t[i]] - 1;
    // if it is negative or does not exist return false
    if (cache[t[i]] < 0 || !cache.hasOwnProperty(t[i])) return false;
  }
  // return true
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
