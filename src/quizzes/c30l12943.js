export function solution(num) {
  let current = num;
  for (let i = 0; i < 500; i++) {
    if (current === 1) return i;

    current = current % 2 === 0 ? current / 2 : current * 3 + 1;
  }

  return -1;
}
