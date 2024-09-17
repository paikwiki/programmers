export function solution(i, j, k) {
  const arr = [];

  for (let idx = i; idx <= j; idx++) {
    arr.push(`${idx}`);
  }
  const char = `${k}`;

  return arr.reduce(
    (acc, curr) =>
      curr.includes(char)
        ? acc + curr.split("").filter((c) => c === char).length
        : acc,
    0
  );
}
