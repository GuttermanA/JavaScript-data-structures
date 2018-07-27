const assert = require('assert')
// const chai = require('chai')
const path = require('path')
const Graph = require(path.join(__dirname, '../src', 'graph'))

describe('Graph', function () {

  // beforeEach(function() {
  //   const graph = new Graph ()
  //   graph.addVertex('A')
  //   graph.addVertex('B')
  //   graph.addVertex('C')
  //   graph.addEdge('A', 'B')
  //   graph.addEdge('B', 'A')
  //   graph.addEdge('B', 'C')
  // })

  describe('#addVertex', function () {
    const graph = new Graph()
    it('throws an error if the vertex already exists', function () {
      graph.addVertex('A')
      assert.throws(function () { graph.addVertex('A')}, Error, 'VERTEX ALREADY EXISTS')
    })

    it('adds a vertex with an empty edges array to the adjacency list', function () {
      assert.equal(Object.keys(graph.adjacencyList).includes('A'), true)
      assert.equal(Array.isArray(graph.adjacencyList['A']), true)
      assert.equal(graph.adjacencyList['A'].length, 0)
    })

  })

  describe('#addEdge', function () {
    describe('Errors', function () {
      const graph = new Graph()
      it("throws an error: 'STARTING VERTEX DOES NOT EXIST' if vertex1 parameter is not found in the adjacency list", function () {
        assert.throws(function() {graph.addEdge('A', 'B')}, Error, 'STARTING VERTEX DOES NOT EXIST')
      })

      it("throws an error: 'ENDING VERTEX DOES NOT EXIST' if vertex2 parameter is not found in the vertex1 edge array", function () {
        graph.addVertex('A')
        assert.throws(function() {graph.addEdge('A', 'B')}, Error, 'ENDING VERTEX DOES NOT EXIST')
      })

      it("throws an error: 'EDGE ALREADY EXISTS' if the edge is found in the array of edges of vertex1", function () {
        graph.addVertex('B')
        graph.addEdge('A', 'B')
        assert.throws(function() {graph.addEdge('A', 'B')}, Error, 'EDGE ALREADY EXISTS')
      })
    })

    it('adds the edge to the given vertex1 edge array', function () {
      const graph = new Graph()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B')
      graph.addEdge('B', 'A')
      assert.equal(graph.adjacencyList['A'].includes('B'), true)
      assert.equal(graph.adjacencyList['B'].includes('A'), true)
    })
  })

  describe('#adjacent', function () {
    const graph = new Graph ()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('B', 'A')
    graph.addEdge('B', 'C')
    it('returns true if given share any edge', function () {
      assert.equal(graph.adjacent('A',  'B'), true)
      assert.equal(graph.adjacent('B',  'A'), true)
      assert.equal(graph.adjacent('B',  'C'), true)
      assert.equal(graph.adjacent('C',  'B'), true)
    })

    it('returns false if given vertices share no edges', function () {
      assert.equal(graph.adjacent('A',  'C'), false)
      assert.equal(graph.adjacent('C',  'A'), false)
    })
  })

  describe('#removeVertex', function () {
    const graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('B', 'A')
    graph.addEdge('B', 'C')
    it('throws an error if the given vertex does not exist in the adjacency list', function () {
      assert.throws(function () {graph.removeVertex('Z')})
    })

    it('removes the vertex from the adjacency list keys', function () {
      graph.removeVertex('B')
      assert.equal(Object.keys(graph.adjacencyList).includes('B'), false)
    })

    it('removes all edges from the edge arrays in related vertices', function () {
      assert.equal(graph.adjacencyList['A'].includes('B'), false)
      assert.equal(graph.adjacencyList['C'].includes('B'), false)
    })
  })

  describe('#removeEdge', function () {
    const graph = new Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addEdge('A', 'B')
    graph.addEdge('B', 'A')
    graph.addEdge('B', 'C')
    describe('Errors', function () {
      const graph = new Graph()
      it("throws an error: 'STARTING VERTEX DOES NOT EXIST' if vertex1 parameter is not found in the adjacency list", function () {
        assert.throws(function() {graph.removeEdge('D', 'E')}, Error, 'STARTING VERTEX DOES NOT EXIST')
      })

      it("throws an error: 'ENDING VERTEX DOES NOT EXIST' if vertex2 parameter is not found in the vertex1 edge array", function () {
        graph.addVertex('D')
        assert.throws(function() {graph.removeEdge('A', 'B')}, Error, 'ENDING VERTEX DOES NOT EXIST')
      })

      it("throws an error: 'EDGE DOES NOT EXIST' if the edge is found in the array of edges of vertex1", function () {
        graph.addVertex('E')
        graph.addEdge('D', 'E')
        graph.removeEdge('D', 'E')
        assert.throws(function() {graph.removeEdge('A', 'B')}, Error, 'EDGE DOES NOT EXIST')
      })
    })

    it('removes the edge from the edges array of the vertex1 parameter', function () {
      graph.removeEdge('A', 'B')
      assert.equal(graph.adjacencyList['A'].includes('B'), false)
    })

    it('does not remove the edge from the edges array of the vertex2 parameter', function () {
      assert.equal(graph.adjacencyList['B'].includes('A'), true)
    })

  })
})
