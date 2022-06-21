/**
 * Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each noden in the graph contains a value (it) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return;
  const visited = {};
  const traverse = (curr) => {
    visited[curr.val] = new Node(curr.val);
    curr.neighbors.forEach((neighbor) => {
      if (visited[neighbor.val]) {
        visited[curr.val].neighbors.push(visited[neighbor.val]);
      } else {
        visited[curr.val].neighbors.push(traverse(neighbor));
      }
    });
    return visited[curr.val];
  };
  traverse(node);
  return visited[node.val];
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node3, node1);
console.log(cloneGraph(node1));

/**
 * BFS
 */

/**
 *   if (!node) return;
  // create a cache to keep track of nodes visited
  const cache = {};
  // create a queue
  const queue = [node];
  cache[node.val] = new Node(node.val);
  // traverse the graph using BFS
  while (queue.length) {
    const curr = queue.shift();
    curr.neighbors.forEach((neighbor) => {
      if (!cache[neighbor.val]) {
        cache[neighbor.val] = new Node(neighbor.val);
        queue.push(neighbor);
      }
      const cloned = cache[curr.val];
      const clonedNeighbor = cache[neighbor.val];
      cloned.neighbors.push(clonedNeighbor);
    });
  }
  return cache[node.val];
 */
