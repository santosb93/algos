function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

/**
 * 
 * @param {*} root 
 * @param {*} callback 
 */
const bfs = (root, callback) => {
  const queue = [root];
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const curr = queue.shift();
      callback(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
};

/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = (grid) => {
  console.log(grid[1][0]);
  const queue = [[0, 0, 0]];
  while (queue.length) {
    console.log(grid);
    for (let i = 0; i < queue.length; i++) {
      const [r, c, distance] = queue.shift();
      if (grid[r][c] === 2) return distance;
      console.log(grid);
      grid[r][c] = 'V';
      // move down
      if (r + 1 !== grid.length && grid[r + 1][c] !== 1)
        queue.push([r + 1, c, distance + 1]);
      // move up
      if (r - 1 >= 0 && grid[r - 1][c] !== 1)
        queue.push([r - 1, c, distance + 1]);
      // move left
      if (c - 1 >= 0 && grid[r][c - 1] !== 1)
        queue.push([r, c - 1, distance + 1]);
      // move right
      if (c + 1 !== grid[0].length && grid[r][c + 1] !== 1)
        queue.push([r, c + 1, distance + 1]);
    }
  }
  return -1;
};

console.log(
  minimumDistance([
    [0, 0, 1, 1],
    [0, 0, 1, 2],
    [1, 0, 0, 0],
  ])
);

module.exports = { BinarySearchTree, bfs, minimumDistance };
