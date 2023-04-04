// 내 풀이
function solution(my_string) {
  let answer = '';
  my_string.split('').forEach(item => {
    item.match(/[A-Z]/g)
      ? (answer += item.toLowerCase())
      : (answer += item.toUpperCase());
  });
  return answer;
}

// 다른 사람 풀이
function solution(my_string) {
  var answer = '';
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

function solution(my_string) {
  return my_string
    .split('')
    .map(n => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join('');
}
