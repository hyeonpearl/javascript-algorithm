// 내 풀이
function solution(dot) {
  return dot[0] >= 0 && dot[1] >= 0
    ? 1
    : dot[0] < 0 && dot[1] >= 0
    ? 2
    : dot[0] < 0 && dot[1] < 0
    ? 3
    : 4;
}

// 다른 사람 풀이
function solution(dot) {
  // 구조 분해
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
