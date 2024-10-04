export function solution(arr) {
  const result = [];
  let before = -1;
  arr.forEach((item) => {
    if (item !== before) {
      result.push(item);
      before = item;
    }
  });

  return result;
}
