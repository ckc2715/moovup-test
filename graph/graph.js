class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode = node => {
    this.adjacencyList.set(node, []);
  };

  addEdge = (origin, destination) => {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(origin);
  };

  showGraph = () => {
    console.log(this.adjacencyList);
  };

  /**
   * 1a. function that returns all the possible paths.
   */
  findAllPaths = (origin, destination) => {
    if (!this.adjacencyList.get(origin) || !this.adjacencyList.get(destination))
      throw new Error("Node not exists.");
    const isVisited = [];
    const pathList = [origin];
    const allPaths = [];
    const dfs = (u, d, localPathList) => {
      if (u === d) {
        allPaths.push([...localPathList]);
        return;
      }
      isVisited[u] = true;
      const adjacencies = this.adjacencyList.get(u);
      for (let adjacency of adjacencies) {
        if (!isVisited[adjacency]) {
          localPathList.push(adjacency);
          dfs(adjacency, d, localPathList);
          localPathList.pop();
        }
      }

      isVisited[u] = false;
    };

    dfs(origin, destination, pathList);
    return allPaths;
  };

  /**
   * 1b. function that returns the least number of hops (shortest path).
   */
  findShortestPath = (start, end) => {
    if (!this.adjacencyList.get(start) || !this.adjacencyList.get(end))
      throw new Error("Node not exists.");
    const queue = [start];
    const isVisited = [];
    const predecessor = [];
    const shortestPath = [];

    isVisited[start] = true;
    while (queue.length > 0) {
      const currentNode = queue.shift();
      const adjacencies = this.adjacencyList.get(currentNode);
      for (let adjacency of adjacencies) {
        if (!isVisited[adjacency]) {
          queue.push(adjacency);
          isVisited[adjacency] = true;
          predecessor[adjacency] = currentNode;
          if (adjacency === end) break;
        }
      }
    }
    for (let at = end; at != null; at = predecessor[at]) {
      shortestPath.push(at);
    }
    shortestPath.reverse();

    if (shortestPath[0] === start) {
      return shortestPath;
    }
    return [];
  };
}

const graph = new Graph();

const nodes = "A B C D E F G H".split(" ");
const edges = [
  ["A", "B"],
  ["A", "D"],
  ["A", "H"],
  ["B", "C"],
  ["B", "D"],
  ["C", "D"],
  ["C", "F"],
  ["D", "E"],
  ["E", "F"],
  ["E", "H"],
  ["F", "G"],
  ["G", "H"]
];

nodes.forEach(graph.addNode);
edges.forEach(edge => graph.addEdge(...edge));
console.log(graph.findAllPaths("A", "H"));
console.log(graph.findShortestPath("A", "H"));
