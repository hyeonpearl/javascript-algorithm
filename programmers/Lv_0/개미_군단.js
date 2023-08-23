// 제출한 답
function solution(hp) {
  const general = 5;
  const soldier = 3;

  // Math.floor => ~~로 대체 가능
  return (
    Math.floor(hp / general) +
    Math.floor((hp % general) / 3) +
    ((hp % general) % soldier)
  );
}

// 다른 풀이 #1
function solution(hp) {
  const 장군개미 = Math.floor(hp / 5);
  const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
  const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
  return 장군개미 + 병정개미 + 일개미;
}
