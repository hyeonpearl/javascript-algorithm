function solution(s) {
  let box = [0, 0];

  while (s.length > 1) {
    let removeZero = s.replace(/0/g, '').length;
    box[0] += 1;
    box[1] += s.length - removeZero;
    s = removeZero.toString(2);
  }

  return box;
}
