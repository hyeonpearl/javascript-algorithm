// 제출한 답
function solution(strlist) {
  return strlist.map(item => item.length);
}

// 다른 풀이 #1
function solution(strlist) {
  return strlist.reduce((a, b) => [...a, b.length], []);
}
