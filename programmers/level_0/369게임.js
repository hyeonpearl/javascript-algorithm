// 내 풀이
function solution(order) {
  return [...order.toString()].filter(
    item => parseInt(item) === 3 || parseInt(item) === 6 || parseInt(item) === 9
  ).length;
}

// 다른 사람 풀이
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

function solution(order) {
  return ('' + order).split(/[369]/).length - 1;
}

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split('')
    .filter(num => mySet.has(Number(num))).length;
}
