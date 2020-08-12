const Graph = require('./graph');

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log('Graph:', g);

function dfsRecursive(graph, start) {
	const results = [];
	const visited = {};

	(function dfs(vertex) {
		// if (!vertex) return;

		visited[vertex] = true;
		results.push(vertex);

		graph.adjacencyList[vertex].forEach(v => {
			if (!visited[v]) dfs(v);
		});
	})(start);

	console.log('Visited:', visited);

	return results;
}

console.log(dfsRecursive(g, 'A'));
