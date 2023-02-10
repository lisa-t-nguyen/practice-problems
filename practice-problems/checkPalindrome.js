function solution(string) {
  const stringLength = string.length;
  for (let i = 0; i < stringLength / 2; i++) {
    if (string[i] !== string[stringLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

solution('asdfe');
