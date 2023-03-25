// 내 풀이
const solution = (my_string, letter) => my_string.replaceAll(letter, '');

// 다른 사람 풀이
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('');
  return answer;
}
