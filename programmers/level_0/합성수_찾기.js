// 다른 사람 풀이
function solution(n) {
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return true;
    }
    return false;
  };

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count += 1;
  }

  return count;
}

function solution(n) {
  let dp = new Array(n + 1).fill(1);

  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter(el => el === 0).length;
}

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter(i => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}
