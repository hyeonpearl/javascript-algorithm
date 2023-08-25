function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}

// 다른 풀이 #1 재귀 함수
function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}
