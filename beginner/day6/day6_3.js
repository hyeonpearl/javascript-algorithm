// 내 풀이
function solution(num_list) {
  const answer = [0, 0];
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? (answer[0] += 1) : (answer[1] += 1);
  }
  return answer;
}

// 다른 사람 풀이
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
