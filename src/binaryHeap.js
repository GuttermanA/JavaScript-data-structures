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

  pop() {
    if(!this.nodes.length) {
      throw new Error('HEAP IS EMPTY')
    }
    //Store element to be removed
    const removedNode = this.nodes[0]
    //Get last element of the array
    const last = this.nodes.pop()
    //starting index is 0
    let currentIndex = 0
    //starting left child index is 1
    let leftChildIndex = 1
    //starting right child is 2
    let rightChildIndex = 2
    if(this.nodes.length > 1) {
      //Replace first element with last element
      this.nodes[0] = last
      console.log(this.nodes)
      //While either the left or right child node exist and either one is greater than the parent node
      while((this.nodes[leftChildIndex] && this.nodes[currentIndex] < this.nodes[leftChildIndex]) || (this.nodes[rightChildIndex] && this.nodes[currentIndex] < this.nodes[rightChildIndex])) {
        //if the current node is less than the left node and the left node is greater than the right node
        if(this.nodes[currentIndex] < this.nodes[leftChildIndex] && this.nodes[leftChildIndex] > this.nodes[rightChildIndex]) {
          //swap them
          swap(this.nodes, currentIndex, leftChildIndex)
          //set the current node index to the left child index
          currentIndex = leftChildIndex
          //find the left and right child indexes of the new current index
          leftChildIndex = (2*(1+currentIndex)) - 1
          rightChildIndex = leftChildIndex + 1
        } else {
          //optherwise do the same above, except swap with the right node
          swap(this.nodes, currentIndex, rightChildIndex)
          currentIndex = rightChildIndex
          leftChildIndex = (2*(1+currentIndex)) - 1
          rightChildIndex = leftChildIndex + 1
        }
        console.log(this.nodes)
      }
    }
    return removedNode
  }

  //MUST FINISH

  remove(data) {
    // if(!this.nodes.length) {
    //   throw new Error('HEAP IS EMPTY')
    // }
    // let currentNodeIndex = 0
    // while(data !== currentNode) {
    //   if(data < currentNode) {
    //
    //   }
    // }

  }

  //usings a technique called sinking where the last element in the queue replaces the first element and then sinks down until the highest value in the array is first


}

export default BinaryHeap
