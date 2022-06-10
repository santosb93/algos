/**
 * Description
Given a list of names, remove the duplicate names. Two name will be treated as the same name if they are equal ignore the case.

Return a list of names without duplication, all names should be in lowercase, and keep the order in the original list.

Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)


You can assume that the name contains only uppercase and lowercase letters and spaces.

Example
Example 1:

Input:["James", "james", "Bill Gates", "bill Gates", "Hello World", "HELLO WORLD", "Helloworld"]


Output:["james", "bill gates", "hello world", "helloworld"]
Example 2:

Input:["cmy","Cmy"]

Output:["cmy"]
 */

class Solution {
  /**
   * @param names: a string array
   * @return: a string array
   *          we will sort your return value in output
   */
  nameDeduplication(names) {
    // create a set
    const filteredNames = new Set();
    // iterate through the names
    for (let i = 0; i < names.length; i++) {
      // add lowercase names to the set
      filteredNames.add(names[i].toLowerCase());
    }
    // return the set as an array
    return Array.from(filteredNames);
  }
}

const test = new Solution();

console.log(
  test.nameDeduplication([
    'James',
    'james',
    'Bill Gates',
    'bill Gates',
    'Hello World',
    'HELLO WORLD',
    'Helloworld',
  ])
);
