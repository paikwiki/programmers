export function solution(M, N) {
  const [long, short] = [M, N].sort((a, b) => (a < b ? -1 : 1));
  return long - 1 + (short - 1) * long;
}
