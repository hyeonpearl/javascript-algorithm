// 내 풀이
// 약수의 개수 = 순서쌍
function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  return answer.length;
}

// 다른 사람 풀이
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
