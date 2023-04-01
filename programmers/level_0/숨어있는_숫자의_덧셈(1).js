// 내 풀이
function solution(my_string) {
  let answer = 0;
  Array.from(my_string)
    .filter(char => parseInt(char))
    .forEach(item => (answer += parseInt(item)));
  return answer;
}

// 다른 사람 풀이
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}

function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => (Number(cur) ? +acc + +cur : acc),
    0
  );
}
