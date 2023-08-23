// 제출한 답
function solution(num_list) {
  let answer = 0;

  if (num_list.length > 10) {
    num_list.forEach(el => (answer += el));
  } else {
    answer = 1;
    num_list.forEach(el => (answer *= el));
  }

  return answer;
}

// 다른 풀이 #1
const solution = n => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
