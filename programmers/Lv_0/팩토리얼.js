// 제출한 답
function solution(n) {
  let factorial = [1, 1];
  for (let i = 2; n > factorial[i - 1]; i++) {
    console.log(factorial[i - 1]);
    factorial[i] = factorial[i - 1] * i;
  }

  return factorial[factorial.length - 1] === n
    ? factorial.length - 1
    : factorial.length - 2;
}

// 다른 풀이 #1
function solution(n) {
  let i = 1;
  let f = 1;
  while (f <= n) f *= ++i;
  return i - 1;
}

// #2
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}
