function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(my_str.substr(i * n, n));
  }

  return answer;
}

// 다른 사람 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}
