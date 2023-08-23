// 제출한 풀이
function solution(start, end) {
  var answer = [];
  for (let i = start; i <= end; i++) answer.push(i);

  return answer;
}

// 다른 풀이 #1
function solution(start, end) {
  idx = start;
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}

// #2
function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((x, idx) => x + idx);
}
