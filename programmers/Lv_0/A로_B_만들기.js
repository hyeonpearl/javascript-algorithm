// 제출한 답
function solution(before, after) {
  return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}
