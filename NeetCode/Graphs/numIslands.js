/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') continue;
      res++;
      searchAdjacent(i, j);
    }
  }
  function searchAdjacent(i, j) {
    if (i < 0 || j < 0 || i === grid.length || j === grid[0].length) return;
    if (grid[i][j] === '0') return;
    grid[i][j] = '0';
    searchAdjacent(i + 1, j);
    searchAdjacent(i - 1, j);
    searchAdjacent(i, j - 1);
    searchAdjacent(i, j + 1);
  }
  return res;
};
grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid));

/**
 *       const H = grid.length;
  const W = grid[0].length;
  let count = 0;
  
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (grid[r][c] === '0') continue;
      
      count++;
      dfs(r, c);
    }
  }
  return count;
  
  function dfs(r, c) {
    if (r < 0 || c < 0 || r === H || c === W) return;
    if (grid[r][c] === '0') return;
    
    grid[r][c] = '0';
    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }
    
 */

/**
 * BFS approach
 *   let num = 0;
  let r = grid.length;
  let c = grid[0].length;
  // iterate through each element of the grid,
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') continue;
      num++;
      const queue = [[i, j]];
      while (queue.length) {
        console.log('queue', queue);
        const [i, j] = queue.shift();
        console.log(i, j);
        grid[i][j] = '0';
        if (i - 1 >= 0) {
          if (grid[i - 1][j] === '1') {
            queue.push([i - 1, j]);
          }
        }
        if (i + 1 < grid.length) {
          if (grid[i + 1][j] === '1') queue.push([i + 1, j]);
        }
        if (j - 1 >= 0) {
          if (grid[i][j - 1] === '1') queue.push([i, j - 1]);
        }
        if (j + 1 < grid[0].length) {
          if (grid[i][j + 1] === '1') queue.push([i, j + 1]);
        }
      }
    }
  }
  return num;
 */
