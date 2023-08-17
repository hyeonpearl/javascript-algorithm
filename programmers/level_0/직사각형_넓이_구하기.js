// 제출한 답
function solution(dots) {
  const xDots = dots.flatMap(([x, y]) => x);
  const yDots = dots.flatMap(([x, y]) => y);
  const width = Math.max(...xDots) - Math.min(...xDots);
  const height = Math.max(...yDots) - Math.min(...yDots);
  return width * height;
}

// 다른 풀이 #1
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

// #2
const solution = dots => {
  const x = [...new Set(dots.map(p => p[0]))];
  const y = [...new Set(dots.map(p => p[1]))];
  return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
};
