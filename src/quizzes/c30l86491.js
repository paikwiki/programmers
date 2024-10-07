export function solution(sizes) {
  const [maxOfShort, maxOfLong] = sizes.reduce(
    (acc, widthAndHeight) => {
      const [short, long] = widthAndHeight.sort((a, b) => (a < b ? -1 : 1));

      return [Math.max(acc[0], short), Math.max(acc[1], long)];
    },
    [0, 0]
  );

  return maxOfShort * maxOfLong;
}
