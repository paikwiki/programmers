export function solution(arr, divisor) {
  const remainderZeros = arr.filter((item) => item % divisor === 0);

  return remainderZeros.length === 0
    ? [-1]
    : remainderZeros.sort((a, b) => (a < b ? -1 : 1));
}
