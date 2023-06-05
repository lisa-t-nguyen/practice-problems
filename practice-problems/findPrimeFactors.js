function findPrimeFactors(number) {
  const factors = [];
  let divisor = 2;

  if (number === 2) {
    return [2];
  }

  while (number > 2) {
    if (number % divisor === 0) {
      if (!factors.includes(divisor)) {
        factors.push(divisor);
      }
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

findPrimeFactors(5);
