function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (const iterator of d) {
    if (budget < iterator) {
      break;
    }
    answer += 1;
    budget -= iterator;
  }

  return answer;
}
