export function solution(board) {
  const width = board[0].length;
  const height = board.length;

  const report = Array(height)
    .fill(null)
    .map((_, index) => [...board[index]]);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const curr = board[y][x];
      if (curr === 1) {
        for (let i = y - 1; i <= y + 1; i++) {
          if (i < 0 || height <= i) continue;
          for (let j = x - 1; j <= x + 1; j++) {
            if (j < 0 || width <= j) continue;
            report[i][j] = 1;
          }
        }
      }
    }
  }

  const negatives = report.reduce(
    (acc, curr) => acc + curr.reduce((_acc, _curr) => _acc + _curr, 0),
    0
  );

  return width * height - negatives;
}
