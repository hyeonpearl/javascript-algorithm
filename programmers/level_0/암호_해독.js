// 내 풀이
function solution(cipher, code) {
  return Array.from(cipher)
    .filter((item, index) => (index + 1) % code === 0)
    .join('');
}

// 다른 사람 풀이
function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
}
