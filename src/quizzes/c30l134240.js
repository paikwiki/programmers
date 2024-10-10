export function solution(food) {
  return food
    .map((item) => (item % 2 === 0 ? item : item - 1))
    .reduce(
      (acc, curr, index) => {
        if (index === 0 || curr === 0) return acc;

        let [left, right] = acc;
        for (let i = 0; i < curr / 2; i++) {
          left = `${left}${index}`;
          right = `${index}${right}`;
        }

        return [left, right];
      },
      ["", ""]
    )
    .join("0");
}
