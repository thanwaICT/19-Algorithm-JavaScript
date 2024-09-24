// การค้นหาแบบกว้าง
function bfs(graph, start) {
  const visited = new Set(); // Set to keep track of visited nodes
  const queue = [start]; // Initialize the queue with the starting node

  while (queue.length > 0) {
    const vertex = queue.shift(); // Dequeue the first element

    if (!visited.has(vertex)) {
      visited.add(vertex); // Mark the vertex as visited

      // Add unvisited adjacent nodes to the queue
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return visited; // Return the visited nodes
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"]
};

const startNode = "A";
const visitedNodes = bfs(graph, startNode);

console.log("Visited Nodes:", Array.from(visitedNodes));
