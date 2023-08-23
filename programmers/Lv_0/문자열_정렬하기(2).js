// 제출한 답
function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('');
}

// 다른 풀이 #1
function solution(s) {
  return [...s.toLowerCase()].sort().join('');
}
