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

	removeEdge(vertex1, vertex2) {
		if (
			this.adjacencyList[vertex1] &&
			this.adjacencyList[vertex2]
		) {
			this.adjacencyList[vertex1] = this.adjacencyList[
				vertex1
			].filter(v => v !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[
				vertex2
			].filter(v => v !== vertex1);
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
console.log('----- REMOVING -----');
g.addVertex('Dallas');
g.addVertex('Philly');
g.addEdge('San Fran', 'Philly');
g.addVertex('Shanghai');
g.addEdge('Tokyo', 'Shanghai');
console.log(g);
g.removeEdge('San Fran', 'Tokyo');
console.log(g);
