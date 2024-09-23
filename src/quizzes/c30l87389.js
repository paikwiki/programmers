export function solution(n) {
  const curr = n - 1;
  let val = 2;
  while (true) {
    if (curr % val !== 0) {
      val++;
      continue;
    }
    return val;
  }
}
