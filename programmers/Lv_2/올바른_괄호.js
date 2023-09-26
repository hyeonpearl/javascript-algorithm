// 제출한 답
function solution(s) {
  let opened = 0;

  for (const char of s) {
    if (char === '(') opened += 1;
    if (char === ')') opened -= 1;
    if (opened < 0) return false;
  }

  return opened === 0;
}

// 다른 풀이 #1
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === '(' ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

// #2
function is_pair(s) {
  var result = s.match(/(\(|\))/g);
  return result[0] == '(' && result.length % 2 == 0 ? true : false;
}

// #3
function is_pair(s) {
  var l = 0,
    r = 0;
  for (var i = 0; i < s.length; ++i) {
    if (s[i] == '(') {
      ++l;
    } else if (s[i] == ')') {
      if (l == 0) return false;
      else --l;
    }
  }
  return l == 0;
}
