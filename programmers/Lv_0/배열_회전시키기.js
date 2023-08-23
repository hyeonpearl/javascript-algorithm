// 제출한 답
const solution = (numbers, direction) =>
  direction === 'left'
    ? [...numbers.slice(1), numbers[0]]
    : [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];

// 다른 풀이 #1
function solution(numbers, direction) {
  direction === 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());

  return numbers;
}
