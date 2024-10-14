export function solution(a, b) {
  const weedDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return weedDays[
    (monthDays.slice(0, a - 1).reduce((acc, curr) => acc + curr, 0) + b + 4) % 7
  ];
}
