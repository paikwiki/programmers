export function solution(polynomial) {
  const calculated = polynomial
    .split(" + ")
    .map((char) => (char === "x" ? "1x" : char))
    .reduce(
      (acc, curr) => {
        if (curr.includes("x")) {
          return [acc[0] + parseInt(curr.replace("x", "")), acc[1]];
        } else {
          return [acc[0], acc[1] + parseInt(curr)];
        }
      },
      [0, 0]
    );
  return [
    calculated[0] !== 0 ? `${calculated[0] !== 1 ? calculated[0] : ""}x` : null,
    calculated[1] !== 0 ? `${calculated[1]}` : null,
  ]
    .filter((item) => item !== null)
    .join(" + ");
}
