export function solution(arr) {
  const min = Math.min(...arr);
  const minRemoved = arr.filter((item) => item !== min);

  return minRemoved.length === 0 ? [-1] : minRemoved;
}
