// 내 풀이
function solution(n) {
  let answer = 0;
  for (let char of n.toString()) {
    answer += parseInt(char);
  }
  return answer;
}

// 다른 사람 풀이
function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}
