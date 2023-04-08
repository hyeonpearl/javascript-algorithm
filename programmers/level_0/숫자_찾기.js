// 내 풀이
function solution(num, k) {
  const answer = String(num)
    .split('')
    .map(item => parseInt(item))
    .indexOf(k);

  return answer !== -1 ? answer + 1 : -1;
}

// 다른 사람 풀이
function solution(num, k) {
  return (
    num
      .toString()
      .split('')
      .map(el => Number(el))
      .indexOf(k) + 1 || -1
  );
}
