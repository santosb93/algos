/**
 * Given an array of integers temperatures represents the daily temperatures, 
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const monoStack = [];
  const ans = [];
  // iterate through temperatures
  for (let i = 0; i < temperatures.length; i++) {
    // push the el to ans default to 0
    ans.push(0);
    // while stack is not empty and top of stack < temperature[i]
    while (
      monoStack.length > 0 &&
      monoStack[monoStack.length - 1][0] < temperatures[i]
    ) {
      // pop stack, change the ans at the index to the index differences
      const temp = monoStack.pop();
      ans[temp[1]] = i - temp[1];
    }
    monoStack.push([temperatures[i], i]);
  }
  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); //[1,1,4,2,1,1,0,0]
