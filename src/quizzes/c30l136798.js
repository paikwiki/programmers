// https://lion284.tistory.com/417

export function solution(number, limit, power) {
  const getFactorCount = (num) =>
    Array(Math.floor(Math.sqrt(num)))
      .fill(0)
      .reduce((acc, _, index) => {
        const target = index + 1;
        if (num % target === 0)
          return num / target !== target ? acc + 2 : acc + 1;

        return acc;
      }, 0);

  let weight = 0;
  for (let index = 1; index < number + 1; index++) {
    const availablePower = getFactorCount(index);
    weight += limit < availablePower ? power : availablePower;
  }

  return weight;
}
