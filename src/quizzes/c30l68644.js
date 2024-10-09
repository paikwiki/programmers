export function solution(numbers) {
  const rawResult = numbers.reduce((acc, curr, index) => {
    let innerIdx = index + 1;
    if (innerIdx === numbers.length) return acc;

    while (innerIdx < numbers.length) {
      acc.push(curr + numbers[innerIdx]);
      innerIdx++;
    }

    return acc;
  }, []);

  return [...new Set(rawResult)].sort((a, b) => (a < b ? -1 : 1));
}
