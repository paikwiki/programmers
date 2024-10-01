export function solution(s) {
  const halfLen = Math.floor(s.length / 2);

  return s.length % 2 === 0 ? s.slice(halfLen - 1, halfLen + 1) : s[halfLen];
}
