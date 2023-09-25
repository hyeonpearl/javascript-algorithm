// 제출한 답
function solution(arr1, arr2) {
  const answer = [];

  const numRows = arr1.length;
  const numCols = arr1[0].length;

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }

  return answer;
}

// 다른 풀이 #1
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}

// #2
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}
