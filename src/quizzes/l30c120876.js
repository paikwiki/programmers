export function solution(lines) {
  const [min, max] = lines.reduce(
    (acc, curr) => {
      return [Math.min(acc[0], curr[0]), Math.max(acc[1], curr[1])];
    },
    [999, -999]
  );

  let result = 0;
  for (let curr = min; curr < max; curr++) {
    const flags = [];
    for (const line of lines)
      flags.push(line[0] <= curr && curr + 1 <= line[1]);

    if (flags.filter((b) => b === true).length > 1) result += 1;
  }

  return result;
}
