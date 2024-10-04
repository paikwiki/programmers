export function solution(s) {
  const numChars = "1234567890";
  if (![4, 6].includes(s.length)) return false;

  for (let index = 0; index < s.length; index++)
    if (!numChars.includes(s[index])) return false;

  return true;
}
