// 제출한 답
function solution(i, j, k) {
  let answer = 0;

  for (i; i <= j; i++) {
    i.toString()
      .split('')
      .forEach(item => {
        if (item === k.toString()) answer += 1;
      });
  }

  return answer;
}

// 다른 풀이 #1
function solution(i, j, k) {
  let a = '';
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

// #2
function solution(i, j, k) {
  let str = Array(j - i + 1)
    .fill(i)
    .map((v, i) => v + i)
    .join('');
  return Array.from(str).filter(t => +t === k).length;
}
