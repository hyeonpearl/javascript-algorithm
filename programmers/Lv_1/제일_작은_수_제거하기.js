// 제출한 답
function solution(arr) {
  const index = arr.indexOf(Math.min(...arr));
  arr.splice(index, 1);

  return arr.length === 0 ? [-1] : arr;
}

// 다른 풀이 #1
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter(i => i !== min) : [-1];
}
