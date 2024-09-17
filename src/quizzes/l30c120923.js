export function solution(num, total) {
  let result = [];
  let curr = -100000;
  while (result.length === 0 || total !== result.reduce((a, c) => a + c, 0)) {
    result = [];
    for (let idx = curr; idx < curr + num; idx++) {
      result.push(idx);
    }
    curr++;
  }

  return result;
}
