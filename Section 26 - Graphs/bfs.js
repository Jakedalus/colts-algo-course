const Graph = require('./graph');
const Queue = require('../Section 21 - Stacks and Queues/queue');

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

function bfs(graph, start) {
	const queue = new Queue();
	const visited = {};
	const results = [];
	let currentVertex;

	queue.enqueue(start);

	while (queue.size) {
		// console.log(queue);
		currentVertex = queue.dequeue();
		results.push(currentVertex);
		graph.adjacencyList[currentVertex].forEach(v => {
			if (!visited[v]) {
				visited[v] = true;
				queue.enqueue(v);
			}
		});
	}

	return results;
}

console.log(bfs(g, 'A'));
