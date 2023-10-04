// 제출한 답
function solution(n, m) {
  const greatestCommonDivisor = (n, m) =>
    n % m === 0 ? m : greatestCommonDivisor(m, n % m);
  const leastCommonMultiple = (n, m) => (n * m) / greatestCommonDivisor(n, m);

  return [greatestCommonDivisor(n, m), leastCommonMultiple(n, m)];
}

// 다른 풀이 #1
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

// 다른 풀이 #2
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}
