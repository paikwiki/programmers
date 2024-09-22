export function solution(n) {
  if (n === 1 || n === 0) return n;

  const divisors = [1, n];

  for (let idx = 2; idx < n; idx++) {
    if (n % idx == 0) {
      divisors.push(idx);
    }
  }

  return divisors.reduce((acc, curr) => acc + curr, 0);
}
