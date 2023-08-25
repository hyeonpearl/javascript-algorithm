// 제출한 답
function solution(x, n) {
  return Array.from(Array(n), (_, index) => x * (index + 1));
}

// 다른 풀이 #1
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
