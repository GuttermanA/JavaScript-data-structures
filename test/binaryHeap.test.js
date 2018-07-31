import { describe, before, it } from 'mocha';
import assert from 'assert'
import BinaryHeap from '../src/binaryHeap'
import { checkEqualityOfArrays } from '../src/helperFunctions'

describe('maximal binaryHeap', function () {
  describe('#insert', function () {
    const binaryHeap = new BinaryHeap()
    binaryHeap.nodes = [100, 19, 36, 17, 3, 25, 1, 2, 7]

    it('it adds the new value to the correct place in the heap', function () {
      const newValue = 9
      const answer = [100, 19, 36, 17, 9, 25, 1, 2, 7, 3]
      const result = binaryHeap.insert(9)
      assert.equal(checkEqualityOfArrays(result, answer), true)
    })
  })

  describe('#pop', function () {
    const binaryHeap = new BinaryHeap()
    binaryHeap.nodes = [100, 19, 36, 17, 3, 25, 1, 2, 7]
    //Below for progression of sinking down from pop
    // [19, 36, 17, 3, 25, 1, 2, 7]
    // [7, 19, 36, 17, 3, 25, 1, 2]
    // [36, 19, 7, 17, 3, 25, 1, 2]
    // [36, 19, 25, 17, 3, 7, 1, 2]
    it('reoraganizes the heap correctly after the root value is removed', function () {
      const answer = [36, 19, 25, 17, 3, 7, 1, 2]
      binaryHeap.pop()
      const result = binaryHeap.nodes
      assert.equal(checkEqualityOfArrays(result, answer), true)
    })
  })
})
