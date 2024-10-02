export function solution(n) {
  const watermelon = "수박";

  return Array(n)
    .fill(null)
    .map((_, index) => watermelon[index % 2])
    .join("");
}
