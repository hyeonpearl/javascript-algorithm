// 내 풀이
function solution(my_string, num1, num2) {
  const answer = [...my_string];

  [answer[num1], answer[num2]] = [answer[num2], answer[num1]];

  return answer.join('');
}

// 다른 사람 풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}

function solution(my_string, num1, num2) {
  return my_string
    .split('')
    .map((v, i) =>
      i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v
    )
    .join('');
}
