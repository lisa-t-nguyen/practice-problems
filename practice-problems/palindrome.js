// Given a string, write a function to check if it is a permutation of a
// palindrome. A palindrome is a word or phrase that is the same forwards and
// backwards. A permutation is a rearrangement of letters. The palindrome does not
// need to be limited to just dictionary words.

// palindromes examples = a, aba, abba, accca, acdca
// set const object equal to an empty object
// loop through string to look at each letter
// set object property equal to each letter
// count the value of each letter and set to value for each letter property in object
// determine whether string length is even or odd
// if string length is odd, one letter will have an odd count while the others will be even
// if string length is even, all letters will have an even count
// return true if any of these conditions are met
// return false if neither of these conditions are met

const solution = s => {
  const object = {};
  let oddNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (object[s[i]] === undefined) {
      object[s[i]] = 0;
    }
    object[s[i]] += 1;
  }
  for (const property in object) {
    if (object[property] % 2 === 0) {
      oddNum += 1;
    }
  }
  if (s.length % 2 === 1) {
    if (oddNum === 1) {
      return true;
    }
  }
  if (s.length % 2 === 0) {
    if (oddNum === 0) {
      return true;
    }
  }
  return false;
};

solution('racecar');
