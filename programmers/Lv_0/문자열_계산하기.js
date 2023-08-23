// 제출한 답
function solution(my_string) {
  const answer = new String(my_string);
  return eval(answer.toString());
}

// 다른 풀이 #1
function solution(my_string) {
  return new Function('return ' + my_string)(); //eval(my_string);
}

// #2
function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(' ')) {
    if (ch === '+') {
      sign = 1;
    } else if (ch === '-') {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}

// #3
function solution(my_string) {
  const arr = my_string.split(' ').filter(e => e);
  while (arr.length > 1)
    arr.unshift(+arr.shift() + (arr.shift() === '+' ? 1 : -1) * arr.shift());
  return arr[0];
}
