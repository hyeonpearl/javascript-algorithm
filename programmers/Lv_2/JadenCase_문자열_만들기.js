// 제출한 답
function solution(s) {
  return s
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}

// 다른 풀이 #1
function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

// #2
function solution(s) {
  var answer = s.split(' ');

  for (var i = 0; i < answer.length; i++) {
    answer[i] =
      answer[i].substring(0, 1).toUpperCase() +
      answer[i].substring(1).toLowerCase();
  }

  return answer.join(' ');
}
