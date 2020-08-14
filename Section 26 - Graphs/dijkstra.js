const { WeightedGraph } = require('./graph');
const PriorityQueue = require('../Section 24 - Heaps/priorityQueue');

function dijkstra(graph, start, end) {
	const distances = {};
	const queue = new PriorityQueue();
	const previous = {};

	for (let vertex in graph.adjacencyList) {
		distances[vertex] = Infinity;
		queue.enqueue(vertex, Infinity);
		previous[vertex] = null;
	}

	distances[start] = 0;
	queue.enqueue(start, 0);

	console.log(distances, queue, previous);
}

const wg = new WeightedGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);

console.log(dijkstra(wg, 'A', 'E'));
