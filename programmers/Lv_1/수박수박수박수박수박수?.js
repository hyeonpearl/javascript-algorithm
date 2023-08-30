// 제출한 답
function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}

// 다른 풀이 #1
const waterMelon = n => '수박'.repeat(n).slice(0, n);
