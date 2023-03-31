// 내 풀이
function solution(s1, s2) {
  let answer = 0;

  s1.forEach((item, i) => {
    if (s2.includes(item)) {
      answer += 1;
    }
  });

  return answer;
}

// 다른 사람 풀이
function solution(s1, s2) {
  return s1.filter(v => s2.includes(v)).length;
}
