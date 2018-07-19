const assert = require('assert')
// const chai = require('chai')
const path = require('path')
const BinarySearchTree = require(path.join(__dirname, '../src', 'binarySearchTree'))


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

    it("it returns 'Invalid Node' if a Node object is not passed as the 2nd argument", function () {
      // const result = binarySearchTree.addNode(55, 'Node')
      assert.throws(function() {binarySearchTree.addNode(55, 'Node')}, Error, "Invalid node")
    })
  })
})
