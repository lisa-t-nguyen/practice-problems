// Have the function ArrayChalenge(arr) take the array of positive integers stored in arr
// and perform the following algorithm: continuously get the difference of adjacent integers
// to create a new array of integers, then do the same for the new array until a single number
// is left and return that number. For example: if arr is [4, 5, 1, 2, 7] then taking the difference
// of each pair of elements produces the following new array: [1, 4, 1, 5]. Then do the same for this
// new array to produce [3, 3, 4] -> [0, 1] -> 1. So for this example, your program should return the
// number 1 because that is what's left at the end.

function ArrayChallenge(arr) {
  while (arr.length > 1) {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(Math.abs(arr[i] - arr[i + 1]));
    }
    arr = newArr;
  }
  return arr[0];
}

const array = [3, 4, 5, 7, 10];
ArrayChallenge(array);

// Time: O(n^2)
// Space: O(n)

/*
arr = [3, 4, 5, 7, 10]
arr.length = 5
while (5 > 1) {
  const newArr = {};
  for loop
  arr[0] = 3 - starting at 3
  Math.abs(3 - 4) = 1
  newArr.push(1)
  newArr = [1, 1, 2, 3]
}
arr = newArr
newArr = [0, 1, 1]
newArr = [1, 0],
newArr = [1]

returns 1
*/
