// Given a string, find the shortest possible string which can be achieved by
// adding characters to the end of initial string to make it a palindrome.

function solution(string) {
  let slicedLetters = ''; // 'i'
  let slicedString = string;
  if (checkPalindrome(string)) return string;
  while (string.length > 0) {
    slicedLetters += slicedString[0];
    slicedString = slicedString.slice(1);
    if (checkPalindrome(slicedString) === true) {
      for (let i = slicedLetters.length - 1; i >= 0; i--) {
        string += slicedLetters[i];
      }
      return string;
    }
  }
  return false;
}

function checkPalindrome(string) {
  const stringLength = string.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (string[i] !== string[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

const string = 'abcdef';

solution(string);
