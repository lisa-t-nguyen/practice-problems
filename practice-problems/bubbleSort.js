// Write a function bubbleSort which takes an array of integers as input
// and returns an array of these integers in sorted order from least to greatest

function bubbleSort(array) {
  // if you want to keep the array pure, make a shallow copy of the array (not
  // mutating the original array)
  // you can do that by creating a const arr = array.slice(); and replacing
  // all array with arr
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // above 3 lines could be replaced with:
        // [array[j], array[j + 1]] = [array[j + 1], [array][j]];
      }
    }
  }
  return array;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
