class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(data) {
    this.head = data ? new Node(data) : null
    this.length = this.head ? 1 : null
  }

  addNode(data) {
    if(!this.head) {
      this.head = new Node(data)
      ++this.length
      return this.head
    }

    const lastNode = this.traverse()

    lastNode.next = new Node(data)
    ++this.length

    return lastNode.next

  }

  traverse () {

    if(!this.length) {
      return 'LIST EMPTY'
    }

    let currentNode = this.head

    while(currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  find(data) {
    let currentNode = this.head

    while(currentNode) {
      if(currentNode.data === data) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return -1
  }

  remove(data) {
    let currentNode = this.head
    let previousNode = null

    while(currentNode) {
      if(currentNode.data === data) {
        break
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }

    if(currentNode === null) {
      return -1
    }

    previousNode.next = currentNode.next
    --this.length

    return this
  }

  clear() {
    this.head = null
  }
}

export default LinkedList
