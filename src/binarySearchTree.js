class Node {
  constructor(data) {
    this.data = data
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
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
        this.addNode(data, node.right)
      } else {
        node.right = new Node(data)
        newNode = node.right
      }
    }

    if(data < node.data) {
      if(node.left) {
        this.addNode(data, node.left)
      } else {
        node.left = new Node(data)
        newNode = node.left
      }
    }

    return newNode
  }

  minValue(node = this.root) {
    if(node.left) {
      this.minValue(node.left)
    } else {
      return node.data
    }
  }

  maxValue(node = this.root) {
    if(node.right) {
      this.minValue(node.right)
    } else {
      console.log(node.data)
      return node.data
    }
  }




  inOrder() {

    const traverse = (node) => {
      node.left && traverse(node.left);
      results.push(node.data);
      node.right && traverse(node.right);
    }

    let results = []

    let currentNode = this.root
    traverse(currentNode)
    return results

  }

}

module.exports = BinarySearchTree
