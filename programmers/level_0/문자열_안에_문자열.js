// 제출한 답
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 다른 풀이 #1
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
