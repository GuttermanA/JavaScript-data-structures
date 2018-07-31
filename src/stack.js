import { Node } from './linkedList'


//Last in, first out
//Stacks can be implemented using an array, but only using the push() and pop() methods for array mutation
//Not necessarily the most efficient way to implement a stack, but demonstrates the concept
//Stacks are supposed to have O(1) insertion and deletion when
class Stack {
  constructor(data) {
    this.head = data ? new Node(data) : null
    this.length = this.head ? 1 : 0
  }

  push(data) {
    const newNode = new Node(data)
    if(!this.head) {
      this.head = new Node
      return newNode
    }

    //set the next for the new node to the current head
    newNode.next = this.head
    //then set the head to the new node so it is now at the top of the stack
    this.head = newNode
    return this.head
  }

  pop() {
    if(!this.head) {
      throw new Error('STACK IS EMPTY')
    }
    //Set the node to be removed to a new variable
    const poppedNode = this.head
    //Set the head of the stack to the next node in the stack
    this.head = poppedNode.next
    //Return the removed node
    return poppedNode
  }
}

export default Stack
