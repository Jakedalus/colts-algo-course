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

	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			while (this.adjacencyList[vertex].length) {
				let adjacent = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacent);
			}
		}

		console.log(this.adjacencyList[vertex]);

		delete this.adjacencyList[vertex];
	}
}

class WeightedGraph {
	// undirected, WEIGHTED graph
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(vertex1, vertex2, weight) {
		if (
			this.adjacencyList[vertex1] &&
			this.adjacencyList[vertex2]
		) {
			this.adjacencyList[vertex1].push({
				node   : vertex2,
				weight
			});
			this.adjacencyList[vertex2].push({
				node   : vertex1,
				weight
			});
		}
	}

	removeEdge(vertex1, vertex2) {
		if (
			this.adjacencyList[vertex1] &&
			this.adjacencyList[vertex2]
		) {
			this.adjacencyList[vertex1] = this.adjacencyList[
				vertex1
			].filter(v => v.node !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[
				vertex2
			].filter(v => v.node !== vertex1);
		}
	}

	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			while (this.adjacencyList[vertex].length) {
				let adjacent = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacent.node);
			}
		}

		console.log(this.adjacencyList[vertex]);

		delete this.adjacencyList[vertex];
	}
}

module.exports = { Graph, WeightedGraph };

// const g = new Graph();

// g.addVertex('Tokyo');
// g.addVertex('San Fran');
// g.addEdge('Tokyo', 'San Fran');
// console.log(g);
// console.log('----- ERROR HANDLING -----');
// g.addVertex('Tokyo');
// console.log(g); // Should not overwrite Tokyo's list
// g.addEdge('Tokyo', 'Dallas');
// console.log(g); // Shouldn't work since Dallas hasn't been added as a vertex yet
// console.log('----- REMOVING -----');
// g.addVertex('Dallas');
// g.addVertex('Philly');
// g.addEdge('San Fran', 'Philly');
// g.addVertex('Shanghai');
// g.addEdge('Tokyo', 'Shanghai');
// g.addVertex('Hong Kong');
// g.addEdge('Tokyo', 'Hong Kong');
// g.addEdge('Hong Kong', 'Shanghai');
// console.log(g);
// g.removeEdge('San Fran', 'Philly');
// console.log(g);
// g.removeVertex('Dallas');
// console.log(g);
// g.removeVertex('Tokyo');
// console.log(g); // Should remove all edges also

const wg = new WeightedGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addEdge('A', 'B', 9);
wg.addEdge('A', 'C', 5);
wg.addEdge('B', 'C', 7);
console.log(wg.adjacencyList);
wg.removeEdge('A', 'C');
console.log(wg.adjacencyList);
wg.removeVertex('A');
console.log(wg.adjacencyList);
