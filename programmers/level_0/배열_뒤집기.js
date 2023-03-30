function solution(num_list) {
  let answer = [];
  for (let i = 0; i < num_list.length; i++) {
    answer[i] = num_list[num_list.length - 1 - i];
  }
  return answer;
}

// Use JS Method
const solution = num_list => num_list.reverse();
