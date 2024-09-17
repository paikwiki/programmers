export function solution(before, after) {
  const beforeArr = before.split("");
  const afterArr = after.split("");
  for (const char of beforeArr) {
    if (
      !(
        afterArr.includes(char) &&
        beforeArr.filter((i) => i === char).length ===
          afterArr.filter((i) => i === char).length
      )
    )
      return 0;
  }

  return 1;
}
