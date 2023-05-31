// You are in charge of the cake for a child's birthday. You have decided the cake
// will have one candle for each year of their total age. They will only be able to
// blow out the tallest of the candles. Count how many candles are tallest.

// Example

// candles = [4, 4, 1, 3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCandles(candles) {
  let candleHeight = 0;
  let numCandles = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > candleHeight) {
      candleHeight = candles[i];
      numCandles = 0;
    }
    if (candles[i] === candleHeight) {
      numCandles += 1;
    }
  }
  return numCandles;
}

birthdayCandles([3, 4, 2, 1]);
