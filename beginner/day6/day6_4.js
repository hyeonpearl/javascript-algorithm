// 내 풀이
function solution(my_string, n) {
  let answer = '';
  const array = my_string.split('');

  for (let i = 0; i < my_string.length; i++) {
    answer += array[i].repeat(n);
  }

  return answer;
}

// 다른 사람 풀이
function solution(my_string, n) {
  var answer = [...my_string].map(v => v.repeat(n)).join('');

  return answer;
}
