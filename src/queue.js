import { Node } from './linkedList'


//First in first out (FIFO)
//Queues can also be implemented using a simple array and limiting mutations to push() and shift() methods
//Insertion: O(1)
//Deletion: O(1)
//Access: O(n) -> must go through queue up to the number of items in the queue to find param
//Search: O(n) -> must go through queue up to the number of items in the queue to find param
class Queue {
  constructor(data) {
    this.head = data ? new Node(data) : null
    this.tail = null
    this.length = this.head ? 1 : 0
    this.bigO = {
      insertion: {
        time: 'O(1)',
        comment: 'You can only ever insert at the end of a queue, so efficiently implemented queues will only ever have to know the end node to insert'
      },
      deletion: {
        time: 'O(1)',
        comment: 'You can only ever remove from a queue at the beginning, so efficiently implemented queues will only have to access the first node to delete'
      },
      access: {
        time: 'O(n)',
        comment: 'You must go through a queue up to n times, where n is the length of the queue to find the target node'
      },
      search: {
        time: 'O(n)',
        comment: 'You must go through a queue up to n times, where n is the length of the queue to find the target node'
      }
    }
  }

  peek() {
    return this.head.data
  }

  enqueue(data) {
    const newNode = new Node(data)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return this.head
    }
    //set the next attribute for the current tail to the new node
    this.tail.next = newNode
    //set the new node to the new tail
    this.tail = newNode
    ++this.length
    return this.tail
  }

  dequeue() {
    if(!this.head) {
      throw new Error('QUEUE IS EMPTY')
    }
    const dequeueNode = this.head
    this.head = this.head.next
    --this.length
    return dequeueNode
  }
}

export default Queue
