class Vertex {
  constructor(data = null) {
    this.edges = []
    this.data = data
  }
}

class Edge {
  constructor(vertex1, vertex2, data) {
    this.vertex1 = vertex1
    this.vertex2 = vertex2
    this.data = data
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {
      //vertex: [...edges]
    }
    this.weighted = null //If edges are labeled with values, then it is weighted
    this.directed = null //If edges are unidirectional, then it is directed. EX: A has edge to B, but B no edge to A, then directional. If both have an edge to each other then unidirectional
    this.cyclic = null //If
  }

  addVertex(data) {
    if(!this.adjacencyList[vertex.data]) {
      new Vertex(data)
      this.adjacencyList[vertex.data] = []
    } else {
      return 'VERTEX ALREADY EXISTS'
    }

  }

  addEdge(vertex1, vertex2) {
    let message = null
    const edges = this.adjacencyList[vertex1]
    for(let i = 0; i < edges.length; i++) {
      if(edges[i].vertex1.data === vertex1.data && edges[i].vertex2.data === vertex2.data) {
        result = 'EDGE ALREADY EXISTS'
        break
      }
    }

    if (!message) {
      const newEdge = new Edge()
      this.adjacencyList[vertex1].push()
    }
    this.adjacencyList[vertex1].push(vertex2)
  }

  adjacent(vertex1, vertex2) {
    // tests whether there is an edge from the vertex x to the vertex y
    let result = false
    if(this.adjacencyList[vertex1.data]) {
      const edges = this.adjacencyList[vertex1.data]
      for(let i = 0; i < edges.length; i++) {
        if(edges[i].vertex1.data === vertex1.data && edges[i].vertex2.data === vertex2.data) {
          result = true
          break
        }
      }
    }

    return result
  }

  neighbors(vertex) {
    // lists all vertices y such that there is an edge from the vertex x to the vertex y
  }



  removeVertex(vertex) {
    //removes the vertex x, if it is there

  }



  removeEdge(vertex1, vertex2) {

  }

  getVertexValue(vertex1, vertex2) {

  }

  setVertexValue(vertex1, vertex2) {

  }

  getEdgeValue(vertex1, vertex2) {

  }

  setEdgeValue(vertex1, vertex2) {

  }

  breadthFirstTraversal() {

  }

  depthFirstTraversal() {

  }


}

module.exports = Graph
