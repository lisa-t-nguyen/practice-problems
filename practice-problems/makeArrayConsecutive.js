function solution(statues) {
  let counter = 0;
  let lowestNum = 20;
  let highestNum = 0;
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] > highestNum) {
      highestNum = statues[i];
    }
    if (statues[i] < lowestNum) {
      lowestNum = statues[i];
    }
  }
  for (let i = lowestNum; i < highestNum; i++) {
    if (!statues.includes(i)) {
      counter += 1;
    }
  }
  return counter;
}

solution([2, 3, 6, 7, 10]);
