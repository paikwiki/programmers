export function solution(keyinput, board) {
  const direction = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };
  const movableXRange = Math.floor(board[0] / 2);
  const movableYRange = Math.floor(board[1] / 2);

  let curr = [0, 0];
  for (const key of keyinput) {
    const [valueX, valueY] = direction[key];

    curr = [
      valueX !== 0 && Math.abs(curr[0] + valueX) <= movableXRange
        ? curr[0] + valueX
        : curr[0],
      valueY !== 0 && Math.abs(curr[1] + valueY) <= movableYRange
        ? curr[1] + valueY
        : curr[1],
    ];
  }

  return curr;
}
