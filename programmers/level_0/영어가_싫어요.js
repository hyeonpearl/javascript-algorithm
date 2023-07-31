function solution(numbers) {
  const nums = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const regex = new RegExp(Object.keys(nums).join('|'), 'g');

  return Number(numbers.replace(regex, key => nums[key]));
}

// 다른 사람 풀이 #1
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    v => {
      return obj[v];
    }
  );

  return Number(num);
}

// #2
function solution(numbers) {
  const number = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}

// #3
var solution = n =>
  Number(
    [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ].reduce((t, s, i) => t.replaceAll(s, i), n)
  );
