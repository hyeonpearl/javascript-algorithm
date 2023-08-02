// 제출한 답
function solution(s) {
  return s
    .split(' ')
    .reduce(
      (sum, cur, index, arr) =>
        cur === 'Z' ? sum - arr[index - 1] : sum + Number(cur),
      0
    );
}
