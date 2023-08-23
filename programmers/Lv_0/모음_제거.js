// 제출한 답
function solution(my_string) {
  let answer = '';
  for (let char of my_string) {
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
      ? null
      : (answer += char);
  }
  return answer;
}

// 다른 풀이 #1
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

// #2
function solution(my_string) {
  return Array.from(my_string)
    .filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t))
    .join('');
}
