export function solution(a, b) {
  let upper = a;
  let lower = b;
  for (let idx = a; idx > 1; idx--) {
    if (upper % idx === 0 && lower % idx === 0) {
      upper /= idx;
      lower /= idx;
    }
  }

  let temp = lower;
  while (temp % 5 === 0 || temp % 2 === 0) {
    if (temp % 5 === 0) {
      temp /= 5;
      continue;
    }

    if (temp % 2 === 0) {
      temp /= 2;
      continue;
    }
  }

  if (temp === 1) return 1;
  return 2;
}
