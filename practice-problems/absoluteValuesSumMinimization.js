// Given a sorted array of integers a, your task is to determine which element
// of a is closest to all other values of a. In other words, find the element x
// in a, which minimizes the following sum:

const nums = [2, 4, 7];

function solution(array) {
  let index = 0;
  let maxSum;
  for (let i = 0; i < array.length; i++) {
    let tempSum = 0;
    for (let j = 0; j < array.length; j++) {
      tempSum += Math.abs(array[i] - array[j]);
    }
    if (i === 0) {
      maxSum = tempSum;
    }
    if (tempSum < maxSum) {
      maxSum = tempSum;
      index = i;
    }
  }
  return array[index];
}

solution(nums);

// function solution(A) {
// return A[Math.ceil(A.length / 2) - 1];
// }
