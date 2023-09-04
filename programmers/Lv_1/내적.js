// 제출한 답
function solution(a, b) {
  return a.reduce((x, y, i) => x + y * b[i], 0);
}

// 다른 풀이 #1
function solution(a, b) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
