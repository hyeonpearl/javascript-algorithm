// 제출한 답
function solution(order) {
  return [...order.toString()].filter(
    item => parseInt(item) === 3 || parseInt(item) === 6 || parseInt(item) === 9
  ).length;
}

// 다른 풀이 #1
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

// #2
function solution(order) {
  return ('' + order).split(/[369]/).length - 1;
}

// #3
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split('')
    .filter(num => mySet.has(Number(num))).length;
}
