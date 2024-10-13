export function solution(k, score) {
  const result = [];
  let chart = [];

  for (const item of score) {
    chart = [...chart, item].sort((a, b) => (a < b ? 1 : -1));
    if (chart.length > k) chart = chart.slice(0, k);

    result.push(chart[chart.length - 1]);
  }

  return result;
}
