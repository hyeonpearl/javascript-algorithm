function solution(n) {
  let array = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      array = [...array, i];
      n /= i;
    }
  }

  if (n >= 2) array = [...array, n];

  return [...new Set(array)].sort((a, b) => a - b);
}

// 다른 사람 풀이
function solution(n) {
  let answer = [];
  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
