// 제출한 답
function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (; a <= b; a++) {
      answer += a;
    }
  } else if (a > b) {
    for (; b <= a; b++) {
      answer += b;
    }
  } else {
    return a;
  }

  return answer;
}

// 다른 풀이 #1
function adder(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// #2
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

// #3
function adder(a, b) {
  var result = a < b ? a : b;
  while (a != b) {
    result += a < b ? ++a : ++b;
  }
  return result;
}
