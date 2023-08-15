// 제출한 답
function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else {
    return 0;
  }
}

// 다른 풀이 #1
function solution(number, n, m) {
  return +!(number % n || number % m);
}

// #2
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
