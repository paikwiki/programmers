export function solution(s) {
  const result = s.split("").reduce(
    (acc, curr) => {
      if (curr.toLowerCase() === "p") return [acc[0] + 1, acc[1]];
      else if (curr.toLowerCase() === "y") return [acc[0], acc[1] + 1];
      else return acc;
    },
    [0, 0]
  );

  return result[0] === result[1];
}
