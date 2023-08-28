// 제출한 답
function solution(n) {
  const isSqrtInteger = Number.isInteger(Math.sqrt(n));

  return isSqrtInteger ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

// 다른 풀이 #1
function nextSqaure(n) {
  var result = 0;
  var x = 0;

  while (x * x < n) {
    x++;
  }

  if (x * x == n) {
    x++;
    result = x * x;
  } else {
    result = 'no';
  }

  return result;
}
