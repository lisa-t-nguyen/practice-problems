function isPrime(number) {
  if (number < 2) return false; // if the number is less than 2, return false (1 is not a prime number)

  for (let i = 2; i <= Math.sqrt(number); i++) { // iterate through up to and including square root of input number
    if (number % i === 0) return false; // if the input number divided by i has a remainder of 0, return false (it is not prime)
  }
  return true; // return true (it is prime)
}

isPrime(5);

// 20
// =>
// 2 * 10
// 2 * 2 * 5

// 64
// =>
// 2 * 32
// 4 * 16
// 8 * 8

// 640000 / 2 = 320000
// sqrt(640000) = 800
