export function solution(price, money, count) {
  let total = 0;
  for (let index = 0; index < count; index++) {
    total += price * (index + 1);
  }

  return total - money > 0 ? total - money : 0;
}
