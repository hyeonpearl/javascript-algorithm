// 제출한 답
function solution(n) {
  return +String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

// 다른 풀이 #1
function solution(n) {
  return parseInt((n + '').split('').sort().reverse().join(''));
}
