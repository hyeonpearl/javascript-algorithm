// 제출한 답
function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

// 다른 풀이 #1
const solution = arr => `김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;
