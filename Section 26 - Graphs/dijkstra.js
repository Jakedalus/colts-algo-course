const { WeightedGraph } = require('./graph');
const PriorityQueue = require('../Section 24 - Heaps/priorityQueue');

function dijkstra(graph, start, end) {
	const distances = {};
	const queue = new PriorityQueue();
	const previous = {};

	distances[start] = 0;
	queue.enqueue(start, 0);

	const vertices = Object.keys(graph.adjacencyList);

	for (let i = 1; i < vertices.length; i++) {
		let vertex = vertices[i];
		distances[vertex] = Infinity;
		queue.enqueue(vertex, Infinity);
		previous[vertex] = null;
	}

	console.log('====');
	console.log(distances, queue, previous);
	console.log('====');

	while (queue.values.length) {
		let currentVertex = queue.dequeue().val;
		if (currentVertex === end)
			return { previous, distances };

		console.log('************');
		console.log('currentVertex:', currentVertex);
		console.log('************');

		console.log(
			'adjacencyList:',
			graph.adjacencyList[currentVertex]
		);

		for (let adjacent of graph.adjacencyList[
			currentVertex
		]) {
			console.log('--- Adjacent ---', adjacent);
			let prev = currentVertex;
			console.log('prev:', prev);
			let distance = adjacent.weight;
			while (prev) {
				distance += distances[prev];
				prev = previous[prev];
			}
			console.log('distance:', distance);
			console.log(
				'distances[adjacent.node]:',
				distances[adjacent.node]
			);
			if (distance < distances[adjacent.node]) {
				console.log('...updating!', adjacent.node);
				distances[adjacent.node] = distance;
				previous[adjacent.node] = currentVertex;
				queue.enqueue(adjacent.node, distance);
			}
		}

		console.log('====');
		console.log(distances, queue, previous);
		console.log('====');

		// currentVertex = queue.dequeue().val;
		// if (currentVertex === end) return { previous, distances };

		// console.log('currentVertex:', currentVertex);

		// console.log(
		// 	'adjacencyList:',
		// 	graph.adjacencyList[currentVertex]
		// );

		// for (let adjacent of graph.adjacencyList[currentVertex]) {
		// 	let prev = previous[currentVertex];
		// 	console.log('--- Adjacent ---', adjacent);
		// 	console.log('prev:', prev);
		// 	let distance = adjacent.weight;
		// 	while (prev) {
		// 		distance += distances[prev];
		// 		prev = previous[prev];
		// 	}
		// 	console.log('distance:', distance);
		// 	console.log(
		// 		'distances[currentVertex]:',
		// 		distances[currentVertex]
		// 	);
		// 	if (distance < distances[currentVertex]) {
		// 		console.log('...updating!', adjacent.node);
		// 		distances[adjacent.node] = distance;
		// 		previous[adjacent.node] = currentVertex;
		// 		queue.enqueue(adjacent.node, distance);
		// 	}
		// }

		// console.log('====');
		// console.log(distances, queue, previous);
		// console.log('====');
	}
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

console.log('wg:', wg.adjacencyList);
console.log('=========');

console.log(dijkstra(wg, 'A', 'E'));
