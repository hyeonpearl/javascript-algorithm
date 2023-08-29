// 제출한 답
function solution(arr, divisor) {
  const answer = arr.filter(el => el % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

// 다른 풀이 #1
function solution(arr, divisor) {
  var answer = [];
  arr.map(o => {
    o % divisor === 0 && answer.push(o);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
