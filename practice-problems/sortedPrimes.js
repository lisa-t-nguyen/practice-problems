import isPrime from 'isPrime.js';

function sortedPrimes(array) {
  const result = []; // initialize an empty array result to be returned
  for (let i = 0; i < array.length; i++) { // looping through input array
    if (isPrime(array[i])) { // if number at array[i] is prime
      result.push(array[i]); // push it into the result array
    }
  }

  result.sort((a, b) => { // sort the array of numbers in ascending order
    if (a > b) { // if a is greater than b
      return 1; // return 1, meaning a goes before b
    }
    if (a < b) { // if a is less than b
      return -1; // return -1, meaning a goes after b
    }
    return 0; // if a is neither of the above, we know it's equal to b. Return 0 meaning their the same.
  });

  return result; // return the result array
}

sortedPrimes([7, 5, 9, 1, 4, 11]);
