export function solution(s) {
  return s
    .split("")
    .reverse()
    .reduce((acc, curr, index) => {
      if (curr === "+") return acc;
      if (curr === "-") return acc * -1;
      if (index === 0) return parseInt(curr);

      const digit = 10 ** index;
      return acc + parseInt(curr) * digit;
    }, 0);
}
