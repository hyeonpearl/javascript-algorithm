function solution(n) {
  let num1 = 0;
  let num2 = 1;

  for (let i = 2; i <= n; i++) {
    let temp = (num1 + num2) % 1234567;
    num1 = num2;
    num2 = temp;
  }

  return num2;
}
