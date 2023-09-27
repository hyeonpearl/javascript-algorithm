// 제출한 답
function solution(arr) {
  return arr.filter((el, index) => el !== arr[index + 1]);
}

// 다른 풀이 #1
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// #2
function solution(arr) {
  var answer = [];
  var x = arr[0];
  var j = 0;
  var i = 1;
  while (true) {
    if (i == arr.length + 1) {
      break;
    }
    if (x == arr[i]) {
    } else {
      answer[j] = x;
      j++;
      x = arr[i];
    }
    i++;
  }
  return answer;
}
