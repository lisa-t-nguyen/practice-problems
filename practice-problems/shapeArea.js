function solution(n) {
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += (i * 4);
  }
  return area;
}

solution(4);
