// 제출한 답
function solution(my_string) {
  return my_string
    .split('')
    .filter(item => (item === '0' ? '0' : parseInt(item)))
    .sort((a, b) => a - b)
    .map(item => (item == 0 ? 0 : parseInt(item)));
}

// 다른 풀이 #1
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map(n => Number(n));
}
