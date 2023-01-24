// Given array of integers, remove each kth element from it

function solution(inputArray, k) {
  const checkAgainst = {};
  const result = [];
  for (let i = (k - 1); i < inputArray.length; i += k) {
    checkAgainst[i] = true;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (!checkAgainst[i]) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

solution(array, 3);
