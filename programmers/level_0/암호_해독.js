// 제출한 답
function solution(cipher, code) {
  return Array.from(cipher)
    .filter((item, index) => (index + 1) % code === 0)
    .join('');
}

// 다른 풀이 #1
function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
}
