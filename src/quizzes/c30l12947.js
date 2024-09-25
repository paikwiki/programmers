export function solution(x) {
  const y = `${x}`
    .split("")
    .map((i) => parseInt(i))
    .reduce((acc, curr) => acc + curr, 0);

  return x % y === 0;
}
