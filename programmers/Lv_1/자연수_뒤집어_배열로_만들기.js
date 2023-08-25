// 제출한 답
function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map(el => Number(el));
}

// 다른 풀이 #1
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
