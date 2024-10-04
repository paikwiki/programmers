export function solution(n, m) {
  const [minValue, maxValue] = [n, m].sort((a, b) => (a < b ? -1 : 1));

  const flags = {
    isGreatestCommonFactorFound: false,
    isLeastCommonMultipleFound: false,
  };
  let [greatestCommonFactor, leastCommonMultiple] = [minValue, maxValue];

  let index = 0;
  while (Object.values(flags).some((i) => i === false)) {
    if (flags.isGreatestCommonFactorFound === false) {
      if (n % greatestCommonFactor === 0 && m % greatestCommonFactor === 0) {
        flags.isGreatestCommonFactorFound = true;
      } else {
        greatestCommonFactor = minValue - index;
      }
    }

    if (flags.isLeastCommonMultipleFound === false) {
      if (leastCommonMultiple % n === 0 && leastCommonMultiple % m === 0) {
        flags.isLeastCommonMultipleFound = true;
      } else {
        leastCommonMultiple = maxValue + index;
      }
    }

    index++;
  }

  return [greatestCommonFactor, leastCommonMultiple];
}
