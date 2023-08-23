// 제출한 답
function solution(s) {
  const count = [...s].reduce(
    (a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }),
    {}
  );

  return Object.keys(count)
    .filter(key => count[key] === 1)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join('');
}

// 다른 풀이 #1
function solution(s) {
  let res = [];

  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);

  return res.sort().join('');
}

// #2
var solution = s =>
  [...s]
    .filter(c => s.match(new RegExp(c, 'g')).length == 1)
    .sort()
    .join('');

// #3
function solution(s) {
  const m = new Map();

  [...s].forEach(e => m.set(e, m.get(e) + 1 || 1));

  return [...m]
    .filter(e => e[1] === 1)
    .map(e => e[0])
    .sort()
    .join('');
}
