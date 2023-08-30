// 제출한 답
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

// 다른 풀이 #1
function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b);
}
