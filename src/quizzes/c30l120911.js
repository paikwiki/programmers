export function solution(my_string) {
  return my_string
    .split("")
    .map((char) => char.toLowerCase())
    .sort((a, b) => a.localeCompare(b))
    .join("");
}
