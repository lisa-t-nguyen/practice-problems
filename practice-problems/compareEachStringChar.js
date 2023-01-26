// Given a string, find the number of different characters in it.

function solution(string) {
  let seen = '';
  for (let i = 0; i < string.length; i++) {
    if (!seen.includes(string[i])) {
      seen += string[i];
    }
  }
  return seen.length;
}

const string = 'asdfec';

solution(string);
