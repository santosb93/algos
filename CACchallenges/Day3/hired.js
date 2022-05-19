const solution = (maze, startRow, startCol, destRow, destCol) => {
  const checkSides = (row, col) => {
    // check top
    if (row > 0) {
      if (maze[row - 1][col] === 0) return [row - 1, col];
    }
    // check right
    if (col < maze[0].length - 1) {
      if (maze[row][col + 1] === 0) {
        return [row, col + 1];
      }
    }
    // check bottom
    if (row < maze.length - 1) {
      if (maze[row + 1][col] === 0) {
        return [row + 1, col];
      }
    }
    // check left
    if (col > 0) {
      if (maze[row][col - 1] === 0) {
        return [row, col - 1];
      }
    }
    return [];
  };
  // if the maze start value is 1 return false;
  if (maze[startRow][startCol] === 1) return false;
  // make the current move a *
  maze[startRow][startCol] = '*';
  // check all sides of the current position
  const move = checkSides(startRow, startCol);
  // if checkSides returns an empty move there is no valid move
  if (move.length === 0) return false;
  // check if the move is at the destination
  if (move[0] === destRow && move[1] === destCol) return true;
  // return the recursive call
  return solution(maze, move[0], move[1], destRow, destCol);
};

const maze = [
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
];
console.log(solution(maze, 0, 1, 3, 4));
