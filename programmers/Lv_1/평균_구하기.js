// 제출한 답
function solution(arr) {
  return arr.reduce((acc, cur) => acc + Number(cur), 0) / arr.length;
}
