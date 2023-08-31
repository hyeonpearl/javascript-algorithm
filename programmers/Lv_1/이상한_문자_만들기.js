// 제출한 답
function solution(s) {
  return s
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((_, index) =>
          index % 2 === 0
            ? word[index].toUpperCase()
            : word[index].toLowerCase()
        )
        .join('')
    )
    .join(' ');
}

// 다른 풀이 #1
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
