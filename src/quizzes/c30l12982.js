export function solution(d, budget) {
  let rest = budget;

  return d
    .sort((a, b) => (a < b ? -1 : 1))
    .reduce((acc, curr) => {
      if (rest <= 0) return acc;
      rest -= curr;

      return rest >= 0 ? acc + 1 : acc;
    }, 0);
}
