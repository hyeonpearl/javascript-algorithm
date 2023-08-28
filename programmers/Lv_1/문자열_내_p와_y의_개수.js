// 제출한 답
function solution(s) {
  const pNy = [0, 0];

  s.split('').forEach(el => {
    if (el.toLowerCase() === 'p') pNy[0] += 1;
    else if (el.toLowerCase() === 'y') pNy[1] += 1;
  });

  return pNy[0] === pNy[1] ? true : false;
}

// 다른 풀이 #1
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

// 다른 풀이 #2
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

// 다른 풀이 #3
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === 'p') return acc + 1;
    else if (cur === 'y') return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
