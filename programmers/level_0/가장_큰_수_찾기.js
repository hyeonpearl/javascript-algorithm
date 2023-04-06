function solution(array) {
  const max = Math.max(...array);
  const index = array.indexOf(max);

  return [max, index];
}
