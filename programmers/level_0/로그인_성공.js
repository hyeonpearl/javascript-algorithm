// 제출한 답
function solution(id_pw, db) {
  const [id, pw] = id_pw;

  if (!db.find(([_id]) => _id === id)) return 'fail';

  return db.find(([_id, _pw]) => _id === id && _pw === pw)
    ? 'login'
    : 'wrong pw';
}

// 다른 풀이 #1
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}

// #2
function solution(id_pw, db) {
  db = db.filter(v => v[0] === id_pw[0]);

  if (!db.length) return 'fail';

  for (let d of db) if (d[1] === id_pw[1]) return 'login';

  return 'wrong pw';
}
