const { WeightedGraph } = require('./graph');
const PriorityQueue = require('../Section 24 - Heaps/priorityQueue');

function dijkstra(graph, start, end) {
	const distances = {};
	const queue = new PriorityQueue();
	const previous = {};
	const path = [];
	let smallest;

	// distances[start] = 0;
	// queue.enqueue(start, 0);
	// const vertices = Object.keys(graph.adjacencyList);
	// for (let i = 1; i < vertices.length; i++) {
	// 	let vertex = vertices[i];
	// 	distances[vertex] = Infinity;
	// 	queue.enqueue(vertex, Infinity);
	// 	previous[vertex] = null;
	// }

	for (let vertex in graph.adjacencyList) {
		if (vertex === start) {
			distances[start] = 0;
			queue.enqueue(start, 0);
		} else {
			distances[vertex] = Infinity;
			queue.enqueue(vertex, Infinity);
		}
		previous[vertex] = null;
	}

	console.log('==== Initial State ====');
	console.log(distances, queue, previous);
	console.log('============');

	while (queue.values.length) {
		smallest = queue.dequeue().val;
		if (smallest === end) {
			console.log('--> PATH:', previous, distances);
			while (previous[smallest]) {
				path.unshift(smallest);
				smallest = previous[smallest];
			}
			path.unshift(start);
			break;
		}

		console.log('************');
		console.log('smallest:', smallest);
		console.log('************');

		console.log(
			'adjacencyList:',
			graph.adjacencyList[smallest]
		);

		for (let adjacent of graph.adjacencyList[smallest]) {
			console.log('--- Adjacent ---', adjacent);
			let candidate = distances[smallest] + adjacent.weight;

			if (candidate < distances[adjacent.node]) {
				console.log('...updating!', adjacent.node);
				distances[adjacent.node] = candidate;
				previous[adjacent.node] = smallest;
				queue.enqueue(adjacent.node, candidate);
			}

			//////////
			// let prev = smallest;
			// console.log('prev:', prev);
			// let distance = adjacent.weight;
			// while (prev) {
			// 	distance += distances[prev];
			// 	prev = previous[prev];
			// }
			// console.log('distance:', distance);
			// console.log(
			// 	'distances[adjacent.node]:',
			// 	distances[adjacent.node]
			// );
			/////////
			// if (distance < distances[adjacent.node]) {
			// 	console.log('...updating!', adjacent.node);
			// 	distances[adjacent.node] = distance;
			// 	previous[adjacent.node] = smallest;
			// 	queue.enqueue(adjacent.node, distance);
			// }
			/////////
		}

		console.log('====');
		console.log(distances, queue, previous);
		console.log('====');
	}
	return path;
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

console.log(
	'======================================================'
);
console.log(
	'======================================================'
);
console.log('wg:', wg.adjacencyList);
console.log(
	'======================================================'
);

console.log(dijkstra(wg, 'A', 'E'));
// console.log(dijkstra(wg, 'A', 'C'));
// console.log(dijkstra(wg, 'A', 'F'));
