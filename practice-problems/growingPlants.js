function solution(upSpeed, downSpeed, desiredHeight) {
  if (upSpeed > desiredHeight) {
    return 1;
  }
  const dailyDifference = upSpeed - downSpeed;
  const days = Math.ceil((desiredHeight - upSpeed) / dailyDifference);
  return days + 1;
}

solution(4, 2, 10);
