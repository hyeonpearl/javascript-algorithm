function solution(sides) {
  const [a, b, c] = sides.sort((a, b) => b - a);
  return a < b + c ? 1 : 2;
}
