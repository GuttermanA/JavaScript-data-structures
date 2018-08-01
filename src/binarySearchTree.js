// const path = require('path')
// const { generateDataPoints, generateRandomNumberBetween} = require(path.join(__dirname, './', 'helperFunctions'))
//Balance vs inbalanced: Balanced trees maintain an O(log n) times for insert and find. Usually balance means heights of two subtrees only differ by 1
//Complete: every level is filled, except possible the the last level. Filled from left to right
//Full: in which every node has either zero or two children. No single child nodes
//Perfect: full and complete. All leaf nodes at the same level and the leaf level has maximum nodes

import { generateDataPoints, generateRandomNumberBetween } from './helperFunctions'

export class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}

export class BinarySearchTree {
  constructor(root) {
    this.root = root ? new Node(root) : null
  }

  addNode(data, node = this.root) {

    if(node) {
      const validNode = node instanceof Node
      if (!validNode) {
        throw Error('Invalid Node')
      }
    }

    let newNode = null

    if(!this.root) {
      this.root = new Node(data)
      return this.root
    }

    if(data === node.data) {
      throw Error('Node already exists')
    }

    if(data > node.data) {
      if(node.right) {
        return this.addNode(data, node.right)
      } else {
        node.right = new Node(data)
        newNode = node.right
      }
    }

    if(data < node.data) {
      if(node.left) {
        return this.addNode(data, node.left)
      } else {
        node.left = new Node(data)
        newNode = node.left
      }
    }

    return newNode
  }

  minValue(node = this.root) {

    if(node.left) {
      return this.minValue(node.left)
    } else {
      return node.data
    }
  }

  maxValue(node = this.root) {
    if(node.right) {
      return this.maxValue(node.right)
    } else {
      return node.data
    }
  }

  //Left branch, then root, then right branch
  inOrder() {

    const traverse = (node) => {
      // console.log(node.data)
      node.left && traverse(node.left);
      results.push(node.data);
      node.right && traverse(node.right);
    }

    let results = []
    traverse(this.root)
    return results
  }

  //Visits the current node before its child nodes, root is visited then left subtree then right subtree
  preOrder() {
    const traverse = (node) => {
      results.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }

    let results = []
    traverse(this.root)
    return results

    // callback(node.data)
    // node.left && traverse(node.left);
    // node.right && traverse(node.right);
  }

  //Visits left then right then root node
  postOrder() {
    const traverse = (node) => {
      // console.log(node.data)
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      results.push(node.data);
    }

    let results = []
    traverse(this.root)
    return results
  }

  search(data, node = this.root) {
    if(node === null) {
      return -1
    } else if(data < node.data) {
      return this.search(data, node.left)
    } else if(data > node.data) {
      return this.search(data, node.right)
    } else if (node.data === data) {
      return node.data
    }
  }

  breadthFirst() {

    const openQueue = [this.root]
    const visited = []
    //BREADTH FIRST SEARCH
    while(openQueue.length) {
      const currentNode = openQueue.shift()

      if(currentNode.left) {
        openQueue.push(currentNode.left)
      }
      if(currentNode.right) {
        openQueue.push(currentNode.right)
      }
      visited.push(currentNode.data)
    }
    return visited
  }

  valid(node = this.root) {

    const openQueue = [node]

    //BREADTH FIRST SEARCH
    while(openQueue.length) {
      const currentNode = openQueue.shift()

      if((currentNode.left && currentNode.left.data > currentNode.data) || (currentNode.right && currentNode.right.data < currentNode.data)) {
        return false
      }

      if(currentNode.left) {
        openQueue.push(currentNode.left)
      }
      if(currentNode.right) {
        openQueue.push(currentNode.right)
      }
    }
    return true
  }

  static generate(size) {
    const binarySearchTree = new BinarySearchTree()
    const data = generateDataPoints(size)
    const min = Math.min(...data)
    data.forEach(e => binarySearchTree.addNode(e))
    return binarySearchTree
  }


}

// export default BinarySearchTree
