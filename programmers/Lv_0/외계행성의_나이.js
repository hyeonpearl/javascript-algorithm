// 제출한 답
function solution(age) {
  const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const ageArray = String(age).split('');
  let answer = '';

  for (let i = 0; i < ageArray.length; i++) {
    let index = Number(ageArray[i]);
    answer += array[index];
  }

  return answer;
}

// 다른 풀이 #1
function solution(age) {
  return age
    .toString()
    .split('')
    .map(v => 'abcdefghij'[v])
    .join('');
}
