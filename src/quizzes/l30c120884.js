export function solution(chicken) {
  let temp = chicken;

  let result = 0;
  while (temp > 9) {
    const calc = Math.floor(temp / 10);
    const rest = temp % 10;
    result += calc;
    temp = calc + rest;
  }
  return result;
}
