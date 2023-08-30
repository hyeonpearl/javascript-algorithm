// 제출한 답
function solution(s) {
  if (s.length % 2 === 0) return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  else return s.slice(~~(s.length / 2), ~~(s.length / 2) + 1);
}

// 다른 풀이 #1
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
