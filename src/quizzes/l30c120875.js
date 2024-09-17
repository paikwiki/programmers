export function solution(dots) {
  const [dot1, dot2, dot3, dot4] = dots;

  const minus = ([a, b]) => a - b;
  const sorter = (a, b) => (a < b ? 1 : -1);
  const solve = ([dotA, dotB], [dotC, dotD]) => {
    const line1 =
      minus([dotA[1], dotB[1]].sort(sorter)) /
      minus([dotA[0], dotB[0]].sort(sorter));
    const line2 =
      minus([dotC[1], dotD[1]].sort(sorter)) /
      minus([dotC[0], dotD[0]].sort(sorter));

    return line1 === line2;
  };

  if (solve([dot1, dot2], [dot3, dot4]) === true) return 1;
  if (solve([dot1, dot3], [dot2, dot4]) === true) return 1;
  if (solve([dot1, dot4], [dot2, dot3]) === true) return 1;

  return 0;
}
