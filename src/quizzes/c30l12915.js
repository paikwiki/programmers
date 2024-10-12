export function solution(strings, n) {
  return strings.sort((str1, str2) =>
    str1[n] === str2[n] ? str1.localeCompare(str2) : str1[n] < str2[n] ? -1 : 1
  );
}
