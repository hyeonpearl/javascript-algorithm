// 내 풀이
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

// 다른 사람 풀이
var solution = s => [...s].filter((c, i) => s.indexOf(c) == i).join('');
