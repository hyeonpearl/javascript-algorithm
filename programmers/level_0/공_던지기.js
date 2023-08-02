// 제출한 답
function solution(numbers, k) {
  let current = 0;
  const throughTheBall = current => (current + 2) % numbers.length;
  for (let i = 0; i < k - 1; i++) {
    current = throughTheBall(current);
  }
  return numbers[current];
}

// 다른 풀이 #1
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
// #2
const solution = (numbers, k) => numbers[((k * 2 - 1) % numbers.length) - 1];
