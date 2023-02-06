function solution(address) {
  const splitAddress = address.split('@');
  return splitAddress[splitAddress.length - 1];
}

solution('asfawefewf@paleperson.com');
