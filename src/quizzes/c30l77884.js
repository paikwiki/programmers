export function solution(left, right) {
  const factorsList = Array(right - left + 1)
    .fill(left)
    .map((number, index) => {
      const currentValue = number + index;
      if (currentValue === 1) return [1];

      const result = [1];

      let curr = 2;
      while (curr < currentValue) {
        if (currentValue % curr === 0) {
          result.push(curr);
        }
        curr++;
      }
      result.push(currentValue);

      return result;
    });

  return factorsList.reduce((acc, factors, index) => {
    const target = left + index;
    return factors.length % 2 === 0 ? acc + target : acc - target;
  }, 0);
}
