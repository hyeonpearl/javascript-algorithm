// 제출한 답
function solution(n) {
  let x = 0;

  while (n % x !== 1) {
    x++;
  }

  return x;
}

// 다른 풀이 #1
function solution(n) {
  let x = 0;
  return n % x === 1 ? x : solution(n, x + 1);
}
