'use strict';
module.exports = function sumOfOther(arr) {
  let sum = 0;
  const result = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arrLength; i++) {
    result[i] = sum - arr[i];
  }
  return result;
};