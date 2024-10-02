export function solution(s) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  return s
    .split("")
    .sort((a, b) => (alphabets.indexOf(a) < alphabets.indexOf(b) ? 1 : -1))
    .join("");
}
