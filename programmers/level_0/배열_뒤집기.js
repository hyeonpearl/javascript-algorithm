// 제출한 답
function solution(num_list) {
  let answer = [];
  for (let i = 0; i < num_list.length; i++) {
    answer[i] = num_list[num_list.length - 1 - i];
  }
  return answer;
}

// 다른 풀이 #1
const solution = num_list => num_list.reverse();
