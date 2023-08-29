// 제출한 답
function solution(num) {
  let iteration = 0;

  while (num !== 1) {
    if (iteration > 500) return -1;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    iteration++;
  }

  return iteration;
}

// 다른 풀이 #1
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
