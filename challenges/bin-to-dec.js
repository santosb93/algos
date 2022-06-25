/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/
//exp:  43210
//     '11111'
// 2^4 + 2^3 + 2^2 + 2^1 + 2^0
// 16 + 8 + 4 + 2 + 1
// 31

/**
 *
 * @param {string} binString
 * @return decimal
 */
function binToDec(binString) {
  if (typeof binString != 'string') return;
  // define a variable res, exp
  let res = 0,
    exp = 0;
  // iterate through the string from the end
  for (let i = binString.length - 1; i >= 0; i--) {
    // if the string elemnt is a 1
    // multiple 2 by the exp
    // add to res
    if (binString[i] === '1') res += 2 ** exp;
    exp++;
  }
  return res;
}

console.log(binToDec('11111'));

module.exports = { binToDec };
