// 내 풀이
const solution = (n, k) => n * 12000 + (k - Math.floor(n / 10)) * 2000;

// 다른 사람 풀이
function solution(n, k) {
  // ~~는 Math.floor와 같은 기능
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
