function findPrimeFactors(number) {
  const factors = []; // initialize a constant empty array factors
  let divisor = 2; // initialize a divisor starter at 2

  if (number === 2) { // if the number is already 2
    return [2]; // return an array that only includes a factor of 2
  }

  while (number > 2) { // while the number is greater than 2
    // if the divisor divides the number with no remainder (if there is a remainder that is not 0, then the divisor is not a factor)
    if (number % divisor === 0) {
      if (!factors.includes(divisor)) { // if the factors array doesn't have the divisor already
        factors.push(divisor); // push the divisor into the factors array
      } // this prevents any duplicate divisors from being pushed (uniques only)
      number = number / divisor; // then divide the number by the factor we have found, setting this smaller number to the number variable.
    } else { // otherwise, if the divisor was not a factor
      divisor++; // increment the divisor by 1
    }
  }

  return factors; // return the factors array containing all of the unique prime factors of the number
}

findPrimeFactors(5);
