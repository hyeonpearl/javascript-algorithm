// 제출한 답
function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let lcm = 1;

  for (let i = 1; i <= denum; i++) {
    if (denum % i === 0 && num % i === 0) {
      lcm = i;
    }
  }
  return [denum / lcm, num / lcm];
}
