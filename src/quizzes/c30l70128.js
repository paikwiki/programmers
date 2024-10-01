export function solution(a, b) {
  const len = a.length;

  return Array(len)
    .fill(null)
    .reduce((acc, _, index) => acc + a[index] * b[index], 0);
}
