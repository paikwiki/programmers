export function solution(numlist, n) {
  let arr = [...numlist];

  const result = [];

  if (arr.includes(n)) {
    result.push(n);
    arr = arr.filter((item) => item !== n);
  }
  let distance = 1;
  while (arr.length > 0) {
    const before = n - distance;
    const after = n + distance;
    if (after < 10001 && arr.includes(after)) {
      result.push(after);
      arr = arr.filter((item) => item !== after);
    }
    if (before > 0 && arr.includes(before)) {
      result.push(before);
      arr = arr.filter((item) => item !== before);
    }
    distance++;
  }

  return result;
}
