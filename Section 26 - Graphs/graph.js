class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.addVertex[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}
}

const g = new Graph();

g.addVertex('Tokyo');
g.addVertex('San Fran');
console.log(g);
