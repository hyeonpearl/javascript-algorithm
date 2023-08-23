// 제출한 답
function solution(array, n) {
  const min = Math.min(...array.map(el => Math.abs(el - n)));

  return array.sort((a, b) => a - b).find(el => Math.abs(el - n) === min);
}

// 다른 풀이 #1
function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
}

// #2
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}

// #3
let solution = (r, n) =>
  r
    .map(e => [e, Math.abs(e - n)])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0];
