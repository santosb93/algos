/**
 * An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel. The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally and vertically. Given the location (x, y) of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.

Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)


Example
Example 1:

Input：["0010","0110","0100"]，x=0，y=2
Output：6
Explanation：
The upper left coordinate of the matrix is (0,1), and the lower right coordinate is (2,2).
Example 2:

Input：["1110","1100","0000","0000"], x = 0, y = 1
['1110'
 '1100'
 '0000'
 '0000']
Output：6
Explanation：
The upper left coordinate of the matrix is (0, 0), and the lower right coordinate is (1,2).
 */

export class Solution {
  /**
   * @param image: a binary matrix with '0' and '1'
   * @param x: the location of one of the black pixels
   * @param y: the location of one of the black pixels
   * @return: an integer
   */
  minArea(image, x, y) {
    let leftBound, rightBound, topBound, botBound;
    const findTop = () => {
      let left = 0,
        right = x;
      while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[mid].split('').includes('1')) leftBound = mid;
        else left = mid;
      }
    };
  }
}
