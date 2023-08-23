// 제출한 답
function solution(numbers) {
  var answer = numbers.sort((a, b) => a - b);
  return answer[answer.length - 1] * answer[answer.length - 2];
}

// 다른 풀이 #1
function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
