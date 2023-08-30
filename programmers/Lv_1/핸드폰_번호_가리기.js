// 제출한 답
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 다른 풀이 #1
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}
