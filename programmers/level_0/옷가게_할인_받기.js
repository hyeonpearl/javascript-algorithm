// 제출한 답
function solution(price) {
  switch (true) {
    case price >= 100000 && price < 300000: {
      return Math.floor(price - price * 0.05);
    }
    case price >= 300000 && price < 500000: {
      return Math.floor(price - price * 0.1);
    }
    case price >= 500000: {
      return Math.floor(price - price * 0.2);
    }
    default: {
      return price;
    }
  }
}
