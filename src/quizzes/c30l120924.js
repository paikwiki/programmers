export function solution(common) {
  const [item1, item2, item3] = common;
  const last = common[common.length - 1];

  return item2 - item1 === item3 - item2
    ? last + (item2 - item1)
    : last * (item2 / item1);
}
