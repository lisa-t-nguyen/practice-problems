// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// function solution(inputArray, k) {
//   let resultSum = 0;
//   let left = 0;
//   let tempSum = 0;
//   for (let i = left; i < k; i++) {
//     tempSum += inputArray[i];
//   }
//   resultSum = tempSum;

//   let right = k - 1;
//   while (right < inputArray.length) {
//     left++;
//     right++;
//     tempSum += inputArray[right];
//     tempSum -= inputArray[left - 1];
//     if (tempSum > resultSum) {
//       resultSum = tempSum;
//     }
//   }
//   return resultSum;
// }

function solution(inputArray, k) {
  let resultSum = -Infinity;
  let left = 0;
  while (left < inputArray.length - 1) {
    let tempSum = 0;
    for (let i = left; i < k + left; i++) {
      tempSum += inputArray[i];
    }
    left++;
    if (tempSum > resultSum) {
      resultSum = tempSum;
    }
  }
  return resultSum;
}

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

solution(array, 3);
