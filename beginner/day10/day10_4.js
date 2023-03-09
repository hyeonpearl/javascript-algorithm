// 내 풀이
const solution = (numbers, direction) =>
  direction === 'left'
    ? [...numbers.slice(1), numbers[0]]
    : [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];

// 다른 사람 풀이
function solution(numbers, direction) {
  direction === 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());

  return numbers;
}
