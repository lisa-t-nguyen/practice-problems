import isPrime from 'isPrime.js';

function sortedPrimes(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      result.push(array[i]);
    }
  }

  result.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  return result;
}

sortedPrimes([7, 5, 9, 1, 4, 11]);
