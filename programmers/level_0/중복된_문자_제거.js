// 제출한 답
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

// 다른 풀이 #1
var solution = s => [...s].filter((c, i) => s.indexOf(c) == i).join('');
