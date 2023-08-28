// 제출한 풀이
function solution(x) {
  let hashad = 0;

  String(x)
    .split('')
    .map(el => (hashad += +el));

  return x % hashad === 0 ? true : false;
}

// 다른 풀이 #1
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

// #2
function Harshad(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}
