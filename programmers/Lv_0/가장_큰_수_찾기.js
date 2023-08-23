// 제출한 답
function solution(array) {
  const max = Math.max(...array);
  const index = array.indexOf(max);

  return [max, index];
}
