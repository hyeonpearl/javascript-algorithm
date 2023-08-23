// 제출한 답
function solution(money) {
  let answer = [];
  switch (true) {
    case money % 5500 === 0: {
      answer.push(money / 5500);
      answer.push(0);
      break;
    }
    case money % 5500 !== 0: {
      let cup = money / 5500;
      let leftCharge = money - 5500 * parseInt(cup);
      answer.push(parseInt(cup));
      answer.push(leftCharge);
      break;
    }
    default: {
      answer.push(0);
      answer.push(money);
      break;
    }
  }

  return answer;
}
