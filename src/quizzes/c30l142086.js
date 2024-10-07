export function solution(s) {
  const memo = {};

  const result = [];
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (memo[char] === undefined) {
      result.push(-1);
      memo[char] = index;
    } else {
      result.push(index - memo[char]);
      memo[char] = index;
    }
  }

  return result;
}
