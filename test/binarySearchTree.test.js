import { describe, before, it } from 'mocha';
import assert from 'assert'
import {BinarySearchTree, Node} from '../src/binarySearchTree'
import { generateDataPoints, generateRandomNumberBetween, checkEqualityOfArrays } from '../src/helperFunctions'

describe('BinarySearchTree', function () {
  describe('#addNode', function () {
    const binarySearchTree = new BinarySearchTree()
    it('places the node at the root if the tree is empty', function () {
      const root  = binarySearchTree.addNode(10)
      assert.equal(binarySearchTree.root, root)
    })

    it('places the node on the left side of the tree if it is less than the root', function () {
      const leaf = binarySearchTree.addNode(8)
      assert.equal(binarySearchTree.root.left, leaf)
    })

    it('places the node on the right side of the tree if it is greater than or equal to the root', function () {
      const leaf = binarySearchTree.addNode(12)
      assert.equal(binarySearchTree.root.right, leaf)
    })

    it("it throws 'Invalid Node' Error if a Node object is not passed as the 2nd argument", function () {
      assert.throws(function() {binarySearchTree.addNode(55, 'PIZZA')}, Error, "Invalid node")
    })

    it("it throws 'Node already exists' Error if node data is already found in the tree", function () {
      binarySearchTree.addNode(55)
      assert.throws(function() {binarySearchTree.addNode(55)}, Error, "Node already exists")
    })

    it('ensures that the lower value is always on the left when inserting a new node and the left node is already occupied', function () {

    })
  })

  describe('#minValue', function () {

    it('returns the root data if the root is the min value', function () {
      // const binarySearchTree = BinarySearchTree.generate(1)
      const binarySearchTree = new BinarySearchTree(5)
      binarySearchTree.addNode(6)
      binarySearchTree.addNode(12)
      binarySearchTree.addNode(55)
      assert.equal(binarySearchTree.minValue(), binarySearchTree.root.data)
    })

    it('returns the smallest data point entered into the tree', function () {
      const binarySearchTree = new BinarySearchTree()
      const data = generateDataPoints(5)
      // const data = [44, 66, 9, 2, 5]
      const min = Math.min(...data)

      data.forEach(e => binarySearchTree.addNode(e))
      const minValue = binarySearchTree.minValue()
      assert.equal(binarySearchTree.minValue(), min)
    })
  })

  describe('#inOrder', function () {
    const binarySearchTree = new BinarySearchTree(5)
    binarySearchTree.addNode(1)
    binarySearchTree.addNode(6)
    binarySearchTree.addNode(12)
    binarySearchTree.addNode(3)
    binarySearchTree.addNode(2)
    binarySearchTree.addNode(55)

    const inOrder = [1, 2, 3, 5, 6, 12, 55]

    it('returns the data from each node in ascending order', function () {
      const results = binarySearchTree.inOrder()
      assert.equal(JSON.stringify(results), JSON.stringify(inOrder))
    })
  })

  describe('#search', function () {


    it('returns the root if the search data === the root data', function () {
      const binarySearchTree = new BinarySearchTree(5)
      binarySearchTree.addNode(1)
      binarySearchTree.addNode(6)
      binarySearchTree.addNode(12)
      binarySearchTree.addNode(3)
      binarySearchTree.addNode(2)
      binarySearchTree.addNode(55)
      // const data = generateDataPoints(5)
      // const min = Math.min(...data)
      // data.forEach(e => binarySearchTree.addNode(e))
      assert.equal(binarySearchTree.search(5), 5)
    })

    it('returns -1 if the value is not found', function () {
      const binarySearchTree = BinarySearchTree.generate(5)
      assert.equal(binarySearchTree.search(347), -1)
    })

    it('returns an object with a data attribute equal to the search parameter', function () {
      const binarySearchTree = new BinarySearchTree(5)
      binarySearchTree.addNode(1)
      binarySearchTree.addNode(6)
      binarySearchTree.addNode(12)
      binarySearchTree.addNode(3)
      binarySearchTree.addNode(2)
      binarySearchTree.addNode(55)
      binarySearchTree.addNode(8)
      assert.equal(binarySearchTree.search(55), 55)
    })
  })

  describe('#valid', function () {
    const binarySearchTree = new BinarySearchTree(5)
    binarySearchTree.addNode(1)
    binarySearchTree.addNode(6)
    binarySearchTree.addNode(12)
    binarySearchTree.addNode(3)
    binarySearchTree.addNode(2)
    binarySearchTree.addNode(55)
    binarySearchTree.addNode(8)
    it('returns true if it is a valid binary search tree', function () {
      assert.equal(binarySearchTree.valid(), true)
    })

    it('returns false if it is not valid binary search tree', function () {
      const node = binarySearchTree.addNode(10)
      node.left = new Node(35)
      // binarySearchTree.inOrder()
      assert.equal(binarySearchTree.valid(), false)
    })
  })

  describe('#breadthFirst', function () {
    const binarySearchTree = new BinarySearchTree(5)
    binarySearchTree.addNode(1)
    binarySearchTree.addNode(6)
    binarySearchTree.addNode(12)
    binarySearchTree.addNode(3)
    binarySearchTree.addNode(2)
    binarySearchTree.addNode(55)
    binarySearchTree.addNode(8)
    it('starting with the root, it visits each node in the tree on each level before moving to the next level', function () {
      const answer = [5, 1, 6, 3, 12, 2, 8, 55]
      const result = binarySearchTree.breadthFirst()
      console.log(result)
      assert.equal(checkEqualityOfArrays(result, answer), true)
    })
  })

  describe('#preOrder', function () {
    const binarySearchTree = new BinarySearchTree(5)
    binarySearchTree.addNode(1)
    binarySearchTree.addNode(6)
    binarySearchTree.addNode(12)
    binarySearchTree.addNode(3)
    binarySearchTree.addNode(2)
    binarySearchTree.addNode(55)
    binarySearchTree.addNode(8)
    it('starting with the root, it visits all nodes on the left, then goes back up the tree to visit all nodes on the right', function () {
      const answer = [5, 1, 3, 2, 6, 12, 8, 55]
      const result = binarySearchTree.preOrder()
      console.log(result)
      assert.equal(checkEqualityOfArrays(result, answer), true)
    })
  })

  describe('#postOrder', function () {
    const binarySearchTree = new BinarySearchTree(5)
    binarySearchTree.addNode(1)
    binarySearchTree.addNode(6)
    binarySearchTree.addNode(12)
    binarySearchTree.addNode(3)
    binarySearchTree.addNode(2)
    binarySearchTree.addNode(55)
    binarySearchTree.addNode(8)
    it('visits the left subtree, the right subtree, and then the root node', function () {
      const answer = [2, 3, 1, 8, 55, 12, 6, 5]
      const result = binarySearchTree.postOrder()
      console.log(result)
      assert.equal(checkEqualityOfArrays(result, answer), true)
    })
  })

})
