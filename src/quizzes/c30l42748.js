export function solution(array, commands) {
  return commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => (a < b ? -1 : 1))[k - 1]
  );
}
