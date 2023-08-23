// 제출한 답
function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer += 1;
    }
  }
  return answer;
}

// 다른 풀이 #1
function solution(array, height) {
  var answer = array.filter(item => item > height);
  return answer.length;
}
