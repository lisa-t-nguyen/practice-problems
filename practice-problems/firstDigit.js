// Find the leftmost digit that occurs in a given string

function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(Number(inputString[i])) && inputString[i] !== ' ') {
      return inputString[i];
    }
  }
  return false;
}

const test1 = 'meow3423';

solution(test1);
