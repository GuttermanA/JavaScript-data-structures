class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root ? root : null
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

    if(data > node.data) {
      if(node.right) {
        addNode(data, node.right)
      } else {
        node.right = new Node(data)
        newNode = node.right
      }
    }

    if(data < node.data) {
      if(node.left) {
        addNode(data, node.left)
      } else {
        node.left = new Node(data)
        newNode = node.left
      }
    }

    return newNode

  }
}

module.exports = BinarySearchTree
