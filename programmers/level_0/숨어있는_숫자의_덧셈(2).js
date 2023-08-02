// 제출한 답
function solution(my_string) {
  let answer = 0;

  my_string
    .replace(/[^0-9]/g, ' ')
    .split(' ')
    .filter(el => parseInt(el))
    .forEach(el => (answer += parseInt(el)));

  return answer;
}

// 다른 풀이 #1
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

// #2
function solution(my_string) {
  return my_string
    .replace(/[A-z]/g, ' ')
    .split(' ')
    .map(v => v * 1)
    .reduce((a, b) => a + b);
}
