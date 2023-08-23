// 제출한 답
function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

// 다른 풀이 #1
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter(v => n % v === 0);
}
