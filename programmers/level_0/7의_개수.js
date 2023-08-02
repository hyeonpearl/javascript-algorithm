// 제출한 답
function solution(array) {
  const answer = array
    .join('')
    .split('')
    .filter(el => Number(el) === 7);

  return answer.length;
}

// 다른 풀이 #1
function solution(array) {
  return array.join('').split('7').length - 1;
}

// #2
function solution(array) {
  let result = 0;

  array.map(item => {
    while (item > 0) {
      if (item % 10 === 7) {
        result += 1;
      }

      item = Math.floor(item / 10);
    }
  });

  return result;
}
