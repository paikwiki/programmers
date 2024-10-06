export function solution(s) {
  return s
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
