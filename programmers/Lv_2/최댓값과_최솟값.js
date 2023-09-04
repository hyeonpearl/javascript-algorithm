// 제출한 답
function solution(s) {
  const arr = s.split(' ');
  return Math.min(...arr) + ' ' + Math.max(...arr);
}
