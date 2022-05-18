class Solution {
  /**
   * @param s: a string
   * @return: a string after capitalizes the first letter
   */
  capitalizesFirst(s) {
    return s
      .split(' ')
      .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1))
      .join(' ');
  }
}

const test = new Solution();
console.log(test.capitalizesFirst('hello there'));
