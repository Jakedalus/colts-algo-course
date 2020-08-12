const { Graph } = require('./graph');

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

console.log('--- Recursive ---');

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

console.log('--- Iterative ---');

function dfsIterative(graph, start) {
	const stack = [ start ];
	const results = [];
	const visited = {};
	let currentVertex;

	while (stack.length) {
		// console.log(stack);
		currentVertex = stack.pop();
		if (!visited[currentVertex]) {
			visited[currentVertex] = true;
			results.push(currentVertex);
			// graph.adjacencyList[currentVertex].forEach(v =>
			// 	stack.push(v)
			// );
			stack.push(...graph.adjacencyList[currentVertex]);
		}
	}

	console.log('Visited:', visited);

	return results;
}

console.log(dfsIterative(g, 'A'));
