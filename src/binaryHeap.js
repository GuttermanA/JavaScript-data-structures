import { swap } from './helperFunctions'


//Abstraction of a priority queue
//A binary heap is where tree nodes have a maximum of two children
//A maximal binary heap means the highest value is alwaus stored at the root of the tree
//A minimal binary heap means that the lowest value is always stored at the root of the tree
//Best way to implement this in Javascript is to use a partially sorted array
//In this case, the array is organized as such as the first element is the root of the tree and therefore the min or the max
//Any element in the array's children can be found by looking at 2x or 2x + 1, where x is the index of the current element, ahead in the array
//Each element's parent exists at x / 2, rounded down

//Implementation of a maximal binary heap

class BinaryHeap {
  constructor() {
    //add null first element because we need the array to start at 1
    this.nodes = []
  }

  //uses a technique called bubbling where the new value is inserted at the end of the array and then bubbles up through the array
  insert(data) {
    //put our new node at the end of the array
    this.nodes.push(data)
    //starting at the end of the array
    let currentNodeIndex = this.nodes.length - 1
    //with the parent of the end of the array
    //must add one to the current index and then find floor and then remove one because JS arrays start at 0
    let currentNodeParentIndex = Math.floor((currentNodeIndex + 1)/2) - 1
    //while the new value is greater than the parent
    while(data > this.nodes[currentNodeParentIndex]) {
      //swap these nodes
      swap(this.nodes, currentNodeIndex, currentNodeParentIndex)
      //set the current index to where the element was swapped
      currentNodeIndex = currentNodeParentIndex
      currentNodeParentIndex = Math.floor(currentNodeIndex/2)
    }

    return this.nodes

    //This alogrithm is O(log n) because we visit levels in the tree, rather than each node individually on each iteration
  }

  //MUST FINISH

  remove() {
    if(!this.nodes.length) {
      throw new Error('HEAP IS EMPTY')
    }

    //set variable for first node of the array
    const removedNode = this.nodes[0]
    //set first element of the removed last element of the array
    this.nodes[0] = this.nodes.pop()
    //starting at the first element in the array
    let currentIndex = 0
    //get left child index
    let leftIndex = (2*1+currentIndex) - 1
    //get right child index
    let rightIndex = leftIndex + 1
    let currentChildIndex = null
    while(this.nodes[currentIndex] < this.nodes[leftIndex] || this.nodes[rightIndex])

    return removedNode

  }


}

export default BinaryHeap
