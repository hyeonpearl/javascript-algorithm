// 제출한 답
function solution(n) {
  let answer = 0;

  n.toString()
    .split('')
    .forEach(el => (answer += +el));

  return answer;
}

// 다른 풀이 #1
function solution(n) {
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}
