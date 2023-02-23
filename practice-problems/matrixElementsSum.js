function solution(matrix) {
  let output = 0;
  let currentZeroIndexes = [];
  let previousZeroIndexes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        currentZeroIndexes.push(j);
      }
      if (!previousZeroIndexes.includes(j)) {
        // console.log('adding', matrix[i][j])
        output += matrix[i][j];
      }
    }
    previousZeroIndexes = previousZeroIndexes.concat(currentZeroIndexes);
    currentZeroIndexes = [];
    // console.log(previousZeroIndexes);
  }
  return output;
}

// Input: an array of arrays (maximum dimension 5 x 5 for arrays within the array)
// Output: a single number = the amount of rooms that are suitable for the CodeBots
// Rooms that are suitable for CodeBots are NOT beneath a 0

// 0, 1, 2
// 1, 0, 0
// 9, 0, 8

// Looking at the first row, none of the numbers are below a 0, sum them all up to = 3
// Looking at the 2nd row, 1 is below a 0 so 1 is not counted, and 0, 0 is NOT below a 0, sum = 0
// Looking at the 3rd row, whose case is exactly the same as the 2nd row, 9 is NOT below a zero, 0 & 8 are /// below a 0 so they are not counted, sum = 9

// const matrix =
// [[0, 1, 1, 2],
// [0, 5, 0, 0],
// [2, 0, 3, 3]]

// console.log(matrix[0][3]);

const matrix = [[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]];

solution(matrix);
