class Graph {
	// undirected, unweighted graph
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		if (
			this.adjacencyList[vertex1] &&
			this.adjacencyList[vertex2]
		) {
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
		}
	}
}

const g = new Graph();

g.addVertex('Tokyo');
g.addVertex('San Fran');
g.addEdge('Tokyo', 'San Fran');
console.log(g);
console.log('----- ERROR HANDLING -----');
g.addVertex('Tokyo');
console.log(g);
g.addEdge('Tokyo', 'Dallas');
console.log(g);
