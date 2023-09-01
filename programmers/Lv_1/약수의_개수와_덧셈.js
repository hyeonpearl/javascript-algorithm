// 제출한 답
function solution(left, right) {
  let answer = 0;

  for (let n = left; n <= right; n++) {
    answer = Number.isInteger(Math.sqrt(n)) ? answer - n : answer + n;
  }

  return answer;
}

// 다른 풀이 #1
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2) answer -= i;
    else answer += i;
  }

  return answer;
}

// #2
function solution(left, right) {
  let sum = ((left + right) / 2) * (right - left + 1);
  let l = Math.ceil(Math.sqrt(left));
  while (l ** 2 <= right) sum -= (l++) ** 2 * 2;
  return sum;
}
