export function solution(n) {
  return parseInt(
    `${n}`
      .split("")
      .map((i) => parseInt(i))
      .sort((a, b) => (a < b ? 1 : -1))
      .join("")
  );
}
