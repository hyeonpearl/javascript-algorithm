// 내 풀이
function solution(rsp) {
  const answer = { 0: 5, 2: 0, 5: 2 };
  return [...rsp].map(el => answer[el]).join('');
}

// 다른 사람 풀이
function solution(rsp) {
  return rsp
    .split('')
    .map(el => (el === '2' ? 0 : el === '0' ? 5 : 2))
    .join('');
}
