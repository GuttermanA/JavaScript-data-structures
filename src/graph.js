import { removeElement } from './helperFunctions'

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
    return this.adjacencyList[vertex]
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

  breadthFirstTraversal(vertex) {
    if(!this.adjacencyList[vertex]) {
      throw new Error('VERTEX DOES NOT EXIST')
    }
    //Visited vertices set
    const closed = new Set ()
    //Unvisited vertices queue
    const openQueue = [vertex]
    // Map that will house all paths
    const paths = new Map()

    while(openQueue.length) {
      //Since Queue, first in first out so use shift
      const start = openQueue.shift();

      // if (start === target) {
      //   return buildPath(start, path);
      // }

      //For each edge of current node
      for (const next of this.adjacencyList[start]) {
        //finish interation if node has been visited
        if (closed.has(next)) {
          continue;
        }

        //if openQueue does not include the next node, add it to the openQueue and add to the path

        if (!openQueue.includes(next)) {
          path.set(next, start);
          openQueue.push(next);
        }
      }


      //add current node to visited set
      closed.add(start);
    }

    return paths;
  }

  depthFirstTraversal(vertex) {
    if(!this.adjacencyList[vertex]) {
      throw new Error('VERTEX DOES NOT EXIST')
    }

    const closed = new Set ()
    //Unvisited vertices stack
    const openStack = [vertex]
    // Map that will house all paths
    const paths = new Map()

    while(openStack.length) {
      const start = openStack.pop()

      for(const next of this.adjacencyList[start]) {
        if(closed.has(next)) {
          continue
        }

        if(!openStack.includes(next)) {
          path.set(next, start);
          openStack.push(next);
        }
      }
    }
  }

  findPaths(source, target) {
    const buildPath = (target, path) => {
      const result = [];

      while (path.has(target)) {
        const source = path.get(target);
        result.push({source, target});
        target = source;
      }

      return result.reverse();
    }

    if(!this.adjacencyList[source]) {
      throw new Error('STARTING VERTEX DOES NOT EXIST')
    }

    if(!this.adjacencyList[target]) {
      throw new Error('ENDING VERTEX DOES NOT EXIST')
    }
    //BREADTH FIRST SEARCH
    //Visited vertices set
    const closed = new Set ()
    //Unvisited vertices queue
    const openQueue = [vertex]
    // Map that will house all paths
    const paths = new Map()

    while(openQueue.length) {
      const start = openQueue.shift();

      // if (start === target) {
      //   return buildPath(start, path);
      // }

      for (const next of this.adjacencyList[start]) {
        if (closed.has(next)) {
          continue;
        }

        if (!openQueue.includes(next)) {
          path.set(next, start);
          openQueue.push(next);
        }
      }

      closed.add(start);
    }

    return null;
  }


  visitEdges(vertex) {
    this.adjacencyList[vertex]
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

export default Graph
