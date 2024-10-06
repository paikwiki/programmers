export function solution(t, p) {
  const tLen = t.length;
  const pLen = p.length;
  const targets = [];
  for (let i = 0; i + pLen <= tLen; i++) {
    targets.push(parseInt(t.slice(i, i + pLen)));
  }
  const pNum = parseInt(p);

  return targets.reduce((acc, curr) => (curr <= pNum ? acc + 1 : acc), 0);
}
