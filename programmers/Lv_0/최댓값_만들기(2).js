// 제출한 답
function solution(numbers) {
  const answer = numbers.sort((a, b) => b - a);
  return Math.max(
    answer[0] * answer[1],
    answer[answer.length - 1] * answer[answer.length - 2]
  );
}

// 다른 풀이 #1
function solution(numbers) {
  return [
    ...new Set(
      numbers.reduce(
        (acc, cur, idx) => [
          ...acc,
          ...numbers.slice(idx + 1).map(v => cur * v),
        ],
        []
      )
    ),
  ].sort((a, b) => b - a)[0];
}
