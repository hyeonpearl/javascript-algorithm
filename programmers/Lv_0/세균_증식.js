// 제출한 답
function solution(n, t) {
  let answer = n;
  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }
  return answer;
}

// 다른 풀이 #1
function solution(n, t) {
  return n << t;
}

// #2
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

// #3
function solution(n, t) {
  return n * Math.pow(2, t);
}

// #4
function solution(n, t) {
  return n * 2 ** t;
}
