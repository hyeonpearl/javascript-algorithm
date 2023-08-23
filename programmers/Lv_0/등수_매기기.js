// 제출한 답
function solution(score) {
  const avgs = score.map(([eng, math]) => (eng + math) / 2);
  const reports = [...avgs]
    .sort((a, b) => b - a)
    .map((avg, i) => ({ avg, rank: i + 1 }))
    .map((report, i, arr) =>
      i > 0 && report.avg === arr[i - 1].avg
        ? { ...report, rank: arr[i - 1].rank }
        : report
    );

  return avgs.map(_avg => reports.find(({ avg }) => _avg === avg).rank);
}

// 다른 풀이 #1
function solution(score) {
  return score.map(el => {
    return (
      score.filter(v => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

// #2
function solution(score) {
  let avg = score.map(v => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map(v => sorted.indexOf(v) + 1);
}
