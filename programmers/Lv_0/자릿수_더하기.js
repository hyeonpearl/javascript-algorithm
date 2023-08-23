// 제출한 답
function solution(n) {
  let answer = 0;
  for (let char of n.toString()) {
    answer += parseInt(char);
  }
  return answer;
}

// 다른 풀이 #1
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}
