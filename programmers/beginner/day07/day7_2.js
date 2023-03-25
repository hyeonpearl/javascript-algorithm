// 내 풀이
function solution(angle) {
  switch (true) {
    case angle > 0 && angle < 90: {
      return 1;
    }
    case angle === 90: {
      return 2;
    }
    case angle > 90 && angle < 180: {
      return 3;
    }
    case angle === 180: {
      return 4;
    }
    default: {
      return angle;
    }
  }
}

// 다른 사람 풀이
function solution(angle) {
  return [0, 90, 91, 180].filter(x => angle >= x).length;
}
