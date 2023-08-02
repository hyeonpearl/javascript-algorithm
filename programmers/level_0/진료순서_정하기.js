// 제출한 답
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map(v => sorted.indexOf(v) + 1);
}

// 다른 풀이 #1
function solution(emergency) {
  let sort = [...emergency].sort((a, b) => b - a);
  return emergency.map(k => {
    const queue = sort.findIndex(v => v === k);

    return queue + 1;
  });
}
