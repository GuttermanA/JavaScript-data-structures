const assert = require('assert')
// const chai = require('chai')
const path = require('path')
const LinkedList = require(path.join(__dirname, '../src', 'linkedList'))

describe('LinkedList', function () {

  describe('#addNode', function () {

    it('should create a node at the head, if the head is NULL', function () {
      const linkedList = new LinkedList()
      const data = 1
      linkedList.addNode(data)
      assert.equal(linkedList.head.data, data)
    })

    it('should add a node to the next empty space in the linked list', function () {
      const linkedList = new LinkedList(1)
      const data = 2
      linkedList.addNode(data)
      const lastNode = linkedList.traverse()
      assert.equal(lastNode.data, data)
    })

    it('should increment the length property of the linked list', function () {
      const linkedList = new LinkedList(1)
      const initialLength = linkedList.length
      const data = 2
      linkedList.addNode(data)
      const newLength = linkedList.length
      assert.equal(initialLength + 1, newLength)
    })

  })

  describe('#traverse', function () {
    it('should return the last node in the linked list', function () {
      const linkedList = new LinkedList(5)
      linkedList.addNode(3)
      const lastNode = linkedList.addNode(8)
      assert.equal(linkedList.traverse(), lastNode)
    })
  })

  describe('#find', function () {


    beforeEach('create data', function () {

    })

    it('should return the node with the given data parameter', function () {
      const linkedList = new LinkedList(5)
      linkedList.addNode(3)
      linkedList.addNode(8)
      const nodeToFind = linkedList.addNode(57)
      linkedList.addNode(34)
      assert.equal(linkedList.find(57), nodeToFind)
    })

    it('should return -1 if the node is not found', function () {
      const linkedList = new LinkedList(5)
      linkedList.addNode(3)
      linkedList.addNode(8)
      linkedList.addNode(34)
      assert.equal(linkedList.find(57), -1)
    })
  })

  describe('#remove', function () {

    const linkedList = new LinkedList(5)
    linkedList.addNode(3)
    linkedList.addNode(8)
    linkedList.addNode(57)
    linkedList.addNode(34)
    const initialLength = linkedList.length
    linkedList.remove(57)
    const newLength = linkedList.length

    beforeEach('create data', function () {

    })

    it('should remove the node with the given data', function () {
      // const linkedList = new LinkedList(5)
      // linkedList.addNode(3)
      // linkedList.addNode(8)
      // linkedList.addNode(57)
      // linkedList.addNode(34)
      // linkedList.remove(57)
      assert.equal(linkedList.find(57), -1)
    })

    it('should deincrement the property of the linked list', function () {
      assert(initialLength - 1, newLength)
    })
  })
})
