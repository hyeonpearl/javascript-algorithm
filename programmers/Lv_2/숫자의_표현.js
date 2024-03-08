function solution(n) {
  // n의 홀수 약수의 개수

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) answer++;
  }

  return answer;
}
