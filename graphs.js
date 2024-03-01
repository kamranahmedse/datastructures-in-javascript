/*  implementing a class object for graphs
including direct vs indirect graphs, 
complete api includes paths ,loops ,degree of node, cycle graphs,
connected graph, complete graphs, weighted graphs,simple graph
*/

class Graph {
	// defining the constructor
	constructor() {
		this.adjacencyList = {};
	} 

	// adding a vertex to the graph
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	 } // complexity O(1)

	// adding an edge to the graph
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	} // complexity O(1)

	// removing an edge from the graph
	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
	} // complexity O(n)

	// removing a vertex from the graph
	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	} // complexity O(n^2)

	// Depth First Search Recursive
	DFSRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return dfs(neighbor);
				}
			});
		})(start);

		return result;
	} // complexity O(n)

	// degree of a node
	degree(node) {
		return this.adjacencyList[node].length;
	} // complexity O(1)

	// Breadth First Search
	BFS(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return result;
	} // complexity O(n)

	// checking if the graph is connected
	isConnected() {
		const startNode = Object.keys(this.adjacencyList)[0];
		const visited = this.BFS(startNode);
		return visited.length === Object.keys(this.adjacencyList).length;
	} // complexity O(n)

	// checking if the graph is a cycle graph
	isCycle() {
		const visited = {};
		const stack = {};
		for (let node in this.adjacencyList) {
			if (!visited[node]) {
				if (this.isCycleUtil(node, visited, stack)) {
					return true;
				}
			}
		}
		return false;
	} // complexity O(n)

	// checking if the graph is a weighted graph
	isWeighted() {
		for (let node in this.adjacencyList) {
			for (let edge of this.adjacencyList[node]) {
				if (Array.isArray(edge)) {
					return true;
				}
			}
		}
		return false;
	} // complexity O(n)

	// checking if the graph is a simple graph
	isSimple() {
		for (let node in this.adjacencyList) {
			if (this.adjacencyList[node].includes(node)) {
				return false;
			}
		}
		return true;
	} // complexity O(n)

	// checking if the graph is a complete graph
	isComplete() {
		const numNodes = Object.keys(this.adjacencyList).length;
		for (let node in this.adjacencyList) {
			if (this.adjacencyList[node].length !== numNodes - 1) {
				return false;
			}
		}
		return true;
	} // complexity O(n)

	// checking if the graph is a direct graph
	isDirect() {
		for (let node in this.adjacencyList) {
			for (let edge of this.adjacencyList[node]) {
				if (!this.adjacencyList[edge].includes(node)) {
					return true;
				}
			}
		}
		return false;
	} // complexity O(n)

	// checking if the graph is an indirect graph
	isIndirect() {
		return !this.isDirect();
	} // complexity O(n)

	// checking if the graph has a loop
	hasLoop() {
		for (let node in this.adjacencyList) {
			if (this.adjacencyList[node].includes(node)) {
				return true;
			}
		}
		return false;
	} // complexity O(n)

	// checking if the graph has a path
	hasPath(start, end) {
		const visited = {};
		return this.hasPathUtil(start, end, visited);
	} // complexity O(n)

	// helper function for hasPath
	hasPathUtil(start, end, visited) {
		if (start === end) return true;
		visited[start] = true;
		for (let neighbor of this.adjacencyList[start]) {
			if (!visited[neighbor]) {
				if (this.hasPathUtil(neighbor, end, visited)) {
					return true;
				}
			}
		}
		return false;
	} // complexity O(n)

	// helper function for isCycle
	isCycleUtil(node, visited, stack) {
		if (!visited[node]) {
			visited[node] = true;
			stack[node] = true;
			for (let neighbor of this.adjacencyList[node]) {
				if (
					(!visited[neighbor] && this.isCycleUtil(neighbor, visited, stack)) ||
					stack[neighbor]
				) {
					return true;
				}
			}
		}
		stack[node] = false;
		return false;
	} // complexity O(n)
// end of class
}