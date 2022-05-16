/**Given a string, convert it to an integer. 
 * You may assume the string is a valid integer number that can be presented by a signed 32bit integer (-231 ~ 231-1).

Example
Example 1:

	Input:  "123"
	Output: 123
	
	Explanation: 
	return the Integer.

Example 2:
	Input:  "2"
	Output: 2
	
	Explanation: 
	return the Integer. **/

class Solution {
  /**
   * @param target: A string
   * @return: An integer
   */
  stringToInteger(target) {
    // const NEGATIVE_SYMBOL = 45;
    // const ASCII_NUMBER_DIFFERENCE = 48;
    // let isNegative = false;
    // // check target for type string
    // if (typeof target !== 'string') return -1;
    // // create a variable result
    // let result = 0;
    // // iterate through the string, convert to a number and add to result, multiply result by 10
    // for (let i = 0; i < target.length; i++) {
    //   const asciiValue = target.charCodeAt(i);
    //   if (asciiValue === NEGATIVE_SYMBOL) {
    //     isNegative = true;
    //     continue;
    //   }
    //   result += asciiValue - ASCII_NUMBER_DIFFERENCE;
    //   if (i < target.length - 1) result *= 10;
    //   else if (isNegative) {
    //     result *= -1;
    //     isNegative = false;
    //   }
    // }
    // return result;
    const ASCII_NEGATIVE_SYMBOL = 45;
    const ASCII_NUMBER_DIFFERENCE = 48;
    let sign = 1;
    let result = 0;
    if (target[0].charCodeAt(0) === ASCII_NEGATIVE_SYMBOL) sign = -1;
    // iterate through the string, convert to a number and add to result, multiply result by 10
    for (let el in target) {
      if (parseInt(el)) {
        const asciiValue = target[el].charCodeAt(0);
        result += asciiValue - ASCII_NUMBER_DIFFERENCE;
        result *= 10;
      }
    }
    return (result * sign) / 10;
  }
}

const test = new Solution();
console.log(test.stringToInteger('-11'));
// console.log(test.stringToInteger(123));
// console.log(test.stringToInteger('123'));
