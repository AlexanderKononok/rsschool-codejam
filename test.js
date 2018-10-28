const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');

describe('sumOfOther', () => {
  it('#test1 should return [5,4,3]', () => {
    const arr = sumOfOther([1,2,3]);
    assert.deepEqual(arr, [5,4,3]);
  });

  it('#test2 should return [9,97,112]', () => {
    const arr = sumOfOther([100, 12, -3]);
    assert.deepEqual(arr, [9,97,112]);
  });

  it('#test3 should return [0,1,-1]', () => {
    const arr = sumOfOther([0,-1,1]);
    assert.deepEqual(arr, [0,1,-1]);
  });
});