// 제출한 답
function solution(spell, dic) {
  const sort = str =>
    [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join('');
  return dic.find(dic => sort(dic) === sort(spell.join(''))) ? 1 : 2;
}

// 다른 풀이 #1
function solution(p, d) {
  return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

// #2
function solution(spell, dic) {
  return dic.filter(v => spell.every(c => v.includes(c))).length ? 1 : 2;
}
