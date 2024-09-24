// การค้นหาแบบลึก
function dfs(graph, start, visited = new Set()) {
  // Add the starting node to the visited set
  visited.add(start);
  // Iterate over each adjacent node
  for (const next of graph[start]) {
    if (!visited.has(next)) {
      dfs(graph, next, visited); // Recursively visit the node
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
const visitedNodes = dfs(graph, startNode);

console.log("Visited Nodes:", Array.from(visitedNodes));
