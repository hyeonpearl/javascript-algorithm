// 제출한 답
function solution(s) {
  if ((s.length === 4 || s.length === 6) && !s.match(/[a-zA-Z]/)) return true;
  else return false;
}

// 다른 풀이 #1
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}

// #2
function alpha_string46(s) {
  var result = false;
  if ((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
    result = true;
  }

  return result;
}
