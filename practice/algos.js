/**
 *  returns true if string is a palindrome (the string is the same forward and backwards).
 *  The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */

// llamamall
// ^       ^
function palindrome(string) {
  // remove characters that are not letters
  string = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */
// whole number greater than 1
// a prime number can be divided by itself and 1
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
/**
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
 * performance difference.
 */

function nthFibonacci(n) {
  if (n <= 1) return n;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
  const options = ['rock', 'paper', 'scissors'];
  const result = [];
  if (num === 0) return result;
  function play(hand, gameNumber) {
    for (let i = 0; i < options.length; i++) {
      hand.push(options[i]);
      if (gameNumber === num) {
        result.push(hand.slice());
      } else play(hand, gameNumber + 1);
    }
    hand.pop();
  }
  play([], num);
  return result;
}

console.log(rockPaperScissors(2));
