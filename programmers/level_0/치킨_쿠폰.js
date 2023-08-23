// 제출한 답
function solution(chicken) {
  const order = chickens => {
    if (chickens < 10) return 0;
    const service = ~~(chickens / 10);

    return service + order(service + (chickens % 10));
  };

  return order(chicken);
}

// 다른 풀이 #1
function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}

// #2
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}

// #3
function solution(chicken) {
  return ~~(chicken * 0.111111);
}
