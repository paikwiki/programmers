export function solution(a, b, n) {
  let current = n;
  let cokes = 0;

  while (a <= current) {
    const newCokes = Math.floor(current / a) * b;
    cokes += newCokes;
    current = (current % a) + newCokes;
  }

  return cokes;
}
