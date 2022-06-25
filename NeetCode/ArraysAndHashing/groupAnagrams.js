/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const cache = {};
  strs.forEach((str) => {
    let count = [];
    for (let i = 0; i < 26; i++) {
      count.push(0);
    }
    for (let i = 0; i < str.length; i++) {
      count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    if (cache[count]) cache[count].push(str);
    else cache[count] = [str];
  });
  console.log(cache);
  return Object.values(cache);
};

/**
 * With sorting
 *  // const cache = {};
  // // iterate throguh the array and sort each string by letter
  // const sortedStr = strs.map((str) => {
  //   return str
  //     .split('')
  //     .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  //     .join('');
  // });
  // sortedStr.forEach((el, i) => {
  //   if (cache[el]) cache[el].push(strs[i]);
  //   else cache[el] = [strs[i]];
  // });
  // return Object.values(cache);
 * */

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['ddddddddddg', 'dgggggggggg']));
