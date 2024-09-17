export function solution(sides) {
  const longLine = sides[0] >= sides[1] ? sides[0] : sides[1];
  const shortLine = longLine === sides[0] ? sides[1] : sides[0];

  let result = 0;
  let line = longLine;

  while (longLine < line + shortLine) {
    result += 1;
    line--;
  }

  line = longLine + 1;

  while (line < longLine + shortLine) {
    result += 1;
    line++;
  }

  return result;
}
