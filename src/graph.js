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

//Used during traversal to create an array of path objects with a start and end vertex
const buildPath = (vertex, path) => {
  //path is a JS map object
  const result = [];

  while (path.has(vertex)) {
    //Retrieves the endpoint for the given vertex
    const source = path.get(vertex);
    //Adds the edge to the result set
    result.push({source, vertex});
    //Sets the endpoint to the new vertex to search on
    vertex = source;
  }

  //Loop terminates if there is no value associated with the vertex key

  //Reverse the results because loop starts from the end of the path and works its way backwards
  return result.reverse();
}

class Graph {
  constructor(directed = true) {
    this.adjacencyList = {}
    this.weighted = null //If edges are labeled with values, then it is weighted
    this.directed = directed //If edges are unidirectional, then it is directed. EX: A has edge to B, but B no edge to A, then directional. If both have an edge to each other then unidirectional
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
        break;
      case this.directed && this.adjacencyList[vertex2].includes(vertex1):
        throw new Error(`EDGE FROM ${vertex2} TO ${vertex1} ALREADY EXISTS AND GRAPH IS DIRECTED`)
        break;
      default:
        if(this.directed) {
          this.adjacencyList[vertex1].push(vertex2)
        } else {
          this.adjacencyList[vertex1].push(vertex2)
          this.adjacencyList[vertex2].push(vertex1)
        }
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
      for(const edge in this.adjacencyList) {
        let index = this.adjacencyList[edge].indexOf(vertex)
        removeElement(this.adjacencyList[edge], index)
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
        const index = this.adjacencyList[vertex1].indexOf(vertex2)
        removeElement(this.adjacencyList[vertex1], index)
        return this.adjacencyList[vertex1]
    }

  }

  breadthFirstTraversal(vertex, callback) {
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

      //For each edge of current node
      for (const next of this.adjacencyList[start]) {
        //finish interation if node has been visited
        if (closed.has(next)) {
          continue;
        }

        //if openQueue does not include the next node, add it to the openQueue and add to the path

        if (!openQueue.includes(next)) {
          paths.set(next, start);
          openQueue.push(next);
        }
      }


      //add current node to visited set
      closed.add(start);
      // console.log(closed)
    }

    // console.log(paths)

    return closed;
  }

  //The real only difference between depth and breadth first traversal is that depth uses a stack to store open vertices
  //Stacks follow First in First Out method so the last vertex added to the open queue will be visited before vertecies added before

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
          paths.set(next, start);
          openStack.push(next);
        }
      }
      closed.add(start);
      // console.log(closed)
    }

    // console.log(paths)
    // console.log(closed)
    return closed;
  }

  findPaths(source, target) {


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
    const openQueue = [source]
    // Map that will house all paths
    const paths = new Map()
    const results = []

    //While there are unvisted vertices
    while(openQueue.length) {
      //Remove first element in queue to visit
      const start = openQueue.shift();

      //If this vertex is the target, then build and return an array of paths
      // if (start === target) {
      //   return buildPath(start, path);
      // }

      //Otherwise for each vertex connected to start by edges
      for (const next of this.adjacencyList[start]) {
        //If vertex has already been visited, skip iteration
        if(next === target) {
          paths.set(next, start);
          results.push(buildPath(next, paths))
        }
        if (closed.has(next)) {
          continue;
        }
        //Otherwise, if the openQueue does not include the vertex
        if (!openQueue.includes(next)) {
          //Create a path between the two vertices
          paths.set(next, start);
          //Add to the open queue
          openQueue.push(next);
        }
      }

      //Then add visited vertex to the closed set
      closed.add(start);
    }
    //If all above loops complete, return null since no paths were found
    return results;
  }

  detectCycle(vertex) {
    if(!this.adjacencyList[vertex]) {
      throw new Error('STARTING VERTEX DOES NOT EXIST')
    }

    if(!Object.keys(this.adjacencyList).length) {
      throw new Error('GRAPH IS EMPTY')
    }
    const closed = new Set ()
    //Unvisited vertices stack
    const openStack = [vertex]
    // Map that will house all paths
    const paths = new Map()

    while(openStack.length) {
      const start = openStack.pop()

      for(const next of this.adjacencyList[start]) {
        //If the next vertex is the starting vertex, the graph is cyclical
        if(next === vertex) {
          this.cyclic = true
          return true
        }

        if(closed.has(next)) {
          continue
        }

        if(!openStack.includes(next)) {
          paths.set(next, start);
          openStack.push(next);
        }
      }

      closed.add(start);
    }



    return false
  }

}

export default Graph
