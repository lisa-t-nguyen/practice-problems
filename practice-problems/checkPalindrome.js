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
// "aba"
// const stringLength = 3;
// LOOP
// stringLength / 2 = 1.5
// i = 0, is 0 < 1.5? YES
// string[i(0)] = "a"
// string[stringLength - 1 - i(0)] = "a"
// "a" === "a" TRUE, so continue looping
// LOOP
// i = 1, is 1 < 1.5? YES
// string[i(1)] = "b"
// string[stringLength - 1 - i(1)] = "b"
// "b" === "b" TRUE, so continue looping
// LOOP
// i = 2, is 2 < 1.5? NO, stop looping
// return true
