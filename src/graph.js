const path = require('path')

const { removeElement } = require(path.join(__dirname, './', 'helperFunctions'))



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
    this.adjacencyList = {}
    this.weighted = null //If edges are labeled with values, then it is weighted
    this.directed = null //If edges are unidirectional, then it is directed. EX: A has edge to B, but B no edge to A, then directional. If both have an edge to each other then unidirectional
    this.cyclic = null //If
  }

  addVertex(vertex) {
    if(this.adjacencyList[vertex]) {
      throw new Error('VERTEX ALREADY EXISTS')
    } else {
      this.adjacencyList[vertex] = []
      return this.adjacencyList
    }
  }

  addEdge(vertex1, vertex2) {
    switch (true) {
      case !this.adjacencyList[vertex1]:
        throw new Error('STARTING VERTEX DOES NOT EXIST')
        break;
      case !this.adjacencyList[vertex2]:
        throw new Error('ENDING VERTEX DOES NOT EXIST')
        break;
      case this.adjacencyList[vertex1].includes(vertex2):
        throw new Error('EDGE ALREADY EXISTS')
      default:
        this.adjacencyList[vertex1].push(vertex2)
        return this.adjacencyList[vertex1]
    }
  }

  adjacent(vertex1, vertex2) {
    // tests whether there is an edge from the vertex x to the vertex y
    if(this.adjacencyList[vertex1].includes(vertex2) || this.adjacencyList[vertex2].includes(vertex1)) {
      return true
    } else {
      return false
    }
  }

  neighbors(vertex) {
    // lists all vertices y such that there is an edge from the vertex x to the vertex y
  }



  removeVertex(vertex) {
    //removes the vertex x, if it is there
    if(this.adjacencyList[vertex]) {
      delete this.adjacencyList[vertex]
      for(let k in this.adjacencyList) {
        let index = this.adjacencyList[k].indexOf(vertex)
        removeElement(this.adjacencyList[k], index)
      }
      return this.adjacencyList
    } else {
      throw new Error('VERTEX DOES NOT EXIST')
    }
  }

  removeEdge(vertex1, vertex2) {

    switch (true) {
      case !this.adjacencyList[vertex1]:
        throw new Error('STARTING VERTEX DOES NOT EXIST')
        break;
      case !this.adjacencyList[vertex2]:
        throw new Error('ENDING VERTEX DOES NOT EXIST')
        break;
      case !this.adjacencyList[vertex1].includes(vertex2):
        throw new Error('EDGE DOES NOT EXIST')
      default:
        let index = this.adjacencyList[vertex1].indexOf(vertex2)
        removeElement(this.adjacencyList[vertex1], index)
        return this.adjacencyList[vertex1]
    }

  }

  breadthFirstTraversal() {

  }

  depthFirstTraversal() {

  }

  getVertexValue(vertex1, vertex2) {

  }

  setVertexValue(vertex1, vertex2) {

  }

  getEdgeValue(vertex1, vertex2) {

  }

  setEdgeValue(vertex1, vertex2) {

  }




}

module.exports = Graph
