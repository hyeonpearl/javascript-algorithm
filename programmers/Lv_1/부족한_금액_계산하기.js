// 제출한 답
function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) total += price * i;

  return total <= money ? 0 : total - money;
}

// 다른 풀이 #1
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

// #2
let solution = (p, m, c) => Math.max((p * c * ++c) / 2 - m, 0);
