function solution(inputArray) {
  let largestProduct = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if ((inputArray[i] * inputArray[i + 1]) > largestProduct) {
      largestProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return largestProduct;
}

solution([3, 4, 5, 6]);
