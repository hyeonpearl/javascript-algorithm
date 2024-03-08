function solution(t, p) {
  let answer = 0;
  const tSplit = t.split('');

  for (let i = 0; i < tSplit.length; i++) {
    const cal = tSplit.slice(i, i + p.length).join('');

    if (cal.length === p.length) {
      if (cal <= p) {
        answer += 1;
      }
    }
  }

  return answer;
}
