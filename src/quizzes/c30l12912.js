export function solution(a, b) {
  const [min, max] = [a, b].sort((a, b) => (a < b ? -1 : 1));
  return Array(max - min + 1)
    .fill(null)
    .reduce((acc, _, index) => acc + (min + index), 0);
}
