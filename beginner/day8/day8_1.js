// 내 풀이
const solution = (numbers, num1, num2) => numbers.slice(num1, num2 + 1);

// 다른 사람 풀이
function solution(numbers, num1, num2) {
  return numbers.filter((n, i) => num1 <= i && i <= num2);
}
