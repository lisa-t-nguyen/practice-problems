// Have the function StringChallenge(str) take a string and determine whether a 
// palindrome can be created by removing 0, 1, or 2 characters.
// If 0, return "Palindrome"
// If 1, return the first character that could be removed to produce a palindrome.
// If 2, return the first two characters that could be removed to produce a palindrome. 
// (they don't have to be adjacent, and return the longest possible palindrome combination)
// Otherwise, return "not possible"


function palindromeRemoveCharacters(str) {
  if (str.length < 3) { return 'not possible'; }
  if (isPalindrome(str)) { return 'palindrome'; }

  // Time Complexity: n^2 + n^3 = O(n^3)
  // Space Complexity: O(1)

  // Check Singles
  for (let i = 0; i < str.length; i++) {
    const oneRemovedString = str.slice(0, i) + str.slice(i + 1, str.length);
    if (isPalindrome(oneRemovedString)) {
      return str[i];
    }
  }

  // Check Doubles
  for (let i = 0; i < str.length; i++) {
    const oneRemovedString = str.slice(0, i) + str.slice(i + 1, str.length);

    for (let j = 0; j < oneRemovedString.length; j++) {
      const twoRemovedString = oneRemovedString.slice(0, j) + oneRemovedString.slice(j + 1, oneRemovedString.length);
      if (isPalindrome(twoRemovedString)) {
        return str[i] + oneRemovedString[j];
      }
    }
  }

  return 'not possible';
}

function isPalindrome(string) {
  const stringLength = string.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (string[i] !== string[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

// "aaabaaaj" -> "j"
// "annak" -> "k" failed
palindromeRemoveCharacters('aaabaaaj');
// console.log(palindromeRemoveCharacters('annak'));

// "abcde"
// i = 0: '' + 'bcde' = 'bcde' - letter a was taken out
// i = 1; 'a' + 'cde' = 'acde' - letter b was taken out
// i = 2; 'ab' + 'de' = 'abde' - letter c was taken out
// i = 3; 'abc' + 'e' = 'abce' - letter d was taken out
// i = 4; 'abcd' + '' = 'abcd' - letter e was taken out

// "abcde"
// i = 0: '' + 'bcde' = 'bcde' - letter a was taken out
//    Inner loop
//    j = 0: '' + 'cde' = 'cde' - letter b was taken out
//    j = 1: 'b' + 'de' = 'bde' - letter c was taken out
//    j = 2: 'bc' + 'e' = 'bce' - letter d was taken out
//    j = 3: 'bcd' + '' = 'bcd' - letter e was taken out
// i = 1; 'a' + 'cde' = 'acde' - letter b was taken out
// i = 2; 'ab' + 'de' = 'abde' - letter c was taken out
// i = 3; 'abc' + 'e' = 'abce' - letter d was taken out
// i = 4; 'abcd' + '' = 'abcd' - letter e was taken out

// "aaabaaaj"
// i = 0: '' + 'aabaaaj' = 'aabaaaj'
// i = 1: 'a' + 'abaaaj' = 'aabaaaj'
// i = 2: 'aa' + 'baaaj' = 'aabaaaj'
// i = 3: 'aaa' + 'aaaj' = 'aaaaaaj' - 'b' is removed
//   j = 0: '' + 'aaaaaj' = 'aaaaaj'
//   j = 1: 'a' + 'aaaaj' = 'aaaaaj'
//   j = 2: 'aa' + 'aaaj' = 'aaaaaj'
//   j = 3: 'aaa' + 'aaj' = 'aaaaaj'
//   j = 4: 'aaaa' + 'aj' = 'aaaaaj'
//   j = 5: 'aaaaa' + 'j' = 'aaaaaj'
//   j = 6: 'aaaaaa' + '' = 'aaaaaa' - 'j' is removed, palindrome found
