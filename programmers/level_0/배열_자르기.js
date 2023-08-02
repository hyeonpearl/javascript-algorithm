// 제출한 답
const solution = (numbers, num1, num2) => numbers.slice(num1, num2 + 1);

// 다른 풀이 #1
function solution(numbers, num1, num2) {
  return numbers.filter((n, i) => num1 <= i && i <= num2);
}
