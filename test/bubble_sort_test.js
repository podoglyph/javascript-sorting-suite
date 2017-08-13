const assert = require('chai').assert
const compare = require('../lib/bubble_sort.js')

describe('Bubble Sort does the sortation sorting', function() {

  it('can sort a small array of numbers', function() {
    var unsorted = [3, 2, 1]
    var sorted = [1, 2, 3]
    assert.deepEqual(compare(unsorted), sorted)
  });

  it('can sort a large array of numbers', function() {
    var unsorted = [99, 33, 44, 11, 0, 1002, 34, 55, 999, 34, 35, 36, 88, 832, 356]
    var sorted = [0, 11, 33, 34, 34, 35, 36, 44, 55, 88, 99, 356, 832, 999, 1002]
    assert.deepEqual(compare(unsorted), sorted)
  });

  it('can sort an array of letters', function() {
    var unsorted = ['d', 'a', 'b']
    var sorted = ['a', 'b', 'd']
    assert.deepEqual(compare(unsorted), sorted)
  })

  it('does not return true for unsorted array with same elements', function() {
    var unsorted = ['d', 'a', 'b']
    var sorted = ['a', 'd', 'b']
    assert.notDeepEqual(compare(unsorted), sorted)
  })

});
