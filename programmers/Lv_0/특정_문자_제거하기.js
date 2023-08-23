// 제출한 답
const solution = (my_string, letter) => my_string.replaceAll(letter, '');

// 다른 풀이 #1
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('');
  return answer;
}
