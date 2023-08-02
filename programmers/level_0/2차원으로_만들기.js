// 제출한 답
function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }
  return result;
}

// 다른 풀이 #1
function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
